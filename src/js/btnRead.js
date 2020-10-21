let button_aside = document.querySelector('.button_further');
let aside = document.querySelector('.aside');
let asideOpen = document.querySelector('.aside__open');

//aside
button_aside.addEventListener('click', function() {
	if (button_aside.innerHTML === 'Читать далее') {
		aside.classList.remove('aside__close');
		aside.classList.add('aside__open');
		button_aside.innerHTML = 'Скрыть';
	} else {
		aside.classList.add('aside__close');
		aside.classList.remove('aside__open');
		button_aside.innerHTML = 'Читать далее';
	}
	
});
