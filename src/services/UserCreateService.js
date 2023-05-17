const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {
  constructor(userRepository) {
     this.userRepository = userRepository
  }
  
  async execute({name, email, password}) {
    const checkUsersExist = await this.userRepository.findByEmail(email);
    
   if (checkUsersExist) {
    throw new AppError("This email is already registered.")
   }
   
   const hashedPassword = await hash(password, 8);
    
   await this.userRepository.create({name , email, password: hashedPassword })  
  }
}


module.exports = UserCreateService;