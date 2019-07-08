import config from '../config';
import { Message, Collection } from 'discord.js';
import { Command } from '../models/commands';
import { CommandsCollection } from './commands';

export class CommandHandler {
    prefix: string;
    constructor() {
        this.prefix = config.prefix;
    };

    public process(message: Message) {
        if (!message.content.startsWith(this.prefix) || message.author.bot) return;
        const [commandToRun, args] = this.getCommand(message, CommandsCollection);
        if (!commandToRun) return;
        if (commandToRun.guildOnly && message.channel.type !== 'text') {
            return message.reply('I can\'t execute that command inside DMs!');
        }
        
        if (commandToRun.args && !args.length) {
            let reply = `You didn't provide any arguemnts, ${message.author}!`;
            
            if (commandToRun.usage) {
                reply += `\nThe proper usage would be: \`${config.prefix}${commandToRun.name} ${commandToRun.usage}\``;
            }

            return message.channel.send(reply);
        }
        try{
            commandToRun.execute(message, args);
        } catch (error) {
            console.error(error); //change this to logging once implemented
            message.reply('there was an error trying to execute that command!');
        }
    };

    private getCommand(message: Message, commands: Collection<string, Command>): Array<any> {
        const args = message.content.slice(config.prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();
    
        return [commands.get(commandName)
            || commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName)), args];
    };
};