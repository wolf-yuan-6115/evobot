const { readdirSync } = require("fs");
const { join } = require("path");

console.log("Testing commands...");

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  try {
    require(join(__dirname, "commands", `${file}`));
  } catch(e) {
    console.log(`Found error when testing command ${file}`, e);
    process.exit(1);
  }
  console.log(`Tested command ${file}`);
}