var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var travelArr = [];
var Travel = /** @class */ (function () {
    function Travel(country, city, place, type, address, img) {
        this.country = country;
        this.city = city;
        this.place = place;
        this.type = type;
        this.address = address;
        this.img = img;
        travelArr.push(this);
    }
    Travel.prototype.render = function () {
        return "\n\t\t<div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded\" id=\"Places\">\n\t\t<img src=\"" + this.img + "\" class= \"card-img-top card-img-fluid my-2 d-none d-md-block\">\n\t\t<div class=\"card-body\">\n\t\t<h6 class=\"card-title mb-2\">" + this.country + "</h6>\n\t\t<p class=\"address\">" + this.place + "</p>\n\t\t<p class=\"address\">" + this.address + ", " + this.city + "</p>\n\t\t<p>" + this.type + "</p>\n\t\t</div>\n\t\t</div>";
    };
    return Travel;
}());
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(country, city, place, type, address, img, food, website, phone) {
        var _this = _super.call(this, country, city, place, type, address, img) || this;
        _this.food = "";
        _this.food = food;
        _this.website = website;
        _this.phone = phone;
        return _this;
    }
    Restaurants.prototype.render = function () {
        return "\n\t\t<div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded\"  id=\"Places\">\n\t\t<img src=\"" + this.img + "\" class= \"card-img-top card-img-fluid my-2 d-none d-md-block\">\n\t\t<div class=\"card-body\"\n\t\t<h6 class=\"card-title mb-2\">" + this.country + "</h6>\n\t\t<p class=\"address\">" + this.place + "</p>\n\t\t<p class=\"address\">" + this.address + ", " + this.city + "</p>\n\t\t<p>" + this.type + "</p>\n\t\t<a href=\"" + this.website + "\">Click for website</a>\n\t\t<p>" + this.phone + "</p>\n\t\t</div>";
    };
    return Restaurants;
}(Travel));
var Entertaining = /** @class */ (function (_super) {
    __extends(Entertaining, _super);
    function Entertaining(country, city, place, type, address, img, activity, website, price, date) {
        var _this = _super.call(this, country, city, place, type, address, img) || this;
        _this.activity = "";
        _this.activity = activity;
        _this.website = website;
        _this.price = price;
        _this.date = date;
        return _this;
    }
    Entertaining.prototype.render = function () {
        return "\n\t\t<div class=\"card-deck-row text-center col-sm-11 col-md-5 bg-dark col-lg-2 m-4 p-1 text-white justify-content-between w-100 rounded\"  id=\"Places\">\n\t\t<img src=\"" + this.img + "\" class= \"card-img-top card-img-fluid my-2 d-none d-md-block\">\n\t\t<div class=\"card-body\">\n\t\t<h6 class=\"card-title mb-2\">" + this.country + "</h6>\n\t\t<p class=\"address\">" + this.place + "</p>\n\t\t<p class=\"address\">" + this.address + ", " + this.city + "</p>\n\t\t<p>" + this.type + "</p>\n\t\t<a href=\"" + this.website + "\">Click for website</a>\n\t\t<p>" + this.price + "</p>\n\t\t<p>" + this.date + "</p>\n\t\t</div>\n\t\t</div>";
    };
    return Entertaining;
}(Travel));
var tokyo = new Travel("Japan", "Kyoto", "Fushimi Inari-taisha Shrine", "Sightseeing", "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, 612-0882, Japan", "./img/torii.jpg");
var sushi = new Restaurants("Japan", "Kyoto", "Sushi Iwa", "Sushi Restaurant", "〒600-8155 Kyoto, Shimogyo Ward, 角", "./img/sushi1.jpg", "Sushi", "http://www.sushiiwa.jp/en/", "+81 75-371-9303");
var entertaining = new Entertaining("Japan", "Kyoto", "Maiko Theater", "Theater", "302-2 Daikokucho, Higashiyama Ward, Kyoto, 605-0832, Japan", "./img/geisha.jpg", "Entertainment", "https://mykyotomachiya.com/japanese-language/", "€150", "Saturday 17th July 2021");
var thailand = new Travel("Thailand", "Chiang Mai", "Wat Phra Singh", "Sightseeing", "2 Samlarn Rd, Phra Sing, Mueang Chiang Mai District, Chiang Mai 50280, Thailand", "./img/chiang-mai.jpg");
var padThai = new Restaurants("Thailand", "Chiang Mai", "Cooking Love", "Thai Food", "18/7 Rachadamnoen Road, Soi 1, Chiang Mai 50200 Thailand", "./img/pad-thai.jpg", "Pad Thai", "https://www.facebook.com/GoodFood4You/", "+66 52 002 748");
var show = new Entertaining("Thailand", "Chian Mai", "Chaing Mai Cultural Performance", "Performance Art", "333 somewhere st, Chiang Mai 00000 Thailand", "./img/actor.jpg", "Entertainment", "https://www.lonelyplanet.com/thailand/activities/chiang-mai-traditional-khan-toke-meal-cultural-performance/a/pa-act/v-9592P129/357592", "€100", "Saturday 14 August 2021");
$(document).ready(function () {
    for (var i in travelArr) {
        document.getElementById("Places").innerHTML += travelArr[i].render();
    }
});
