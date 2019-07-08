import { Client } from 'discord.js';
import config from './config';
import { CommandHandler } from './CommandHandler/commandHandler';

const client: Client = new Client();
const commandHandler: CommandHandler = new CommandHandler();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	commandHandler.process(message)
});

client.login(config.token);