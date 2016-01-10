var config = {
    lang: 'english',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Naperville, US',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'english',
            APPID: 'f15e45e2fe6f3ae3588524b4b6d3d857'
        }
    },
/*    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
*/    },
    calendar: {
        maximumEntries: 10,
        url: "https://calendar.google.com/calendar/ical/kiwi.jab%40gmail.com/private-6465c8772cdc741812235b60ebadfd85/basic.ics"
    },
    news: {
        feed: '<rss version="2.0"><channel><generator>NFE/1.0</generator><title>Top Stories - Google News</title><link>http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us</link><language>en-US</language><webMaster>news-feedback@google.com</webMaster><copyright>&amp;copy;2016 Google</copyright><pubDate>Sun, 10 Jan 2016 18:34:25 GMT</pubDate><lastBuildDate>Sun, 10 Jan 2016 18:34:25 GMT</lastBuildDate><image><title>Top Stories - Google News</title><url>https://ssl.gstatic.com/news-static/img/logo/en_us/news.gif</url><link>http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us</link></image><description>Google News</description></channel></rss>'
    }
}