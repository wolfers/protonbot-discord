import { Command } from "../models/commands";
import { Message } from "discord.js";

export class ping implements Command {
  name = 'ping';
  description = 'Ping!';
  usage = '[!ping]';
  cooldown = 5;
  args = false;
  guildOnly = false;
  permsLevel = 0;

  async run(message: Message, args: [string]): Promise<void> {
    message.channel.send('Pong!');
  }
}