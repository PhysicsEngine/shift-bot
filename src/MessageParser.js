import winston from 'winston';

class MessageParser {
    /**
     * Parse text formatted like below.
     * 
     * yyyy/MM/dd,HHmm-HHmm,FLOAT
     * ex) 2016/05/03,14:00-22:00,1.0
     *
     * @param { String } text
     * @return { {start_date:Date, end_date:Date, availability:Double}[] }
     */
    static parse(text) {
        winston.log('debug', 'parse start');
        
        var result = [];
        const lines = text.split("\n");
        console.log(lines);
        for (var i = 0, len = lines.length; i < len; ++i) {
            console.log(i + ": " + lines[i]);
            const [date, hour_interval, availability] = lines[i].split(",");
            if (date == undefined || hour_interval == undefined || availability == undefined) {
                winston.log('warn', 'invalid message format found: '+ lines[i]);
                break;
            }
            const [start_hour, end_hour] = hour_interval.split("-");
            result.push({
               start_date: new Date(date + " " + start_hour),
               end_date:   new Date(date + " " + end_hour),
               availability: parseFloat(availability)
            });
        }

        winston.log('debug', 'parse end');

        return result;
    }
}

export default MessageParser;