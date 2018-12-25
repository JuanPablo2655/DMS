const Discord = require("discord.js");

module.exports.run = async (dead, message, args) => {
    const summer = [
        'rainy',
        'windy',
        'cloudy',
        'sunny'
    ]

    const winter = [
        'snow',
        'freezing rain',
        'wind',
        'cloudy'
    ]

    if (!args[0]) {
        message.channel.send("please choose `summer` `winter`")
    } else if (args[0] === "summer") {
        message.channel.send(`${summer[~~(Math.random() * summer.length)]}`);
    } else if (args[0] === "winter") {
        message.channel.send(`${winter[~~(Math.random() * winter.length)]}`);
    }
}

exports.conf = {
    aliases: ['weather']
}

exports.help = {
    name: "weather",
    description: "determine weather.",
    usage: "weather"
}