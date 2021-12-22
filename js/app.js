// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import {Swiper, Mousewheel, EffectFade, Controller, Pagination, Scrollbar, Navigation, FreeMode, Manipulation, Lazy} from "swiper"
Swiper.use([Mousewheel, EffectFade, Controller, Pagination, Scrollbar, Navigation, FreeMode, Manipulation, Lazy ]);

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.premises')) {
        if (screen.width > 1024) {
            const premisesSwiper = new Swiper('.premises__swiper', {
                loop: false,
                wrapperClass: 'premises__swiper-wrapper',
                slidesPerView: "auto",
                spaceBetween: 32,
              });
        }
    }


    if (document.querySelector('.entry')) {
        const choiseSwiper = new Swiper('.choise__swiper', {
            // Optional parameters
            // direction: 'vertical',
            loop: false,
            // wrapperClass: 'choise__swiper-wrapper',
            slidesPerView: "auto",
            spaceBetween: 22,
            breakpoints: {
                360: {
                    spaceBetween: 16,
                },
                540: {
                    spaceBetween: 22,
                }
            }
          });


          if (screen.width > 1024) {
              
              const swiperSpace_1 = new Swiper('.spaces__swiper_1', {
                  // Optional parameters
                  // direction: 'vertical',
                  loop: false,
                  effect: "fade",
      
                  pagination: {
                      el: ".spaces__pagination_1",
                      type: "fraction",
                    },
                    navigation: {
                      nextEl: ".spaces__button-next_1",
                      prevEl: ".spaces__button-prev_1",
                    },
                
                });
              const swiperSpace_2 = new Swiper('.spaces__swiper_2', {
                  // Optional parameters
                  // direction: 'vertical',
                  loop: false,
                  effect: "fade",
      
                  pagination: {
                      el: ".spaces__pagination_2",
                      type: "fraction",
                    },
                    navigation: {
                      nextEl: ".spaces__button-next_2",
                      prevEl: ".spaces__button-prev_2",
                    },
                
                });
              const swiperSpace_3 = new Swiper('.spaces__swiper_3', {
                  // Optional parameters
                  // direction: 'vertical',
                  loop: false,
                  effect: "fade",
      
                  pagination: {
                      el: ".spaces__pagination_3",
                      type: "fraction",
                    },
                    navigation: {
                      nextEl: ".spaces__button-next_3",
                      prevEl: ".spaces__button-prev_3",
                    },
                
                });
              const swiperSpace_4 = new Swiper('.spaces__swiper_4', {
                  // Optional parameters
                  // direction: 'vertical',
                  loop: false,
                  effect: "fade",
      
                  pagination: {
                      el: ".spaces__pagination_4",
                      type: "fraction",
                    },
                    navigation: {
                      nextEl: ".spaces__button-next_4",
                      prevEl: ".spaces__button-prev_4",
                    },
                
                });
              const swiperSpace_5 = new Swiper('.spaces__swiper_5', {
                  // Optional parameters
                  // direction: 'vertical',
                  loop: false,
                  effect: "fade",
      
                  pagination: {
                      el: ".spaces__pagination_5",
                      type: "fraction",
                    },
                    navigation: {
                      nextEl: ".spaces__button-next_5",
                      prevEl: ".spaces__button-prev_5",
                    },
                
                });
          }

    }
    if (document.querySelector('.apartment')) {
        const swiperApartment = new Swiper('.swiper__apartment', {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            effect: "fade",
            // If we need pagination
          
            // Navigation arrows
            pagination: {
                el: ".apartment__pagination",
                type: "fraction",
              },
              navigation: {
                nextEl: ".apartment__button-next",
                prevEl: ".apartment__button-prev",
              },
          
          });
          
          let hmenu = document.querySelector('.apartment__menu').offsetHeight;
            document.documentElement.style.setProperty("--hmenu", hmenu + "px");
        window.addEventListener('resize', () => {
            hmenu = document.querySelector('.apartment__menu').offsetHeight;
            document.documentElement.style.setProperty("--hmenu", hmenu + "px");
        })
    }
        // let activeSlide;
		// function onEntry(entry) {
		// 	entry.forEach(change => {
        //         console.log(change.target.getAttribute('id'))
		// 	  if (change.isIntersecting) {
        //           activeSlide = change.target.getAttribute('id')
		// 		// console.log(change.target)
		// 	  }
		// 	});
		//   }
		//   let options = { threshold: [0.99] };
		//   let observer = new IntersectionObserver(onEntry, options);
		//   let elements = document.querySelectorAll('section');
		//   for (let elm of elements) {
		// 	observer.observe(elm);
		//   }

    // window.addEventListener(`resize`, event => {
    //     if (window.screen.width >= 1025) {
    //         appSwiper = new Swiper('.app__swiper', {
    //             // Optional parameters
    //             direction: 'vertical',
    //             wrapperClass: 'swipers-wrappers',
    //             loop: false,
    //             mousewheel: true,
    //             speed: 800,
    //             slidesPerView: "auto",
    //             allowTouchMove: false,
    //             autoHeight: true,
    //             navigation: {
    //                 nextEl: '.swiper-next',
    //                 prevEl: '.swiper-prev',
    //               },
                
    //           });
    //     } else {
    //         appSwiper.destroy(true, true)
    //     }
        
    // }, false);

    let appSwiper
    if (window.screen.width >= 1025) {
        appSwiper = new Swiper('.app__swiper', {
            // Optional parameters
            direction: 'vertical',
            wrapperClass: 'swipers-wrappers',
            loop: false,
            mousewheel: true,
            speed: 800,
            slidesPerView: "auto",
            simulateTouch: false,
            // allowTouchMove: false,
            autoHeight: true,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              },
            
          });
    } 
    




    const solutionSwiper = new Swiper('.solution__swiper', {
        loop: false,
        spaceBetween: 16,
        freeMode: true,
        slidesPerView: 'auto',
        });



    const tinderSwiper = new Swiper('.tinder__swiper', {
    // Optional parameters
    loop: false,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
      },
    // lazy: true,

    });


     // lazy load img

	const imageObserver = new IntersectionObserver((entries, imgObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const lazyImage = entry.target
				console.log("lazy loading ", lazyImage)
				console.log(lazyImage.dataset.src)
				lazyImage.src = lazyImage.dataset.src
				lazyImage.classList.remove("swiper-lazy");
				imgObserver.unobserve(lazyImage);
			}
		})
	});
	const arr = document.querySelectorAll('img.swiper-lazy')
	arr.forEach((v) => {
		imageObserver.observe(v);
	})



    const serivesSwiper = new Swiper('.serives__swiper', {
        loop: false,
        freeMode: true,
        slidesPerView: 1,
        spaceBetween: 16,
    });




    let burgerBtn = document.querySelector('.header__burger');
    let headerMenu = document.querySelector('.header__menu');
    let bg = document.querySelector('.bg');

    burgerBtn.addEventListener('click', toggleHeaderMenu)
    bg.addEventListener('click', toggleHeaderMenu)


    function toggleHeaderMenu() {
        headerMenu.classList.toggle('active');
        bg.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    }





   








    let tinderContainer = document.querySelector('.rooms__tind');
    let allCards = document.querySelectorAll('.tinder--card');

    function initCards(card, index) {
    let newCards = document.querySelectorAll('.tinder--card:not(.removed)');
    newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform = 'translateY(' +8 * index + 'px) translateX(-' + 8 * index + 'px)';
        // card.style.opacity = (10 - index) / 10;
        card.style.display = 'none';
        if (index < 3) {
            card.style.display = 'flex';
        }
    });
    
    tinderContainer.classList.add('loaded');
    }

    initCards();

    allCards.forEach(item => {
        var swipe = new Hammer(item);
        swipe.on('swiperight swipeleft', function(e) {
            console.log(e.target)
            if (e.target.classList.contains('tinder-slide-img')) {
                return false;
            }
            e.preventDefault();
            if (e.type == 'swiperight') {
                // console.log(($(item).text()))
                $(item).addClass('removed like');
                item.style.transform = 'rotate(5deg) scale(0.8) translateX(500px)';
                item.style.opacity = 0;
                item.style.zIndex = 12;
                initCards();
            } else {
                $(item).addClass('removed dislike');
                item.style.transform = 'rotate(-5deg) scale(0.8) translateX(-500px)';
                item.style.opacity = 0;
                item.style.zIndex = 12;
                initCards();
            }
        
        })
  

    });

    window.addEventListener('keyup', (event) => {
        if (event.which == 37) {
            document.querySelectorAll('.tinder--card:not(.removed)').forEach((item, index) => {
               if (index == 0) {
                    $(item).addClass('removed dislike')
                    item.style.transform = 'rotate(-5deg) scale(0.8) translateX(-500px)';
                    item.style.opacity = 0;
                    item.style.zIndex = 12;
                    initCards();
           
               }

            })
        } else if (event.which == 39) {
            document.querySelectorAll('.tinder--card:not(.removed)').forEach((item, index) => {
                if (index == 0) {
                    $(item).addClass('removed like');
                    item.style.transform = 'rotate(5deg) scale(0.8) translateX(500px)';
                    item.style.opacity = 0;
                    item.style.zIndex = 12;
                    initCards();
                   
                }
            })
        }
    })


    // document.addEventListener('click', (event) => {
    //     console.log(event.target)
    // })


    function addRooms(item) {
        let rooms = []
        rooms.push(item)

    }

    // smooth animate
    document.querySelectorAll('a[href^="#"]').forEach(link => {

		link.addEventListener('click', function(e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			let topOffset;
				// const topOffset = 0; // если не нужен отступ сверху

				if (document.querySelector('.header')) {
					topOffset = document.querySelector('.header').offsetHeight;
                    if (screen.width <= 540) {
                        topOffset = 0;
                    }
				} else {
					topOffset = 0; // если не нужен отступ сверху
				}

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});


    
    

    // $('.services__checkboxLabel').click(function() {
    //     if ($(this).is(':checked')) {
    //       console.log($(this))
    //     }
    //   });
 

    function addChekInputsResult() {
        let checkedInputs;
        let arrInputs = ['Проектор с большим экраном','Караоке','Настольные игры','Игровые приставки'];
        
        checkedInputs = $('.services__group').find('input[type="radio"]:checked, input[type="checkbox"]:checked');
        checkedInputs.each(function() {
            arrInputs.push(($(this)[0]).value)
        })
        return arrInputs
    }


    function addParty() {
        let party;
        party = $('.solution__slider').find('input[type="radio"]:checked, input[type="checkbox"]:checked');
        return party[0].getAttribute('id')
    }


    function addCardLiked() {
        let cards = document.querySelectorAll('.like');
        let cardsRooms = document.querySelectorAll('.tinder--card')
        if (cards.length) {
            cardsRooms = [];
            cards.forEach(item => {
                cardsRooms.push(item)
            })
            return cardsRooms;
        } else {
            return cardsRooms;
        }
    }


    var holiday = {
        birthday: {
            price: 501,
            hour: 3,
            services: ['Еда и напитки','Украшение зала','Ведущий (тематическая программа)'],
        },
        party: {
            price: 502,
            hour: 3,
            services: ['Еда и напитки','Украшение зала','Бармен','DJ'],
        },
        birthdayChild: {
            price: 503,
            hour: 3,
            services: ['Еда и напитки','Украшение зала','Ведущий'],
        },
        romance: {
            price: 504,
            hour: 2.5,
            services: ['Романтический ужин','Украшение зала лепестками роз и свечами','Букет цветов для девушки','Слайд-шоу','Вкусные десерты','Горячие напитки'],
        },
        outlet: {
            price: 505,
            hour: 4,
            services: ['Еда и напитки','Украшение зала','Ведущий','Фотограф','DJ'],
        },
        wedding: {
            price: 506,
            hour: 4,
            services: ['Еда и напитки','Украшение зала','Ведущий','Фотограф','DJ'],
        },
        boysParty: {
            price: 507,
            hour: 4,
            services: ['Еда и напитки','Украшение зала','Ведущий','Фотограф','DJ'],
        },
        girlParty: {
            price: 508,
            hour: 4,
            services: ['Еда и напитки','Украшение зала','Реквизит для подружек невесты','Ведущий','Фотограф','DJ'],
        },
        сorporate: {
            price: 509,
            hour: 4,
            services: ['Еда и напитки','Украшение зала','Ведущий','Фотограф','DJ'],
        },

    }
    
   let tempSlide = `<section class="offer swiper-slide" id="offerLink">
   <div class="container">
       <div class="offer__content">
           <div class="menu offer__menu">
               <nav class="navigation menu__navigation">
                   <ul class="navigation__menu">
                       <li class="navigation__list">
                           <a href="#" class="navigation__link">Контакты</a>
                       </li>
                       <li class="navigation__list">
                           <a href="#" class="navigation__link">Мероприятия</a>
                       </li>
                       <li class="navigation__list">
                           <a href="#" class="navigation__link">Комнаты</a>
                       </li>
                       <li class="navigation__list">
                           <a href="#" class="navigation__link">Команда</a>
                       </li>
                   </ul>
               </nav>
               <img src="images/dist/logo.png" alt="logo">
               <div class="contacts menu__contacts">
                   <ul class="contacts__menu">
                       <li class="contacts__list">
                           <a href="#" class="contacts__link">г. Санкт-Петербург, ул. Рубинштейна 20</a>
                       </li>
                       <li class="contacts__list">
                           <a href="#" class="contacts__link">СПБ, ул. Рубинштейна 20</a>
                       </li>
                       <li class="navigation__list">
                           <a href="tel:88007654323" class="contacts__link">8 (800) 765-43-23</a>
                       </li>
                   </ul>
               </div>
           </div>

           <div class="offer__info">
               <div class="offer__foryou">
                   <div class="offer__title-block">
                       <h3 class="offer__title offer__title-black">для<br> тебя</h3>
                       <span class="offer__subtitle offer__subtitle-2">На основе твоих ответов подобрали для тебя
                           персональное предложение</span>
                   </div>
                   <div class="offer__customBox offerCustomBox offerCustomBox-black">
                       <div class="offerCustomBox-1">
                           <div class="offer__row-1">
                               <div class="offer__img">
                                   <img src="images/dist/solution/friends.png" alt="png">
                               </div>
                               <div class="offer__group">
                                   <div class="offer__text">
                                       <span class="offer__label">Комната на выбор</span>
                                       <div class="offer__labels offer__labels-foryou">
                                       </div>
                                   </div>
                                   <div class="offer__parametres">
                                       <span class="offer__inscription">Параметры</span>
                                       <div class="offer__consignment">
                                           <span class="offer__word">до <span class="offer__word-bold offer__word-people">12</span> человек</span>
                                           <span class="offer__word">до <span class="offer__word-bold offer__word-hour">6</span> часов</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="offer__row-2">
                               <span class="offer__footnote">Развлечения</span>
                               <div class="offer__option offer__option-foryou">
                                   <!-- <span class="offer__option-item">Кальян</span>
                                   <span class="offer__option-item">Фокусник</span>
                                   <span class="offer__option-item">Видеограф</span>
                                   <span class="offer__option-item">Еда</span>
                                   <span class="offer__option-item">Напитки (ALC)</span>
                                   <span class="offer__option-item">Официант</span> -->
                               </div>
                           </div>
                           <div class="offer__row-3">
                               <span class="offer__price">от <span class="offer__price-bold">4500</span> ₽</span>
                               <button class="btn offer__btn">Забронировать</button>
                           </div>
                       </div>
                   </div>
                   <span class="offer__subtitle offer__subtitle-1">На основе твоих ответов подобрали для тебя
                       персональное предложение</span>
               </div>
               <div class="offer__ready">
                   <div class="offer__title-block">
                       <h3 class="offer__title offer__title-red">готовый пакет</h3>
                       <span class="offer__subtitle offer__subtitle-2">Выгодное предложение с небольшими
                           отличиями от твоего выбора</span>
                   </div>
                   <div class="offer__customBox offerCustomBox offerCustomBox-red">
                       <div class="offerCustomBox-1">
                           <div class="offer__row-1">
                               <div class="offer__img">
                                   <img src="images/dist/solution/friends.png" alt="png">
                               </div>
                               <div class="offer__group">
                                   <div class="offer__text">
                                       <span class="offer__label">Комната на выбор</span>
                                       <div class="offer__labels">
                                           <span class="offer__labels-item">Любая</span>
                                       </div>
                                   </div>
                                   <div class="offer__parametres">
                                       <span class="offer__inscription">Параметры</span>
                                       <div class="offer__consignment">
                                           <span class="offer__word">до <span class="offer__word-bold offer__word-peoples">16</span> человек</span>
                                           <span class="offer__word">до <span class="offer__word-bold offer__word-hours">10</span> часов</span>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="offer__row-2">
                               <span class="offer__footnote">Развлечения</span>
                               <div class="offer__option offer__option-ready">
                                   <!-- <span class="offer__option-item">Кальян</span>
                                   <span class="offer__option-item">Фокусник</span>
                                   <span class="offer__option-item">Видеограф</span>
                                   <span class="offer__option-item">Еда</span>
                                   <span class="offer__option-item">Напитки (ALC)</span>
                                   <span class="offer__option-item">Официант</span> -->
                               </div>
                           </div>
                           <div class="offer__row-3">
                               <span class="offer__price"><span class="offer__price-bold offer__price-ready">4800</span> ₽</span>
                               <button class="btn offer__btn">Забронировать</button>
                           </div>
                       </div>
                   </div>
                   <div class="offer__link offer__link-2">
                       <a href="#" class="offer__pack">Другие пакеты</a>					
                   </div>
                   <span class="offer__subtitle offer__subtitle-1">Выгодное предложение с небольшими
                       отличиями от твоего выбора</span>
               </div>
           </div>

           <div class="offer__link offer__link-1">
               <a href="#" class="offer__pack">Другие пакеты</a>					
           </div>


           <div class="offer__customBtn customBtnWhite btn">
               <div class="customBtnWhite-1">
                   <div class="customBtnWhite-2">
                       <div class="customBtnWhite-3">
                           Мне не подходит
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</section>`



    $('.solution__customBtn').on('click', function() {

        
        console.log(addChekInputsResult())
        // $('.offer').show(800);

        if (screen.width >= 1025) {
            if ($('.offer')) {
                appSwiper.removeSlide(4)
                appSwiper.appendSlide(tempSlide)
                appSwiper.slideNext(800)
            } else {
                appSwiper.appendSlide(tempSlide)
            }
        } else {
            if ($('.offer')) {
                $('.offer').remove()
                $('body').append(tempSlide)
            } else {
                $('body').append(tempSlide)
            }
        }

        $('.offer__labels').empty();
        $('.offer__option').empty();

        addChekInputsResult().forEach(item => {
            // console.log(item)
            let template = `<span class="offer__option-item">${item}</span>`
            $('.offer__option-foryou').append(template)
        })

        let party = $('.solution__slider').find('input[type="radio"]:checked, input[type="checkbox"]:checked')[0]
        let attribute = party.getAttribute('id')
        console.log(attribute)
        console.log(holiday)
        holiday[`${attribute}`].services.forEach(item => {
            let templates = `<span class="offer__option-item">${item}</span>`
            $('.offer__option-ready').append(templates)
        })

        if (screen.width > 540) {
            let minPrice = 1000;
            addCardLiked().forEach((item, index) => {
                if (+document.querySelector('#value').innerText <= +item.getAttribute('data-count')) {
                    if (+item.getAttribute('data-price') < minPrice) {
                        minPrice = item.getAttribute('data-price');
                    }
                    let temp = `<span class="offer__labels-item">${item.getAttribute('data-title')},</span>`
                    // $('.offer__labels-foryou').append(temp)
                    $('.offer__labels').append(temp)
                } 
            })

            document.querySelector('.offer__price-bold').innerText = minPrice * document.querySelector('.customTimes__text-hour').value;
            document.querySelector('.offer__word-people').innerText = document.querySelector('#value').innerText;
            document.querySelector('.offer__word-peoples').innerText = document.querySelector('#value').innerText;
            document.querySelector('.offer__word-hour').innerText = document.querySelector('.customTimes__text-hour').value;
            document.querySelector('.offer__word-hours').innerText = document.querySelector('.customTimes__text-hour').value;



            if (holiday[`${attribute}`].hour >= document.querySelector('.customTimes__text-hour').value) {
                document.querySelector('.offer__price-ready').innerText = holiday[`${attribute}`].price
            } else {
                document.querySelector('.offer__price-ready').innerText = (document.querySelector('.customTimes__text-hour').value - holiday[`${attribute}`].hour) * minPrice + holiday[`${attribute}`].price
            }

        } else {
            let minPrice = 1000;
            addCardLiked().forEach((item, index) => {
                if (+document.querySelector('.solution__customSelectCount-hour').innerText <= +item.getAttribute('data-count')) {
                    if (+item.getAttribute('data-price') < minPrice) {
                        minPrice = item.getAttribute('data-price');
                    }
                    let temp = `<span class="offer__labels-item">${item.getAttribute('data-title')},</span>`
                    $('.offer__labels').append(temp)
                } 
            })

            document.querySelector('.offer__price-bold').innerText = minPrice * document.querySelector('.solution__customSelect-hours').innerText;
            document.querySelector('.offer__word-people').innerText = document.querySelector('.solution__customSelectCount-hour').innerText;
            document.querySelector('.offer__word-peoples').innerText = document.querySelector('.solution__customSelectCount-hour').innerText;
            document.querySelector('.offer__word-hour').innerText = document.querySelector('.solution__customSelect-hours').innerText;
            document.querySelector('.offer__word-hours').innerText = document.querySelector('.solution__customSelect-hours').innerText;
            
            if (holiday[`${attribute}`].hour >= document.querySelector('.solution__customSelect-hours').innerText) {
                document.querySelector('.offer__price-ready').innerText = holiday[`${attribute}`].price
            }

        }
        


    })
    

    
})
