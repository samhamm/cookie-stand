

var opHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	randCustHour: function(maxCustHour, minCustHour) {
		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
	},
	totalCookiesHour: function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust);
	},
	makeUL: function(array) {
	    for(var i = 0; i < array.length; i++) {
	        var locationList = document.getElementById('pike');
	        var item = document.createElement('li');
	        item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
	        locationList.appendChild(item);
	    }
	}
};

var seaTac = {
	location: 'SeaTac Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,
	randCustHour: function(maxCustHour, minCustHour) {
		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
	},
	totalCookiesHour: function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
	},
	makeUL: function(array) {
    	for(var i = 0; i < array.length; i++) {
	        var locationList = document.getElementById('seatac');
	        var item = document.createElement('li');
	        item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
	        locationList.appendChild(item);
    	}
	}
};

var southCenter = {
	location: 'South Center Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,
	randCustHour: function(maxCustHour, minCustHour) {
		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
	},
	totalCookiesHour: function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
	},
	makeUL: function(array) {
		for(var i = 0; i < array.length; i++) {
		    var locationList = document.getElementById('south');
		    var item = document.createElement('li');
		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
		    locationList.appendChild(item);
		}
	}
};

var bellevueSquare = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,
	randCustHour: function(maxCustHour, minCustHour) {
		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
	},
	totalCookiesHour: function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
	},
	makeUL: function(array) {
		for(var i = 0; i < array.length; i++) {
		    var locationList = document.getElementById('belle');
		    var item = document.createElement('li');
		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
		    locationList.appendChild(item);
		}
	}
};

var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,
	randCustHour: function(maxCustHour, minCustHour) {
		return Math.floor(Math.random() * (maxCustHour - minCustHour + 1)) + minCustHour;
	},
	totalCookiesHour: function() {
		return Math.floor(this.randCustHour(this.maxCustHour, this.minCustHour) * this.avgCookiesCust)
	},
	makeUL: function(array) {
		for(var i = 0; i < array.length; i++) {
		    var locationList = document.getElementById('alki');
		    var item = document.createElement('li');
		    item.appendChild(document.createTextNode (array[i] + ': ' + this.totalCookiesHour() + ' Cookies'));
		    locationList.appendChild(item);
		}
	}
};

pikePlace.makeUL(opHours);
seaTac.makeUL(opHours);
southCenter.makeUL(opHours);
bellevueSquare.makeUL(opHours);
alki.makeUL(opHours);
