
var CookieStand = function(place, minCustHour, maxCustHour, avgCookiesCust, id) {
	this.place = place;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.id = id;
	this.cookiesByHourList = [];
	this.opHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

	this.randCustHour = function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	};

	this.totalCookiesHour = function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
	};

	this.totalCookiesDay = function() {
		this.dailyCookies = 0;
		for(var i = 0; i < this.opHours.length; i++) {
			this.cookiesByHourList.push(this.totalCookiesHour());
			this.dailyCookies = this.dailyCookies + this.cookiesByHourList[i];
		};

	  return this.dailyCookies;
	};

	this.makeUL = function(id) {
		console.log("Hello");
		for(var i = 0; i < this.opHours.length; i++) {
	        var locationList = document.getElementById(id);
	        var item = document.createElement('li');
	        item.appendChild(document.createTextNode (this.opHours[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
	        locationList.appendChild(item);
	        console.log("This is where we are appending the opHours array with randomly generated numbers");
		}
	};
		this.makeUL(this.id);
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2, 'pike');
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2, 'seatac');
var southCenter = new CookieStand('Southcenter Mall', 11, 38, 1.9, 'south');
var bellevueSquare = new CookieStand('Bellevue Square', 20, 48, 3.3, 'belle');
var alki = new CookieStand('Alki Beach', 3, 24, 3.6, 'alki');


// makeUL: function(array) {
// 	for(var i = 0; i < array.length; i++) {
//         var locationList = document.getElementById('seatac');
//         var item = document.createElement('li');
//         item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
//         locationList.appendChild(item);
//         console.log("This is where we are appending the opHours array with randomly generated numbers");
// 	}

// function makeUL(array) {
//     for(var i = 0; i < array.length; i++) {
//         var locationList = document.getElementById('pike');
//         var item = document.createElement('li');
//         item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
//         locationList.appendChild(item);
//         console.log("This is where we are appending the opHours array with randomly generated numbers");
//     }




	// totalCookiesDay: function() {
	//      var dailyCookies = 0;
	//      for(var i = 0; i < 8; i++) {
	//        this.cookiesByHourList.push(this.totalCookiesHour());
	//        dailyCookies = dailyCookies + this.totalCookiesHour();
	//        console.log (i+10);
	//        console.log (dailyCookies);

// var pikePlace = {
// 	location: 'Pike Place Market',
// 	minCustHour: 17,
// 	maxCustHour: 88,
// 	avgCookiesCust: 5.2,
// 	randCustHour: function(maxCustHour, minCustHour) {
// 		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
// 	},
// 	totalCookiesHour: function() {
// 		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
// 	},
// 	makeUL: function(array) {
// 	    for(var i = 0; i < array.length; i++) {
// 	        var locationList = document.getElementById('pike');
// 	        var item = document.createElement('li');
// 	        item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
// 	        locationList.appendChild(item);
// 	        console.log("This is where we are appending the opHours array with randomly generated numbers");
// 	    }
// 	}
// };

// var seaTac = {
// 	location: 'SeaTac Airport',
// 	minCustHour: 6,
// 	maxCustHour: 44,
// 	avgCookiesCust: 1.2,
// 	randCustHour: function(maxCustHour, minCustHour) {
// 		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
// 	},
// 	totalCookiesHour: function() {
// 		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
// 	},
// 	makeUL: function(array) {
//     	for(var i = 0; i < array.length; i++) {
// 	        var locationList = document.getElementById('seatac');
// 	        var item = document.createElement('li');
// 	        item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
// 	        locationList.appendChild(item);
// 	        console.log("This is where we are appending the opHours array with randomly generated numbers");
//     	}
// 	}
// };

// var southCenter = {
// 	location: 'South Center Mall',
// 	minCustHour: 11,
// 	maxCustHour: 38,
// 	avgCookiesCust: 1.9,
// 	randCustHour: function(maxCustHour, minCustHour) {
// 		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
// 	},
// 	totalCookiesHour: function() {
// 		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
// 	},
// 	makeUL: function(array) {
// 		for(var i = 0; i < array.length; i++) {
// 		    var locationList = document.getElementById('south');
// 		    var item = document.createElement('li');
// 		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
// 		    locationList.appendChild(item);
// 		    console.log("This is where we are appending the opHours array with randomly generated numbers");
// 		}
// 	}
// };

// var bellevueSquare = {
// 	location: 'Bellevue Square',
// 	minCustHour: 20,
// 	maxCustHour: 48,
// 	avgCookiesCust: 3.3,
// 	randCustHour: function(maxCustHour, minCustHour) {
// 		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
// 	},
// 	totalCookiesHour: function() {
// 		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
// 	},
// 	makeUL: function(array) {
// 		for(var i = 0; i < array.length; i++) {
// 		    var locationList = document.getElementById('belle');
// 		    var item = document.createElement('li');
// 		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
// 		    locationList.appendChild(item);
// 		    console.log("This is where we are appending the opHours array with randomly generated numbers");
// 		}
// 	}
// };

// var alki = {
// 	location: 'Alki',
// 	minCustHour: 3,
// 	maxCustHour: 24,
// 	avgCookiesCust: 2.6,
// 	randCustHour: function(maxCustHour, minCustHour) {
// 		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
// 	},
// 	totalCookiesHour: function() {
// 		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
// 	},
// 	makeUL: function(array) {
// 		for(var i = 0; i < array.length; i++) {
// 		    var locationList = document.getElementById('alki');
// 		    var item = document.createElement('li');
// 		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
// 		    locationList.appendChild(item);
// 		    console.log("This is where we are appending the opHours array with randomly generated numbers");
// 		}
// 	}
// };

// pikePlace.makeUL(opHours);
// seaTac.makeUL(opHours);
// southCenter.makeUL(opHours);
// bellevueSquare.makeUL(opHours);
// alki.makeUL(opHours);
