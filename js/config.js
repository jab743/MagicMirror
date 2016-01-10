var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Naperville, Illinois',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'f15e45e2fe6f3ae3588524b4b6d3d857'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning!',
            'Enjoy your day!',
            'You Rock!',
			'I like your style',
			'You get an A+!'
        ],
        afternoon: [
            'Hello, beauty!',
            'That looks nice on you!',
            'Looking good today!',
			'With your creative wit, Im sure you could come up with better compliments than me.'
        ],
        evening: [
            'Way to go!',
            'You look nice!',
            'Well Done!',
			'All of your ideas are brilliant!',
        ]
    },
    calendar: {
        maximumEntries: 10,
        //url: "https://calendar.google.com/calendar/ical/kiwi.jab%40gmail.com/private-6465c8772cdc741812235b60ebadfd85/basic.ics"
        //url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
	},
    news: {
        //feed: '<rss version="2.0"><channel><generator>NFE/1.0</generator><title>Top Stories - Google News</title><link>http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us</link><language>en-US</language><webMaster>news-feedback@google.com</webMaster><copyright>&amp;copy;2016 Google</copyright><pubDate>Sun, 10 Jan 2016 18:34:25 GMT</pubDate><lastBuildDate>Sun, 10 Jan 2016 18:34:25 GMT</lastBuildDate><image><title>Top Stories - Google News</title><url>https://ssl.gstatic.com/news-static/img/logo/en_us/news.gif</url><link>http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us</link></image><description>Google News</description></channel></rss>'
        //feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
		//feed: 'http://news.google.com/news?hl=en&amp;pz=1&amp;ned=us'
		feed: 'http://rss.cnn.com/rss/cnn_topstories.rss'
	}
}
