import { Message } from "discord.js";

export interface Command {
  name: string;
  description: string;
  usage: string;
  cooldown: number;
  args: boolean;
  guildOnly: boolean;
  permsLevel: number;
  aliases?: Array<string>;

  run(message: Message, args: [string]): Promise<void>;
}