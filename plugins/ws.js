/*Copyright (C) 2021 ALINSHAN

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

POOCHA SER- CYBER-DASHAMOOLAN
    
*/

const Ktb = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('whatsappstatus');

// WHATSAPP STATUS 

// THIS PLUGIN IS OWNED BY KARTHIK_TERROR-BOY


if (Config.WORKTYPE == 'private') {

    Ktb.addCommand({pattern: 'ws', fromMe: true, desc: Lang.WS}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        
        
        

        var i = Math.floor(9*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
// EXPORTING
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*POOCHA SER*'})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Ktb.addCommand({pattern: 'ws', fromMe: false, desc: Lang.WS}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://i.imgur.com/WXEksN4.mp4";
        r_text[1] = "https://imgur.com/3VOuEfg.mp4";
        r_text[2] = "https://imgur.com/rbGjIBI.mp4";
        r_text[3] = "https://imgur.com/tt2gMXr.mp4";
        r_text[4] = "https://imgur.com/kR4XGKY.mp4";
        r_text[5] = "https://imgur.com/3PHv4Uu.mp4";
        r_text[6] = "https://imgur.com/4O5pLdC.mp4";
        r_text[7] = "https://imgur.com/Q6REjY0.mp4";
        r_text[8] = "https://imgur.com/5m5TDEJ.mp4";
        
        
        

        var i = Math.floor(9*Math.random())

        var respovideo = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
// EXPORTING 
        await message.client.sendMessage(message.jid, Buffer(respovideo.data), MessageType.video, {mimetype: Mimetype.mp4, caption: '*POOCHA SER*'})

    }));
}
