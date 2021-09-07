"use strict";

module.exports = (timestamp) => {
	const dt = new Date(timestamp)
	if(!dt instanceof Date || !isFinite(dt)) return "Invalid Input";
	const now = new Date()
	if(dt > now) return "just now";
	const diff_ms = now - dt
	const diff_secs = Math.floor(diff_ms / 1000)
	if(diff_secs === 1) return "a second ago";
	if(diff_secs < 60) return "few seconds ago";
	const diff_mins = Math.floor(diff_secs / 60);
	if(diff_mins === 1) return "a minute ago";
	if(diff_mins < 60) return diff_mins + " minutes ago";
	const diff_hours = Math.floor(diff_mins / 60);
	if(diff_hours === 1) return "an hour ago";
	if(diff_hours < 24) return diff_hours + " hours ago";
	const diff_days = Math.floor(diff_hours / 24);
	if(diff_days === 1) return "a day ago";
	if(diff_days < 30) return diff_days + " days ago";
	const diff_months = Math.floor(diff_days / 30);
	if(diff_months === 1) return "a month ago";
	if(diff_months < 12) return diff_months + " months ago";
	const diff_years = Math.floor(diff_months / 12);
	if(diff_years === 1) return "a year ago";
	if(diff_years <= 5) return diff_years + " years ago";
	return "more than 5 years ago";
}

if(require.main === module) {
	const result = module.exports('2021-07-13 16:20:20');
	console.log(result);
}
