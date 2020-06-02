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
		slidesToScroll: 1
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
	catch { };

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

	// PRODUCT CART GRID/LIST view


	let btn_grid = document.querySelector('.icon-grid');
	let btn_list = document.querySelector('.icon-List');
	let product = document.querySelectorAll('.product__cart');

	const if_fafourite = document.querySelector('.favourites');
	const rate_block = document.querySelectorAll('.product-page__rate');
	const info_block = document.querySelectorAll('.product__cart-info');
	const theme_block = document.querySelectorAll('.cart-info__product');
	const bottom_block = document.querySelectorAll('.cart-info__price');
	const product_type = document.querySelectorAll('.cart-info__product-type');
	const product_sell = document.querySelectorAll('.product-sell');
	const theme_name = document.querySelectorAll('.cart-info__product-dev');
	const raiting = document.querySelectorAll('.cart__info-rating');
	const likes = document.querySelectorAll('.cart-info__price-likes');

	try {
		btn_grid.addEventListener('click', (e) => {
			if (btn_list.classList.contains('active')) {
				btn_grid.classList.add('active');
				btn_list.classList.remove('active');
				for (let i = 0; i < product.length; i++) {
					product[i].classList.remove('list');
				};

				for (let i = 0; i < rate_block.length; i++) {
					rate_block[i].insertBefore(product_sell[i], rate_block[i].children['last']);

					if (if_fafourite != null) {
						theme_block[i].insertBefore(theme_name[i], info_block[i].children['first']);
						theme_block[i].insertBefore(product_type[i], info_block[i].children['last']);
						bottom_block[i].insertBefore(raiting[i], bottom_block[i].children[1]);
						bottom_block[i].insertBefore(product_sell[i], bottom_block[i].children['last']);
					} else {
						bottom_block[i].insertBefore(product_type[i], info_block[i].children['last']);
						theme_block[i].insertBefore(theme_name[i], info_block[i].children['last']);
						rate_block[i].insertBefore(raiting[i], rate_block[i].children['first']);
						rate_block[i].insertBefore(product_sell[i], rate_block[i].children['last']);
					};

					// theme_block[i].insertBefore(product_type[i], info_block[i].children['last']);

					bottom_block[i].insertBefore(likes[i], bottom_block[i].children[1]);

				};
			};
		});

		btn_list.addEventListener('click', function (event) {
			if (btn_grid.classList.contains('active')) {
				btn_grid.classList.remove('active');
				btn_list.classList.add('active');

				for (let i = 0; i < product.length; i++) {
					product[i].classList.add('list');
				};
				for (let i = 0; i < rate_block.length; i++) {
					rate_block[i].insertBefore(theme_name[i], rate_block[i].children[0]);
					rate_block[i].insertBefore(raiting[i], rate_block[i].children['last']);
					rate_block[i].insertBefore(likes[i], rate_block[i].children[2]);
					info_block[i].insertBefore(product_type[i], info_block[i].children['last']);
					bottom_block[i].insertBefore(product_sell[i], bottom_block[i].children['last']);
				};
			};
		});
	} catch{ };



	//проверяем является ли устройство мобилкой


	let isMobile = {
		Android: function () { return navigator.userAgent.match(/Android/i); },
		BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
		iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
		Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
		Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
		any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
	};

	//isMobile.any() - if mobile


	let burger_btn = document.querySelector('.header__burger');
	let main_menu = document.querySelector('.menu');
	// let header_menu = document.querySelector('.header__menu');
	let body = document.querySelector('body');
	let overlay = document.querySelector('.burger__menu-overlay');

	try {
		main_menu.addEventListener('click', (e) => {
			if ((e.target.tagName == 'A' || e.target.closest('.header__burger')) && body.classList.contains('touch')) {
				toggleMenu();
			};
		}, false);

		overlay.addEventListener('click', (e) => {
			toggleMenu();
		}, false);

		function toggleMenu() {
			burger_btn.classList.toggle('active');
			main_menu.classList.toggle('active');
			overlay.classList.toggle('active');

			if (burger_btn.classList.contains('active')) {
				body.classList.add('lock');
			} else {
				body.classList.remove('lock');
			};
		};
	} catch{ };

	// клик на стрелочку в бургер-меню

	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		// let thisLink = arrow[i].previousElementSibling;
		let submenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];
		// thisLink.classList.add('parent');
		arrow[i].addEventListener('click', (e) => {
			submenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	};

	//режим 930px PC/Mobile

	function menu_in_burger(mql) {
		let body = document.querySelector('body');
		let menu = document.querySelector('.menu');

		if (mql.matches) {
			body.classList.add('touch');
			body.classList.remove('mouse');
			if (!isMobile.any()) {
				menu.classList.add('hover');
			} else {
				menu.classList.remove('hover');
			};
		} else {
			body.classList.add('mouse');
			body.classList.remove('touch');
		};
	};

	let mql = window.matchMedia("(max-width:930px)");
	mql.addListener(menu_in_burger); // Добавим прослушку на смену результата
	menu_in_burger(mql); // Вызовем нашу функцию


	try {
		let user_menu = document.querySelector('.header__btn-menu');
		let user_box = document.querySelector('.header__box');

		user_menu.addEventListener('click', (e) => {
			user_box.classList.toggle('active');
		});


	} catch { };



	/* 	let user_box = document.querySelector('.header__client');
			user_box.addEventListener('mouseenter', (e) => {
				let user_menu = document.querySelector('.header__client-submenu');
				user_menu.classList.add('active');
		
				document.documentElement.addEventListener('mouseover', (e) => {
					if (!e.target.closest('.header__client')) {
						let user_menu = document.querySelector('.header__client-submenu');
						user_menu.classList.remove('active');
						console.log(e.target);
					};
				});
		
			});*/


	// mega menu на всю длинну

	try {
		let mega_btn = document.querySelector('.mega__list');

		mega_btn.addEventListener('mouseover', (e) => {
			let distance = document.querySelector('.mega__list').getBoundingClientRect();
			let container = document.querySelector('.container').getBoundingClientRect();
			let mega_menu = document.querySelector('.mega-menu');
			let left = distance.left - container.left - 15;
			mega_menu.style.left = "-" + left + "px";
		}, false);

	}
	catch{ };

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		min: 0,
		max: 999,
		from: 30,
		to: 300,
		prefix: "$"
	});


	$('.product-one__tabs .tab, .blog-tabs .tab').on('click', function (event) {
		var id = $(this).attr('data-id');
		$('.product-one__tabs, .blog-tabs').find('.tab-item').removeClass('active-tab').hide();
		$('.product-one__tabs .tabs, .blog-tabs .tabs').find('.tab').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab').fadeIn();
		return false;
	});


});