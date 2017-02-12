var config = {};

config.web = {};

config.web.apollo = {};
config.web.frederick = {};

config.web.apollo.events = {
	name: 'Apollo Cinema Events',
	url: 'http://www.apollocinema.ca/schedule',
	fields: ['eventDate']
};

config.web.apollo.movies = {
	name: 'Apollo Cinema Showtimes',
	url: 'http://www.apollocinema.ca/',
	fields: ['npDate'] /*movies arranged by 'npMovie'*/
}

config.web.frederick.movies = {
	name: 'Frederick Cinema Showtimes',
	url: 'http://imaginecinemas.com/cinema/frederick-cinemas/',
	fields: ['movie-showtimes']
}

module.exports = config;
