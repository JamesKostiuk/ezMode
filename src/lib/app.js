var client = require('./helpers/http_helper.js');
var cheerio = require('cheerio');
var scrape_conf = require('./confs/scrape.conf.js');
var fs = require('fs');


function createPage () {
	
	//set up initial page framework
	fs.writeFile('./firstPage.html', '<html>\n\t<head>\n\t</head>\n\t<body>\n\t', function (err) {
		if(err) {
			console.log('ERROR WRITING PAGE: ' + err);
		}
	});
	
	//TODO: promisify these calls
	retrieveShowtimes(scrape_conf.web.apollo.movies, function () {
		retrieveShowtimes(scrape_conf.web.frederick.movies, function(){
		
			fs.appendFile('./firstPage.html', '\t</body>\n</html>', function(err) {
				if(err) {
					console.log('ERROR FINISHING PAGE ' + err);
				} else {
					console.log('Writing Complete.');
				};
			});
		});
	});
};

function retrieveShowtimes (conf, done) {
	client.get(conf.url, function (response) {
		console.log(response);
		var $ = cheerio.load(response);
		
		//		fs.appendFile('./firstPage.html', '<h1>' + conf.name +'</h1>' + $('div[class=[' + conf.fields[0] + ']').html(), function(err) {
		fs.appendFile('./firstPage.html', '<h1>' + conf.name +'</h1>' + $('div[class=' + conf.fields[0] + ']').html(), function(err) {
			if(err) {
				console.log('ERROR WRITING HTML FOR ' + conf.name);
				return;
			} else {
				done();
			}
		});
	});
}

function makeSelectors(conf) {
	var selectors = [];
	for(var i = 0 ; i < conf.length ; i++) {
		selectors[i] = 'class=' + conf[i];
		console.log(selectors[i]);
	}
	return selectors;
}

createPage();

/*//get apollo movie times and write to the page
	client.get(scrape_conf.web.apollo.movies.url, function (response) {

		var $ = cheerio.load(response);
			//apollo_selectors = makeSelectors(scrape_conf.web.apollo.movies.fields);
	
		fs.appendFile('./firstPage.html', '<h1>Apollo Cinema</h1>' + $('div[class=npDate]').html(), function (err) {
			if(err){
				console.log('ERROR WRITING HTML BY ID');
				return;
			} else {



				fs.appendFile('./firstPage.html', '\t</body>\n</html>', function(err) {if(err) {console.log('ERROR FINISHING PAGE ' + err);} else {console.log('Writing Complete.')};});
			}
		});
		//console.log($('#nowPlaying').text());
		//console.log($('div[class=npDate]').html());
	
	});*/
