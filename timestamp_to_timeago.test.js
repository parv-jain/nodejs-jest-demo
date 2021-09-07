const timestamp_to_timeago = require('./timestamp_to_timeago');
const moment = require('moment');

test('TC 1:', () => {
	expect(timestamp_to_timeago(moment().add(5, 'seconds'))).toBe('just now');
});

test('TC 2:', () => {
        expect(timestamp_to_timeago(moment().subtract(1, 'seconds'))).toBe('a second ago');
});

test('TC 3:', () => {
	expect(timestamp_to_timeago(moment().subtract(5, 'seconds'))).toBe('few seconds ago');
});

test('TC 4:', () => {
	expect(timestamp_to_timeago(moment().subtract(1, 'minutes'))).toBe('a minute ago');
});

test('TC 5:', () => {
	expect(timestamp_to_timeago(moment().subtract(5, 'minutes'))).toBe('5 minutes ago');
});

test('TC 6:', () => {
        expect(timestamp_to_timeago(moment().subtract(1, 'hour'))).toBe('an hour ago');
});

test('TC 7:', () => {
        expect(timestamp_to_timeago(moment().subtract(5, 'hour'))).toBe('5 hours ago');
});

test('TC 8:', () => {
        expect(timestamp_to_timeago(moment().subtract(1, 'day'))).toBe('a day ago');
});

test('TC 9:', () => {
        expect(timestamp_to_timeago(moment().subtract(5, 'day'))).toBe('5 days ago');
});

test('TC 10:', () => {
        expect(timestamp_to_timeago(moment().subtract(1, 'year'))).toBe('a year ago');
});

test('TC 11:', () => {
        expect(timestamp_to_timeago(moment().subtract(4, 'year'))).toBe('4 years ago');
});

test('TC 12:', () => {
        expect(timestamp_to_timeago(moment().subtract(5, 'year'))).toBe('5 years ago');
});

test('TC 13:', () => {
        expect(timestamp_to_timeago(moment().subtract(24, 'hour'))).toBe('a day ago');
});

test('TC 14:', () => {
        expect(timestamp_to_timeago(moment().subtract(30, 'day'))).toBe('a month ago');
});

test('TC 15:', () => {
        expect(timestamp_to_timeago(moment().subtract(6, 'year'))).toBe('more than 5 years ago');
});

test('TC 16:', () => {
        expect(timestamp_to_timeago()).toBe('Invalid Input');
});

test('TC 17:', () => {
        expect(timestamp_to_timeago('dummy string')).toBe('Invalid Input');
});


