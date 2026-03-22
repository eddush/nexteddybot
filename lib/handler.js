import fs from "fs";
import path from "path";

export function loadCommands(client) {
  client.commands = new Map();

  const commandsPath = path.join(process.cwd(), "commands");
  const files = fs.readdirSync(commandsPath);

  for (const file of files) {
    const command = require(commandsPath + "/" + file);
    client.commands.set(command.name, command);
  }
}

export function loadEvents(client) {
  const eventsPath = path.join(process.cwd(), "events");
  const files = fs.readdirSync(eventsPath);

  for (const file of files) {
    const event = require(eventsPath + "/" + file);
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}
