const userRepository = require("../repositories/userRepository")
const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite");
const UserRepository = require("../repositories/userRepository");
  
class UsersControllers {
  async create(request, response) {
    const {name, email, password} = request.body;
    
    const UserRepository = new userRepository();

    const checkUsersExist = await userRepository.finByEmail(email);
    
   if (checkUsersExist) {
    throw new AppError("This email is already registered.")
   }
   
   const hashedPassword = await hash(password, 8);
    
   await UserRepository.create({name , email, password: hashedPassword }) 

   return response.status(201).json();

  }

  async update(request, response) {
   const { name, email, password, old_password} = request.body;
   const user_id   = request.user.id;

   const database = await sqliteConnection()
   const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

   if(!user) {
    throw new AppError("user not found!")
   }

   const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email])

   if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id ) {
     throw new AppError("This email is already in use")
   }

   user.name = name ?? user.name;
   user.email = email ?? user.email;

   if(password && !old_password) {
    throw new AppError("you need to enter the old password to set the new password.")
   }

   if(password && old_password) {
   const checkOldPassword = await compare(old_password, user.password);

    if(!checkOldPassword) {
      throw new AppError("old password does not match.")
    }

    user.password = await hash(password, 8);
   }

    await database.run(`
     Update users SET
     name = ?, 
     email = ?, 
     password = ?,
     updated_at = DATETIME('now')
     WHERE id = ?`,
     [user.name, user.email, user.password, user_id] 
    );

    return response.status(200).json();
  }
}

module.exports =  UsersControllers;