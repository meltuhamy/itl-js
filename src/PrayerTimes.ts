var packageJSON  = require<{version:String}>('json!../package.json');

export class PrayerTimes {
    static version = packageJSON.version;
}
