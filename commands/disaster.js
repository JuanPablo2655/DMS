const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const disaster = [
        'flood',
        'tornado',
        'earthquake',
        'wild fires',
    ];
    message.channel.send(`${disaster[~~(Math.random() * disaster.length)]}`);
}