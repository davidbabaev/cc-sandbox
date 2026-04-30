import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const rl = readline.createInterface({ input, output });
  const answer = (await rl.question("What's your name? ")).trim();
  rl.close();
  const name = answer || "David";
  console.log(`Hello, ${name}!`);
}

main();
