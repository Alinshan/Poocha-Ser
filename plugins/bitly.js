/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'bitly ?(.*)', fromMe: false, desc: Lang.BIT_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_LINK);
	const url = `https://tobz-api.herokuapp.com/api/bitly?url=${match[1]}&apikey=BotWeA`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'\n *🔗 ' + Lang.SLINK +'* ```' + json.result + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDLI, MessageType.text);
	}
});
