import { Client, GatewayIntentBits } from "discord.js";
import { loadCommands, loadEvents } from "../../lib/handler";

let client;

export default async function handler(req, res) {
  if (!client) {
    client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
      ],
    });

    loadCommands(client);
    loadEvents(client);

    await client.login(process.env.DISCORD_TOKEN);
  }

  res.status(200).json({ status: "Bot running" });
}
