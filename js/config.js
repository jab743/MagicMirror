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
			'You get an A+!',
			'You are somebodys reason to smile',
			'Smile and the world smiles with you',
			'Hope you always find a reason to smile',
			'Its a beautiful day - do not let it get away',
			'Be brave',
			'Be happy today',
			'I like your jacket',
			'You are like sunshine on a rainy day',
			'Your hair looks stunning',
			'God has great plans for you',
			'I am on top of the world',
			'Reach for your dreams',
			'Soar high today',
			'You are a bucket of awesome',
			'Do not worry, you will do great',
			'You are like a snowflake - you are unique',
			'Always do your best',
			'The secret of getting ahead is getting started'
			
			
			
			
			
			
			
			
        ],
        afternoon: [
            'Hello, beauty!',
            'That looks nice on you!',
            'Looking good today!',
			'With your creative wit, Im sure you could come up with better compliments than me',
			'In a world where you can be anything be yourself',
			'Be yourself - theres no one better',
			'What makes  you different is what makes you beautiful',
			'I like your shoes',
			'Dare whoever is reading this - smile ',
			'why fit in when you were born to stand out',
			'never let fear of what others think stop you from being yourself',
			'Good effort',
			'well done',
			'Way to go!',
			'People behind you at movies think you are the perfect height',
			'You are a fountain of inspiration',
			'Your handshake conveys intelligence, confidence, and minor calmness',
			'Hello good looking',
			'Take a break; you have earned it',
			'All of your ideas are brilliant',
			'You are a star of my daydreams',
			'I am having trouble coming up with a compliment worthy of you',
			'Your mind is a maze of amazement',
			'You are the wind beneath my wings',
			'Your shoes are untied but for you its cool',
			'Oh, I can keep going',
			'You know you can',
			'You are even better than sparkles and unicorns combined',
			'I am enchanted to meet you',
			'well played',
			'You intrigue me',
			'Your smile could illuminate the depths of the ocean'
	
			
			
			
			
			
        ],
        evening: [
            'Way to go!',
            'You look nice!',
            'Well Done!',
			'All of your ideas are brilliant!',
			'Never give up on your dreams',
			'Give thanks',
			'for every dark night there is a brighter day',
			'I love you',
			'Dream',
			'You are spontaneous and I love it',
			'You are a bucket of awesome',
			'You listen to the coolest music',
			'Your turn to cook',
			'Dessert time!',
			'I like your style!',
			'well done',
			'Way to go!',
			'People behind you at movies think you are the peprfect height',
			'You are a fountain of inspiration',
			'Your handshake conveys intelligence, confidence, and minor calmness',
			'Hello good looking',
			'Take a break; you have earned it'
			
			
		
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
