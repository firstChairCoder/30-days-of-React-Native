import moment from "moment";

const secsInHour = 3600;
const secsInDay = 86400;
const secsInMinute = 60

export default class Time {
	static getTimeFromSeconds(s) {
		const totalTime = Math.ceil(s);
		const seconds = Math.floor(totalTime % 60);
		const minutes = Math.floor((totalTime % secsInHour) / secsInMinute)
		const hours = Math.floor((totalTime % secsInDay) / secsInHour);
		const days = Math.floor(totalTime / secsInDay)

		return {
			seconds,
			minutes,
			hours,
			days
		}
	}

	static getSecondsFromPastTime(pastTime) {
		const now = moment(new Date(), "YYYY-MM-DD");
		const parsedPastTime = moment(pastTime, "YYYY-MM-DD");
		const intervalInMs = now.diff(parsedPastTime, "milliseconds");
		if (intervalInMs > 0) {
		  const value = Math.round(intervalInMs / 1000);
		  return value;
		}
		return 0;
	  }
}