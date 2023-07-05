const { Router } = require("express");
const { login, addAdmin, getLogin, getAdmin } = require("../controllers/auth.controller");

const route = new Router();

route.post("/auth/login", login).post("/add/admin", addAdmin);
route.get("/login" ,getLogin)
route.get("/admin" ,getAdmin)
module.exports = route;
