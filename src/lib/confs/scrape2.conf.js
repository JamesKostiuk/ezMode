var config = {};

config.web = [
	{
		name: 'Apollo Cinema Events',
		url: 'http://www.apollocinema.ca/schedule',
		fields: {
			divID: 'eventDate',
			time: '',
			description: ''
		},
		type: 'events'
	}, {
		name: 'Apollo Cinema Showtimes',
		url: 'http://www.apollocinema.ca/', 
		/*movies arranged by 'npMovie'*/
		fields: {
			divID: 'npDate',
			time: '',
			description: ''
		},
		type: 'movies'
	}, {
		name: 'Frederick Cinema Showtimes',
		url: 'http://imaginecinemas.com/cinema/frederick-cinemas/',
		fields: {
			divID: 'movie-showtimes',
			time: '',
			description: ''
		},
		type: 'movies'
	}
]