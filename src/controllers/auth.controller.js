const Admins = require("../models/Admin");
const jwt = require("../utils/jwt");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admins.findOne({ username });
    if (!admin)
      return res.status(403).json({ message: "Invalid username or password" });

    const compare = await bcrypt.compare(password, admin.password);

    if (!compare)
      return res.status(403).json({ message: "Invalid username or password" });

    const token = jwt.sign({ id: admin.id });

    res.status(200).json({ message: "Ok", data: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getLogin = async (_, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getAdmin = async (_, res) => {
  try {
    res.render("admin");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.addAdmin = async (req, res) => {
  const { username, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);

  try {
    await Admins.create({
      username,
      password: hashedPass,
    });

    res.status(201).json({ message: "Successfully created Admin" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
