import { Collection } from 'discord.js';
import { Command } from '../models/commands';

import { help } from '../commands/help';
import { ping } from '../commands/ping';

const CommandsCollection: Collection<string, Command> = new Collection();

CommandsCollection.set('help', new help());
CommandsCollection.set('ping', new ping());

export {CommandsCollection};
