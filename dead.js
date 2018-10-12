const Discord = require("discord.js");
const dead = new Discord.Client;

const config = require("./config.json");
const secrets = require("./secrets.json");

dead.on('ready', () => {
    var channel = dead.channels.get('500438046630608920');
    console.log("ready bois!");
    dead.user.setActivity("the zombies", {type: 'WATCHING'});
    channel.send("bot online");
});

dead.on('message', (message) => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "pick") {
        const answers = [
            '1',
            '2',
            '3',
            '4',
            '5'
        ];
        message.channel.send(`${answers[~~(Math.random() * answers.length)]}`);
    };

    if (command === "weather") {
        const weather = [
            'rainy',
            'windy',
            'cloudy',
            'sunny',
        ];
        message.channel.send(`${weather[~~(Math.random() * weather.length)]}`);
    };

    if (command === "disaster") {
        const disaster = [
            'flood',
            'tornado',
            'earthquake',
            'wild fires',
        ];
        message.channel.send(`${disaster[~~(Math.random() * disaster.length)]}`);
    }

    if (command === "horde") {
        const horde = [
            'extra small',
            'small',
            'medium',
            'big',
            'extra big',
        ];
        message.channel.send(`${horde[~~(Math.random() * horde.length)]}`);
    };

    if (command === "intruder") {
        const intruder = [
            'small gang',
            'medium gang',
            'large gang',
        ];
        message.channel.send(`${intruder[~~(Math.random() * intruder.length)]}`);
    }
});

dead.login(secrets.token);