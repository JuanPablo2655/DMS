const Discord = require("discord.js");
const dead = new Discord.Client();

const Enmap = require("enmap");
const data = new Enmap();
const fs = require('fs');

const config = require("./config.json");
const secrets = require("./secrets.json");


dead.commands = new Discord.Collection();
dead.aliases = new Discord.Collection();

dead.on('ready', () => {
	var channel = dead.channels.get('500438046630608920');
	console.log("ready bois!");
	dead.user.setActivity("the zombies", {
		type: 'WATCHING'
	});
	channel.send(`Now online and ready to serve`);
});

dead.on('guildMemberAdd', member => {
	const welcomeChannel = member.guild.channels.find('name', 'welcome');
	if (welcomeChannel) {
		let WelcomeEmbed = new Discord.RichEmbed()
			.setTitle("Member has joined!")
			.setThumbnail(member.user.displayAvatarURL)
			.setDescription(`Welcome ${member.user} to ${member.guild.name}, \nPlease follow the rules \n and I hope you enjoy your stay here!`)
			.setColor("#4286f4")
			.setFooter(`You are the ${member.guild.memberCount} member to joined.`)
			.setTimestamp();
		welcomeChannel.send(WelcomeEmbed);
	}
});

dead.on('message', (message) => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	let cmd;
	// if (dead.commands.has(command)) {
	// 	cmd = dead.commands.get(command);
	// } else if (dead.aliases.has(command)) {
	// 	cmd = dead.commands.get(dead.aliases.get(command));
	// }

	if (dead.aliases.has(command)) {
		cmd = dead.commands.get(dead.aliases.get(command));
	} else if (dead.commands.has(command)) {
		cmd = dead.commands.get(command);
	}
	cmd.run(dead, message, args);
});

fs.readdir('./commands/', (err, files) => {
	if (err)
		console.error(err);
	let jsfiles = files.filter(f => f.split('.')
		.pop() === 'js');
	if (jsfiles.length <= 0) {
		console.log('No commands to load!');
		return;
	}
	console.log(`[Commands]\tLoaded a total amount ${files.length} Commands`);
	jsfiles.forEach(f => {
		let props = require(`./commands/${f}`);
		props.fileName = f;
		dead.commands.set(props.help.name, props);
		props.conf.aliases.forEach(alias => {
			dead.aliases.set(alias, props.help.name);
		});
	});
});

dead.buildHelpMenu = function (commands) {
	let helpMenu = new Discord.RichEmbed()
		.setTitle('Help Menu')
		.setColor('RANDOM');
	for (let i = 0; i < commands.keyArray().length; i++) {
		let cmd = commands.keyArray()[i];
		let info = commands.get(cmd).help;
		helpMenu.addField(cmd, info["description"])
	}
	return helpMenu;
}

dead.advancedHelp = function (command) {
	if (!command) return "That command doesn't exist.";
	let helpMenu = new Discord.RichEmbed()
		.setTitle('Help Menu')
		.setColor('RANDOM')
		.addField('Description', command.help["description"])
		.addField("Usage", command.help["usage"])
		.addField("Aliases", command.conf["aliases"].join(", "));
	return helpMenu;
}

dead.login(secrets.token);