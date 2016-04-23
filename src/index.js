// module.exports = require('./dist/linebot.js');
import ApiRouter from './ApiRouter';
import LineBot from '../dist/linebot';

console.log(ApiRouter);
const bot = new LineBot({
  channelID: process.env.LINEBOT_CHANNELID,
  channelSecret: process.env.LINEBOT_CHNNELSECRET,
  MID: process.env.LINEBOT_MID,
  apiRouter: ApiRouter
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

const port = process.env.PORT || 3000;
bot.listen(port);

console.log(`Starting api server on ${port}...`);
