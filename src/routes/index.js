const member = require("./member.route");
const quote = require("./quote.route");
const hero = require("./hero.route");
const client = require("./client.route");
const auth = require("./auth.route");
const project = require("./Project.route");

module.exports = [member, quote, hero, client, auth, project];
