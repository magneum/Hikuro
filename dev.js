const chalk = require("chalk");
if (!process.argv[2]) {
  console.log(
    chalk.red(`[ERROR]`),
    chalk.white(`>>`),
    chalk.red(`Developer Badge`),
    chalk.white(`>>`),
    chalk.red(`Please provide a member id!`)
  );
  process.exit(1);
}
require("dotenv").config("./.env");
const mango = require("mongoose");
const model = require("./database/models/badge.js");
mango.set("strictQuery", false);

const connectToDatabase = async () => {
  try {
    mango.connect(process.env.MONGO_TOKEN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      chalk.green(`[SUCCESS]`),
      chalk.white(`>>`),
      chalk.green(`Developer Badge`),
      chalk.white(`>>`),
      chalk.green(`Connected to the database!`)
    );
  } catch (err) {
    console.log(
      chalk.red(`[ERROR]`),
      chalk.white(`>>`),
      chalk.red(`Developer Badge`),
      chalk.white(`>>`),
      chalk.red(`Failed to connect to the database!`)
    );
    console.log(err);
    process.exit(1);
  }
};

const addDeveloperBadge = async () => {
  const memberId = process.argv[2];
  try {
    const data = await model.findOne({ User: memberId });
    if (!data) {
      const newData = new model({
        User: memberId,
        FLAGS: ["DEVELOPER"],
      });
      await newData.save();
    } else {
      data.FLAGS.push("DEVELOPER");
      await data.save();
    }
    console.log(
      chalk.white(`>>`),
      chalk.red(`Developer Badge`),
      chalk.green(`has been added to the user!`)
    );
  } catch (err) {
    console.log(err);
  } finally {
    mango.connection.close();
    process.exit(0);
  }
};

connectToDatabase();
addDeveloperBadge();
