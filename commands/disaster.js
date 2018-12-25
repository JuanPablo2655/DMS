const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const summer = [
        'flood',
        'tornado',
        'earthquake',
        'wild fires',
    ];

    const winter = [
        'Blizzard',
        'High wind',
        'Ice',
    ]

    if (!args[0]) {
        message.channel.send("please choose `summer` `winter`");
    } else if (args[0] === "summer") {
        message.channel.send(`${summer[~~(Math.random() * summer.length)]}`);
    } else if (args[0] === "winter") {
        message.channel.send(`${winter[~~(Math.random() * winter.length)]}`);
    }
}

exports.conf = {
    aliases: ['disaster']
}

exports.help = {
    name: "disaster",
    description: "Determins disasters",
    usage: "disaster"
}