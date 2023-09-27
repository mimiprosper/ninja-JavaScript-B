const now = new Date();
console.log(now);

// years, months, days, times
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth (0-based):', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay (0-based):', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// timestamps
// console.log('getTimestamp:', now.getTime()); // milliseconds since 12am january 1970

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

