const travelArr:Array<any>=[];

class Travel{
	created: string;
	country: string;
	city: string;
	place: string;
	type: string;
	address: string;
	img: string;
	
	

	constructor(created, country, city, place, type, address, img){
		this.created = created;
		this.country = country;
		this.city = city;
		this.place = place;
		this.type = type;
		this.address = address;
		this.img = img;
		travelArr.push(this);

	}


	render(){
		return `
		<div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded" id="Places">
		<img src="${this.img}" class= "card-img-top card-img-fluid my-2 d-none d-md-block">
		<div class="card-body">
		<p> ${this.created}</p>
		<h6 class="card-title mb-2">${this.country}</h6>
		<p class="address">${this.place}</p>
		<p class="address">${this.address}, ${this.city}</p>
		<p>${this.type}</p>
		</div>
		</div>`	
	}

}		


class Restaurants extends Travel {
	food: string = "";
	website: string;
	phone: string;

	constructor(created: string, country: string, city: string, place: string, type: string, address: string, img: string, food: string, website: string, phone: string){
		super(created, country, city, place, type, address, img);
		this.food = food;
		this.website = website;
		this.phone = phone;
	}

	render(){
		return `
		<div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded"  id="Places">
		<img src="${this.img}" class= "card-img-top card-img-fluid my-2 d-none d-md-block">
		<div class="card-body">
		<p> ${this.created}</p>
		<h6 class="card-title mb-2">${this.country}</h6>
		<p class="address">${this.place}</p>
		<p class="address">${this.address}, ${this.city}</p>
		<p>${this.type}</p>
		<a href="${this.website}">Click for website</a>
		<p>${this.phone}</p>
		</div>`	
	}
}

class Entertaining extends Travel {
	activity: string;
	website: string;
	price: string;
	date: string;

	constructor(created: string, country: string, city: string, place: string, type: string, address: string, img: string, activity:string, website: string, price: string, date: string){
		super(created, country, city, place, type, address, img);
		this.activity = activity;
		this.website = website;
		this.price = price;
		this.date = date;
	}

	render(){
		return `
		<div class="card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded"  id="Places">
		<img src="${this.img}" class= "card-img-top card-img-fluid my-2 d-none d-md-block">
		<div class="card-body">
		<p> ${this.created}</p>
		<h6 class="card-title mb-2">${this.country}</h6>
		<p class="address">${this.place}</p>
		<p class="address">${this.address}, ${this.city}</p>
		<p>${this.type}</p>
		<a href="${this.website}">Click for website</a>
		<p>${this.price}</p>
		<p>${this.date}</p>
		</div>
		</div>`	
	}
}


var tokyo = new Travel("Created: 6.6.20 10:45", "Japan", "Kyoto", "Fushimi Inari-taisha Shrine", "Sightseeing", "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, 612-0882, Japan", "./img/torii.jpg");
var sushi = new Restaurants("Created: 6.6.20 10:45","Japan", "Kyoto", "Sushi Iwa", "Sushi Restaurant", "〒600-8155 Kyoto, Shimogyo Ward, 角", "./img/sushi1.jpg", "Sushi", "http://www.sushiiwa.jp/en/", "+81 75-371-9303");
var entertaining = new Entertaining("Created: 6.6.20 10:45","Japan", "Kyoto", "Maiko Theater", "Theater", "302-2 Daikokucho, Higashiyama Ward, Kyoto, 605-0832, Japan", "./img/geisha.jpg", "Entertainment", "https://mykyotomachiya.com/japanese-language/", "€150", "Saturday 17th July 2021");
var thailand = new Travel("Created: 7.21.20 12:30","Thailand", "Chiang Mai", "Wat Phra Singh", "Sightseeing", "2 Samlarn Rd, Phra Sing, Mueang Chiang Mai District, Chiang Mai 50280, Thailand", "./img/chiang-mai.jpg");
var padThai = new Restaurants("Created: 7.21.20 12:30","Thailand", "Chiang Mai", "Cooking Love", "Thai Food", "18/7 Rachadamnoen Road, Soi 1, Chiang Mai 50200 Thailand", "./img/pad-thai.jpg", "Pad Thai", "https://www.facebook.com/GoodFood4You/", "+66 52 002 748");
var show = new Entertaining("Created: 7.21.20 12:30","Thailand", "Chian Mai", "Chaing Mai Cultural Performance", "Performance Art", "333 somewhere st, Chiang Mai 00000 Thailand", "./img/actor.jpg", "Entertainment", "https://www.lonelyplanet.com/thailand/activities/chiang-mai-traditional-khan-toke-meal-cultural-performance/a/pa-act/v-9592P129/357592", "€100", "Saturday 14 August 2021");

$(document).ready(function(){
	for(let i in travelArr){
		document.getElementById("Places").innerHTML+=travelArr[i].render();

	}

})

































