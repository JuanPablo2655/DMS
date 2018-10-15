const Discord = require("discord.js");
const dead = new Discord.Client();

const config = require("./config.json");
const secrets = require("./secrets.json");

dead.on('ready', () => {
    var channel = dead.channels.get('500438046630608920');
    console.log("ready bois!");
    dead.user.setActivity("the zombies", {type: 'WATCHING'});
    channel.send("bot online");
});

dead.on('guildMemberAdd', member => {
    let guild = member.guild;
    const welcome = new Discord.RichEmbed()
        .setTitle(`Welcome to ${guild}, ${member.displayName}!`)
        .setAuthor(`${member.displayName}`, `${member.displayAvatarURL}`)
    dead.channels.get("480894974464884736").sendEmbed(welcome)
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

    if (command === "reboot") {
        if(message.author.id !== config.devs) return;
        process.exit(1);
    };

    if (command === "ping") {
        message.channel.send(`${dead.ping}`);
    };

    if (command === "welcome") {
        if(message.author.id !== config.ownerID) return;
        const yeet = new Discord.RichEmbed()
            .setTitle("Welcome to Dead Man Standing verifcation system!");
            //.addField("Welcome to Dead Man Standing verifcation system", "test")
        message.channel.send({yeet});
    }

    if (command === "people") {
        let small = Math.floor(Math.random() *50 +10);
        let medium = Math.floor(Math.random() *100 +20);
        let large = Math.floor(Math.random() *250+50);
        if (!args[0]) {
            message.channel.send("please choose one of these choices `small` `medium` `large`");
        }
        if (args[0] === "small") {
            message.channel.send("Your small community has " + small + " people");
        }

        if (args[0] === "medium") {
            message.channel.send("Your medium community has " + medium + " people");
        }

        if (args[0] === "large") {
            message.channel.send("Your large community has " + large + " people");
        }
    }

    if (command === "food") {
        let small = Math.floor(Math.random() *100 +50);
        let medium = Math.floor(Math.random() *250 +100);
        let large = Math.floor(Math.random() *500 +200);
        if (!args[0]) {
            message.channel.send("please choose one of these choices `small` `medium` `large`");
        }
        if (args[0] === "small") {
            message.channel.send("Your small community has " + small + " food items");
        }

        if (args[0] === "medium") {
            message.channel.send("Your medium community has " + medium + " food items");
        }

        if (args[0] === "large") {
            message.channel.send("Your large community has " + large + " food items");
        }
    }

    if (command === "supplies") {
        let small = Math.floor(Math.random() *150 +50);
        let medium = Math.floor(Math.random() *300 +100);
        let large = Math.floor(Math.random() *650 +200);
        if (!args[0]) {
            message.channel.send("please choose one of these choices `small` `medium` `large`");
        }
        if (args[0] === "small") {
            message.channel.send("Your small community has " + small + " supplies");
        }

        if (args[0] === "medium") {
            message.channel.send("Your medium community has " + medium + " supplies");
        }

        if (args[0] === "large") {
            message.channel.send("Your large community has " + large + " supplies");
        }
    }

    if (command === "test") {
        message.channel.send("John big gay if he reads this.");
    }
});

dead.login(secrets.token);