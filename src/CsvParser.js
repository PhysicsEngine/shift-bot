class CsvParser {
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
        var result = [];
        const lines = text.split("\n");
        for (var i = 0, len = lines.length; i < len; ++i) {
            const [date, hour_interval, availability] = lines[i].split(",");
            const [start_hour, end_hour] = hour_interval.split("-");
            result.push({
               start_date: new Date(date + " " + start_hour),
               end_date:   new Date(date + " " + end_hour),
               availability: parseFloat(availability)
            });
        }
        return result;
    }
}

module.exports = CsvParser;