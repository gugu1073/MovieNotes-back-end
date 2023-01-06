const {Router} = require("express");

const usersRoutes = require("./users.routes")
const notesRoutes = require("./notes.routes")
const tagsRoutes = require("./tags.routes")

const Routes  = Router()

Routes.use("/users", usersRoutes);
Routes.use("/notes", notesRoutes);
Routes.use("/tags", tagsRoutes);

module.exports = Routes;