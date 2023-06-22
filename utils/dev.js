const chalk = require("chalk");

const handleError = (message) => {
  console.log(
    chalk.red("[ERROR]"),
    chalk.white(">>"),
    chalk.red("Developer Badge"),
    chalk.white(">>"),
    chalk.red(message)
  );
  process.exit(1);
};

const handleSuccess = (message) => {
  console.log(
    chalk.green("[SUCCESS]"),
    chalk.white(">>"),
    chalk.green("Developer Badge"),
    chalk.white(">>"),
    chalk.green(message)
  );
};

const connectToDatabase = async () => {
  try {
    const mongoose = require("mongoose");
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_TOKEN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    handleSuccess("Connected to the database!");
  } catch (err) {
    handleError("Failed to connect to the database!");
    console.log(err);
  }
};

const addDeveloperBadge = async () => {
  const memberId = process.argv[2];
  try {
    const model = require("./database/models/badge.js");
    const data = await model.findOne({ User: memberId });
    switch (data) {
      case null: {
        const newData = new model({
          User: memberId,
          FLAGS: ["DEVELOPER"],
        });
        await newData.save();
        break;
      }
      default: {
        data.FLAGS.push("DEVELOPER");
        await data.save();
        break;
      }
    }
    console.log(
      chalk.white(">>"),
      chalk.red("Developer Badge"),
      chalk.green("has been added to the user!")
    );
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
};

require("dotenv").config("./.env");
connectToDatabase();
addDeveloperBadge();
