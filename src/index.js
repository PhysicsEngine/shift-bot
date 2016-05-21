import winston from 'winston';
import LineBot from '../dist/linebot';
import ApiRouter from './ApiRouter';
import PgClient from './PgClient';
import MessageParser from './MessageParser';

winston.level = 'debug';

const bot = new LineBot({
  channelID: process.env.LINEBOT_CHANNELID,
  channelSecret: process.env.LINEBOT_CHANNELSECRET,
  MID: process.env.LINEBOT_MID,
  apiRouter: ApiRouter
});

const pgClient = new PgClient({
  databaseUrl: process.env.DATABASE_URL
});

bot.on('message', (res) => {
  const content = res.content;
  winston.log('debug', 'message: ', content);
  
  // TODO(gologo13): check if a line user belongs to a team.
  
  if ( content.contentType === LineBot.CONST.CONTENT_TYPE.TEXT ) {
    winston.debug('CONTENT_TYPE.TEXT');
    
    const results = MessageParser.parse(content.text);
    if (results.length == 0) {
      bot.postText({
        user: content.from,
        message: "Reject. Please send your shift in csv format."
      });
      return;
    }
    
    // TODO(gologo13): cbハンドリングが面倒くさいので、とりあえず1つのシフトだけ登録.
    pgClient.storeRequest({
      member: "gologo13", // TODO(gologo13): FIXME
      team: 1,            // TODO(gologo13): FIXME
      start_time: results[0].start_date,
      end_time: results[0].end_date,
      availability: results[0].availability,
      callback: function(err, results) {
        if (err) {
          bot.postText({
            user: content.from,
            mesage: "Sorry, failed to register your shift"
          })
          return;
        }
        
        bot.postText({
          user: content.from,
          message: "OK. Nice shift"
        });
      }
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
