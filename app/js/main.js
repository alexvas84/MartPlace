$(function () {

	$(".rate-star").rateYo({
		rating: 4.6,
		starWidth: "15px",
		readOnly: true,
		// starSvg: '<svg enable-background="new 0 0 96 96" height="96px" id="star" version="1.1" viewBox="0 0 96 96" width="96px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M48,32.106l3.206,10.116L53.002,48h5.812h9.679l-7.592,5.081l-4.854,3.282l1.851,5.572l3.04,9.228l-8.21-6.029l-4.698-3.45  l-4.719,3.41l-8.232,5.954l3.018-9.109l1.869-5.642l-4.859-3.169L27.462,48h9.724h5.812l1.796-5.778L48,32.106 M48,6.718L37.186,40  H2.191l28.312,19.671L19.688,92.18L48,71.634l28.312,20.711L65.498,59.644L93.81,40H58.814L48,6.718L48,6.718z"/></svg>'
	});

	$('.featured__products').slick({
		prevArrow: '<button type = "button" class= "slick-prev"></button>',
		nextArrow: '<button type = "button" class= "slick-next"></button>'
	});

	$('.feed__products').slick({
		prevArrow: '<button type = "button" class= "slick-prev"></button>',
		nextArrow: '<button type = "button" class= "slick-next"></button>',
		slidesToShow: 3,
		slidesToScroll: 3
	});

	var mySwiper = new Swiper('.feedback__slider', {
		containerModifierClass: 'feedback__slider',
		slideClass: 'feedback__item',
		wrapperClass: 'feedback__wrapper',
		slidesPerView: 2,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.feedback-button-next',
			prevEl: '.feedback-button-prev',
		},
	});

	try {
		var mixer = mixitup('.newitem__inner-box');
	}
	catch {
		console.log('Ошибка КАРЛ!!!!! Все СЛОМАЛ');
	};

	// filter menu

	let filter_btn = document.querySelector('.filter-btn');
	let filter_menu = document.querySelector('.filter-box');
	try {
		filter_btn.addEventListener('mouseenter', function (event) {
			filter_menu.classList.toggle('_active');
		});
		filter_menu.addEventListener('click', function (event) {
			filter_menu.classList.toggle('_active');
		});
		filter_menu.addEventListener('mouseleave', function (event) {
			filter_menu.classList.toggle('_active');
		});
	} catch{ };

	// new-item sort

	let btn_grid = document.querySelector('.icon-grid');
	let btn_list = document.querySelector('.icon-List');
	let product = document.querySelectorAll('.product__cart');

	const rate_block = document.querySelectorAll('.product-page__rate');
	const info_block = document.querySelectorAll('.product__cart-info');
	const bottom_block = document.querySelectorAll('.product-page__bottom');
	const product_type = document.querySelectorAll('.cart-info__type');
	const product_sell = document.querySelectorAll('.product-sell');
	const theme_name = document.querySelectorAll('.cart-info__product-dev');
	try {
		btn_grid.addEventListener('click', function (event) {
			if (btn_list.classList.contains('active')) {

				btn_grid.classList.add('active');
				btn_list.classList.remove('active');
				for (let i = 0; i < product.length; i++) {
					product[i].classList.remove('list');
				};

				for (let i = 0; i < rate_block.length; i++) {
					rate_block[i].insertBefore(product_sell[i], rate_block[i].children['last']);
					info_block[i].insertBefore(theme_name[i], info_block[i].children[1]);
					bottom_block[i].insertBefore(product_type[i], bottom_block[i].children[1]);
				};
			};
		});

		btn_list.addEventListener('click', function (event) {
			if (btn_grid.classList.contains('active')) {
				console.log('DONE');
				btn_grid.classList.remove('active');
				btn_list.classList.add('active');
				for (let i = 0; i < product.length; i++) {
					product[i].classList.add('list');
				};
				for (let i = 0; i < rate_block.length; i++) {
					rate_block[i].insertBefore(theme_name[i], rate_block[i].children[0]);
					info_block[i].insertBefore(product_type[i], info_block[i].children[3]);
					bottom_block[i].insertBefore(product_sell[i], bottom_block[i].children[2]);
				};
			};
		});
	} catch{ };

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 999,
		from: 30,
		to: 300,
		prefix: "$"
	});

});