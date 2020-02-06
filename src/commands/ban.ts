import { Command } from "../models/commands";
import { Message } from "discord.js";

export class ban implements Command {
  name = 'ban';
  description = 'Actually for real bans someone. Abuse the power.';
  usage = '[!ban]';
  cooldown = 10;
  args = true;
  guildOnly = true;
  permsLevel = 0;

  async run(message: Message, args: [string]): Promise<void> {
    if (!args.length) {
        return message.channel.send('You must include a person to ban!');
    }

    const username = args[0];
    return message.channel.send(`${username}, you have been banned!`);
  }
}