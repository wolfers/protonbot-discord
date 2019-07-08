import { Command } from "../models/commands";
import { Message } from "discord.js";

export class ping extends Command {
    name: 'ping';
    description: 'Ping!';
    usage: '[!ping]';
    cooldown: 5;
    args: false;
    guildOnly: false;
    permsLevel: 0;
    execute(message: Message, args: Array<string>) {
		message.channel.send('Pong.');
	};
}