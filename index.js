const core = require('@actions/core');
const format = require('date-fns/format');
const ja = require('date-fns/locale/ja');
const tz = require('date-fns-timezone')

try {
    const nameToGreet = core.getInput('your-name');
    console.log(`こんにちは、${nameToGreet}さん`);

    const d = new Date();
    const zd = tz.convertToTimeZone(d, { timeZone: 'Asia/Tokyo' });
    const time = format(zd, 'yyyy/MM/dd HH:mm:ss.SSS', { locale: ja });
    console.log('０００００');
    core.setOutput('time', time);

    console.log('１１１１１');
    core.setSecret('MyPassword');
    console.log('このMyPasswordはテストです。');
    console.log('２２２２２');
} catch (error) {
    core.setFailed(error.message);
}
