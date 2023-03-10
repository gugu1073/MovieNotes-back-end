class SessionsController {
 async Create(request, response) {
   const {email, password} = request.body;

   return response.json({email, password});
  }
}

module.exports = SessionsController;