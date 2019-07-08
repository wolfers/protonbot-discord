import { Message, Collection } from "discord.js";

export abstract class Command {
    public name: string;
    public description: string;
    public usage: string;
    public cooldown: number;
    public args: boolean;
    public guildOnly: boolean;
    public permsLevel: number;
    public aliases?: Array<string>;

    abstract execute(message: Message, args: Array<string>, commands?: Collection<string, any>)
}