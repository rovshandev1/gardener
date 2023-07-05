require("express-async-errors");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const routes = require("../routes");
const path = require("path");

const modules = (app) => {
  app.use(express.json());
  app.use(fileUpload());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "*",
    })
  );
  app.set("views", path.join(__dirname, "../public/views"));

  app.use(express.static(process.cwd() + "/src/public"));
  app.use(express.static(process.cwd() + "/src/uploads"));

  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/admin", (req, res) => {
    res.render("admin");
  });

  app.get("/about/", (req, res) => {
    res.render("about");
  });

  app.get("/contact/", (req, res) => {
    res.render("contact");
  });

  app.get("/feature", (req, res) => {
    res.render("feature");
  });

  app.get("/project", (req, res) => {
    res.render("project");
  });

  app.get("/quote", (req, res) => {
    res.render("quote");
  });

  app.get("/service", (req, res) => {
    res.render("service");
  });

  app.get("/team", (req, res) => {
    res.render("team");
  });

  app.get("/testimonial", (req, res) => {
    res.render("testimonial");
  });

  app.get("/*", (req, res) => {
    res.render("404");
  });

  app.use(routes);

  app.use((error, req, res, next) => {
    res.status(500).json({ message: "INTERNAL ERROR", error: error.message });
  });
};

module.exports = modules;
