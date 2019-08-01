import config from '../config'
import { Message, Collection } from 'discord.js'
import { Command } from '../models/commands';
import { CommandsCollection } from '../CommandHandler/commands'


export class help implements Command {
	name = 'help';
	description = 'List all of my commands or info about a specific command.';
	aliases = ['commands'];
	usage = '[command name]';
    cooldown = 5;
    guildOnly = false;
    permsLevel = 0
    args = true
    commands: Collection<string, Command> = CommandsCollection;
	async run(message: Message, args: Array<string>): Promise<void> {
        const data = [];

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(this.commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${config.prefix}help [command name]\` to get info on a specific command!`);

            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = this.commands.get(name) || this.commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            message.reply('that\'s not a valid command!');
            return;
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${config.prefix}${command.name} ${command.usage}`);

        message.channel.send(data, { split: true });
        return;
	};
};