// module.exports = require('./dist/linebot.js');
import LineBot from '../dist/linebot';

const bot = new LineBot({
  channelID: process.env.LINEBOT_CHANNELID,
  channelSecret: process.env.LINEBOT_CHNNELSECRET,
  MID: process.env.LINEBOT_MID
});

bot.on('message', (res) => {
  const content = res.content;
  if ( content.contentType === LineBot.CONST.CONTENT_TYPE.TEXT ) {
    bot.postMessage({
      user: content.from,
      message: content.text
    });
  } else {
    bot.postMessage({
      user: content.from,
      message: 'Not text.'
    });
  }
});

bot.listen(3000);
