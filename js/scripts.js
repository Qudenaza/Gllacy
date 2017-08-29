var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var shadow = document.querySelector(".modal-overlay")


link.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	shadow.classList.add("modal-overlay-show");
});

close.addEventListener("click", function (event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	shadow.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
		 popup.classList.remove("modal-content-show");
		 shadow.classList.remove("modal-overlay-show");
			}
		}
});

function loadPage() {
	document.body.style.background = "url('img/slider-image-1.png') no-repeat top center";
}

function slide1() {
	document.body.style.background = "url('img/slider-image-1.png') no-repeat top center";
}

function slide2() {
	document.body.style.background = "#8996a6 url('img/slider-image-2.png') no-repeat top center";
}

function slide3() {
	document.body.style.background = "#9d8b84 url('img/slider-image-3.png') no-repeat top center";
}

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 59.9392265,
			lng: 30.32917000
		},
		zoom: 16
	});
	var marker = new google.maps.Marker({
		position: {
			lat: 59.9385365,
			lng: 30.32291472
		},
		map: map,
		title: 'Наш маркер: Большой театр',
		icon: 'img/pin.svg'
	});
}
