import {PrayerTimes} from '../src/PrayerTimes'
var packageJSON  = require<{version:String}>('json!../package.json');

describe('PrayerTimes', () => {
    it('should get the package json version', () => expect(PrayerTimes.version).toBe(packageJSON.version));
});