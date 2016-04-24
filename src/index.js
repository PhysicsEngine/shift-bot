// module.exports = require('./dist/linebot.js');
import ApiRouter from './ApiRouter';
import LineBot from '../dist/linebot';
import winston from 'winston';

winston.level = 'debug';

const bot = new LineBot({
  channelID: process.env.LINEBOT_CHANNELID,
  channelSecret: process.env.LINEBOT_CHANNELSECRET,
  MID: process.env.LINEBOT_MID,
  apiRouter: ApiRouter
});

bot.on('message', (res) => {
  const content = res.content;
  winston.log('debug', 'message: ', content);
  if ( content.contentType === LineBot.CONST.CONTENT_TYPE.TEXT ) {
    winston.debug('CONTENT_TYPE.TEXT');
    bot.postText({
      user: content.from,
      message: content.text
    });
  } else {
    winston.debug('CONTENT_TYPE.OTHER');
    bot.postText({
      user: content.from,
      message: 'Not text.'
    });
  }
});

const port = process.env.PORT || 3000;
bot.listen(port);

console.log(`Starting api server on ${port}...`);
