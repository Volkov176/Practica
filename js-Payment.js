const headers = document.querySelectorAll("[data-name='spoiler-title']");

      headers.forEach(function(item) {
      item.addEventListener("click", headerClick);
      });

      function headerClick() {
      this.nextElementSibling.classList.toggle("spoiler-body");
      }


      // Выбираем все элементы с классом like
    const count = document.querySelectorAll('.counter-1');

    // В каждом элементе выбираем плюс и минус. Навешиваем на событие клик функцию render()
    count.forEach(count => {
      const plus = count.querySelector('.plus');
      const minus = count.querySelector('.minus');
      const counter_element = count.querySelector('.dish_day-counter');

      let counter = 0;

      plus.addEventListener('click', () => {
        render(++counter, counter_element);
      });

      minus.addEventListener('click', () => {
        render(--counter, counter_element)
      });
    });

    const render = (counter, counter_element) => counter_element.innerText = counter;


    //popup
    const popupLinks = document.querySelectorAll('.profile-open');
    const timeout = 300;

    let unlock = true;

    if (popupLinks.length > 0) {
    	for (let index = 0; index < popupLinks.length; index++) {
    		const popupLink = popupLinks[index];
    		popupLink.addEventListener("click", function (e) {
    			const popupName = popupLink.getAttribute('href').replace('#', '');
    			const curentPopup = document.getElementById(popupName);
    			popupOpen(curentPopup);
    			e.preventDefault();
    		});
    	}
    }


    const popupCloseIcon = document.querySelectorAll('.profile-close');
    if (popupCloseIcon.length > 0) {
    	for (let index = 0; index < popupCloseIcon.length; index++) {
    		const el = popupCloseIcon[index];
    		el.addEventListener('click', function (e) {
    			popupClose(el.closest('.popup'));
    			e.preventDefault();
    		});
    	}
    }

    function popupOpen(curentPopup) {
    	if (curentPopup && unlock) {
    		const popupActive = document.querySelector('.profile.open');
    		if (popupActive) {
    			popupClose(popupActive, false);
    		}
    		curentPopup.classList.add('open');
    		curentPopup.addEventListener("click", function (e) {
    			if (!e.target.closest('')) {
    				popupClose(e.target.closest('.popup'));
    			}
    		});
    	}
    }

    //закрытие формы
    function popupClose(popupActive, doUnlock = true) {
    	if (unlock) {
    		popupActive.classList.remove('open');
    	}
    }