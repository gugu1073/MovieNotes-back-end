class UserCreateService {
  async execute({name, email, password}) {
    const UserRepository = new userRepository();

    const checkUsersExist = await userRepository.finByEmail(email);
    
   if (checkUsersExist) {
    throw new AppError("This email is already registered.")
   }
   
   const hashedPassword = await hash(password, 8);
    
   await UserRepository.create({name , email, password: hashedPassword }) 

     
  }
}


module.exports = UserCreateService;