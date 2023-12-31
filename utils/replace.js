"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
//  ╔⧉༻ Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™
//  ║>>  is a whatsapp user-bot with automation, moderation, music, games and more of 200+ commands!
//  ║
//  ║
//  ║⦁> 🌟 A versatile whatsApp multi-purpose bot designed for group management and user convenience.
//  ║⦁> 🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⦁> ⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║⦁> 🎉 BloomBot is intended for fun and convenience, but we're not responsible for account bans.
//  ║⦁> 🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⦁> ⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║⦁> 📞 Need assistance or have issues? Contact our developers.
//  ║⦁> 🔄 We'll continue providing updates and support for the original version of the bot.
//  ║⦁> 👉 Enjoy the features and functionality of BloomBot responsibly! Make the most out of your
//  ║    whatsApp group management experience! 🎉
//  ║
//  ║     🚨𝐔𝐬𝐚𝐠𝐞 𝐍𝐨𝐭𝐢𝐜𝐞🚨
//  ║⦁>    ⒸBloomBot is in no way affiliated with, authorized, maintained,
//  ║⦁>    sponsored or endorsed by whatsApp or any of its affiliates or
//  ║⦁>    subsidiaries. This is an independent and unofficial software.
//  ║⦁>    Use at your own risk.
//  ║
//  ╚◎ ⚙️Developers: +918436686758, +918250889325
"◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱( Ⓒ𝐁𝐥𝐨𝐨𝐦𝐁𝐨𝐭 (𝐦𝐮𝐥𝐭𝐢-𝐝𝐞𝐯𝐢𝐜𝐞) 𝐛𝐲 𝐌𝐚𝐠𝐧𝐞𝐮𝐦™ )☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎";
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const ignoredContentExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".mp4",
  ".avi",
  ".mov",
  ".webm",
  ".db",
];
const ignoredFolders = [".git", "node_modules"];
const ignoredRenameExtensions = [
  ".jpg",
  ".jpeg",
  ".png",
  ".gif",
  ".bmp",
  ".svg",
  ".mp4",
  ".avi",
  ".mov",
  ".webm",
  ".db",
];

const additionalEmojis = {
  heart: "❤️",
  smiley: "😊",
  rocket: "🚀",
  party: "🎉",
  fire: "🔥",
  thumbsUp: "👍",
  okHand: "👌",
};

function renameFilesAndFolders(dirPath, oldWord, newWord) {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);

    switch (true) {
      case stats.isDirectory() && !ignoredFolders.includes(file): {
        renameFilesAndFolders(filePath, oldWord, newWord);
        break;
      }
      case !stats.isDirectory(): {
        const fileExtension = path.extname(file).toLowerCase();
        switch (true) {
          case ignoredContentExtensions.includes(fileExtension): {
            const newFilePath = path.join(
              dirPath,
              replaceAll(file, oldWord, newWord)
            );
            fs.renameSync(filePath, newFilePath);
            break;
          }
          case !ignoredRenameExtensions.includes(fileExtension): {
            const fileContent = fs.readFileSync(filePath, "utf8");
            const newContent = replaceAll(fileContent, oldWord, newWord);
            fs.writeFileSync(filePath, newContent, "utf8");

            const newFilePathRenamed = path.join(
              dirPath,
              replaceAll(file, oldWord, newWord)
            );
            fs.renameSync(filePath, newFilePathRenamed);
            break;
          }
        }
        break;
      }
    }
  });
}

function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  blue: "\x1b[34m",
  resetColor: "\x1b[39m",
};

console.log(
  `${colors.cyan}==== File and Folder Renamer ${additionalEmojis.rocket} ====`
);

function startRenaming() {
  rl.question(
    `Enter the old word ${additionalEmojis.party} (or 'exit' to quit): `,
    (oldWord) => {
      if (oldWord.toLowerCase() === "exit") {
        console.log(`${colors.red}Exiting...${colors.resetColor}`);
        rl.close();
        return;
      }

      rl.question(
        `Enter the new word ${additionalEmojis.fire} : `,
        (newWord) => {
          renameFilesAndFolders(".", oldWord, newWord);
          console.log(`${colors.green}Renaming completed!${colors.resetColor}`);
          startRenaming();
        }
      );
    }
  );
}

startRenaming();
