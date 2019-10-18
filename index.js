const core = require('@actions/core');

try {
    const nameToGreet = core.getInput('your-name');
    console.log(`こんにちは、${nameToGreet}さん`);

    const time = (new Date()).toTimeString();
    core.setOutput('time', time);
} catch (error) {
    core.setFailed(error.message);
}
