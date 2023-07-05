const Quotes = require("../models/Quote");

exports.createQuote = async (req, res) => {
  const { name, email, mobile, service, description } = req.body;

  await Quotes.create({
    name,
    email,
    mobile,
    service,
    description,
  });

  res.status(201).json({ message: "Successfully create Quotes" });
};

exports.editQuote = async (req, res) => {
  const { isActive } = req.body;

  const { id } = req.params;

  await Quotes.findByIdAndUpdate(id, {
    $set: {
      isActive,
    },
  });

  res.status(201).json({ message: "Success Updated Quote" });
};

exports.getQuote = async (_, res) => {
  const quote = await Quotes.find();
  res.status(200).json(quote);
};

exports.deleteQuote = async (req, res) => {
  const { id } = req.params;

  await Quotes.findByIdAndDelete(id);

  res.status(202).json({ message: "Success Deleted Quote" });
};
