export const getPostTimeAgo = (postTimestamp: number) => {
    const currentDate = new Date(); // Current date and time
    const millisecondsPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    const millisecondsPerHour = 1000 * 60 * 60; // Number of milliseconds in an hour
    const millisecondsPerMinute = 1000 * 60; // Number of milliseconds in a minute
    const millisecondsSincePost = currentDate.getTime() - (postTimestamp * 1000);

    if (millisecondsSincePost < millisecondsPerMinute) {
        return "Posted just now";
    } else if (millisecondsSincePost < millisecondsPerHour) {
        const minutesSincePost = Math.floor(millisecondsSincePost / millisecondsPerMinute);
        return `Posted ${minutesSincePost} minutes ago`;
    } else if (millisecondsSincePost < millisecondsPerDay) {
        const hoursSincePost = Math.floor(millisecondsSincePost / millisecondsPerHour);
        return `Posted ${hoursSincePost} hours ago`;
    } else {
        const daysSincePost = Math.floor(millisecondsSincePost / millisecondsPerDay);
        return `Posted ${daysSincePost} days ago`;
    }
}