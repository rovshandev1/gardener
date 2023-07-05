const { Router } = require("express");
const {
  createMember,
  getMember,
  editMember,
  deleteMember,
} = require("../controllers/member.controller");
const fileUpload = require("../middlewares/fileUpload");

const route = new Router();

route
  .post("/post/member", fileUpload, createMember)
  .get("/get/members", getMember)
  .put("/:id", fileUpload, editMember)
  .delete("/:id", deleteMember);

module.exports = route;
