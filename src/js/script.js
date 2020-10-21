let popup = document.querySelectorAll('.software-slide');
let popupo = document.querySelectorAll('.software-slideXl');
let btnopen = document.querySelector('.widget__btn-open');
let btn_brend = document.querySelector('.widget__btn--brend');
let btn_technics = document.querySelector('.widget__btn--technics');
let btnSm = document.querySelectorAll('.software-slide__md');
let btnXl = document.querySelectorAll('.software-slide__xl');

const mediaQuery = window.matchMedia('(min-width: 768px;)');
const mediaQuery1 = window.matchMedia('(max-width: 1119px)');
const mediaQuery2 = window.matchMedia('(min-width: 1120px)');


let oneTrue = function(x) {
	 for (let i = 0; i < popup.length; i++ ) {
		popup[i].classList.remove(x);
	}
}

let twoTrue = function() {
	for (let i = 6; i < popup.length; i++ ) {
		popup[i].classList.add('software-slide__md');
	}
}
let threeTrue = function() {
	for (let i = 8; i < popup.length; i++ ) {
			popup[i].classList.add('software-slide__xl');
		}
}
let oneTrue1 = function(x) {
	for (let i = 0; i < popupo.length; i++ ) {
	   popupo[i].classList.remove(x);
   }
}
let twofour = function() {
	for (let i = 3; i < popupo.length; i++ ) {
		popupo[i].classList.add('software-slide__md');
	}
}
let twofive = function() {
	for (let i = 4; i < popupo.length; i++ ) {
		popupo[i].classList.add('software-slide__xl');
	}
}
let fnReverse = function(x) {
	x.classList.add('widget__btn--close');
	x.innerHTML = 'Скрыть';

}

btn_brend.addEventListener('click', function() {
	if (mediaQuery.matches || mediaQuery1.matches) {
		oneTrue('software-slide__md');
		if (btn_brend.innerHTML === 'Скрыть') {
			twoTrue();
			btn_brend.innerHTML = 'Показать все';
			btn_brend.classList.remove('widget__btn--close')
		} else{
			fnReverse(btn_brend);
		}
}
	if (mediaQuery2.matches) {
		oneTrue('software-slide__xl'); 
		if (btn_brend.innerHTML === 'Скрыть') {
			threeTrue();
			btn_brend.innerHTML = 'Показать все';
			btn_brend.classList.remove('widget__btn--close')
		} else{
			fnReverse(btn_brend);
		}
	}
});

btn_technics.addEventListener('click', function() {
	if (mediaQuery.matches || mediaQuery1.matches) {
		 oneTrue1('software-slide__md');
		if (btn_technics.innerHTML === 'Скрыть') {
			btn_technics.innerHTML = 'Показать все';
			twofour();
			btn_technics.classList.remove('widget__btn--close');
		} else{
			fnReverse(btn_technics);
		}
	}
	if (mediaQuery2.matches) {
		oneTrue1('software-slide__xl'); 
		if (btn_technics.innerHTML === 'Скрыть') {
			twofive();
			btn_technics.innerHTML = 'Показать все';
			btn_technics.classList.remove('widget__btn--close');
		} else{
			fnReverse(btn_technics);
		}
	}
});
//98

/*
btn_brend.addEventListener('click', function() {
	if (mediaQuery.matches || mediaQuery1.matches) {
			if (btn.innerHTML === 'Показать все';) {
				btn.innerHTML = 'Скрыть';
				

			}
			/*
		(btnSm.length > 1 ) ? oneTrue('software-slide__md') : twoTrue ;
		if (btn.innerHTML === 'Скрыть') {
			btn.innerHTML === 'Показать все';
			twoTrue();
			btn.classList.remove('btn-open__further--close')
		}else {
			btn.innerHTML = 'Скрыть';
			btn.classList.add('btn-open__further--close')
		}
}
	if (mediaQuery2.matches) {
		(btnXl.length > 1 ) ? oneTrue('software-slide__xl') : threeTrue ; 
		if (btn.innerHTML === 'Скрыть') {
			btn.innerHTML = 'Показать все ';
			threeTrue();
			btn.classList.remove('widget__btn--close')
		} else {
			btn.innerHTML = 'Скрыть';
			btn.classList.add('widget__btn--close')
		}
	}
});

btn_technics.addEventListener('click', function() {
	if (mediaQuery.matches || mediaQuery1.matches) {
		(btnSm.length > 1 ) ? oneTrue('software-slide__md') : twoTrue ;
		if (btn.innerHTML === 'Скрыть') {
			btn.innerHTML = 'Показать все ';
			twoTrue();
			btn.classList.remove('btn-open__further--close')
		}else {
			btn.innerHTML = 'Скрыть';
			btn.classList.add('btn-open__further--close')
		}
}
	if (mediaQuery2.matches) {
		(btnXl.length > 1 ) ? oneTrue('software-slide__xl') : threeTrue ; 
		if (btn.innerHTML === 'Скрыть') {
			btn.innerHTML = 'Показать все ';
			threeTrue();
			btn.classList.remove('widget__btn--close')
		} else {
			btn.innerHTML = 'Скрыть';
			btn.classList.add('widget__btn--close')
		}
	}
});

*/
/*
btnopen.addEventListener('click', function() {
	if (mediaQuery.matches) {
  for (let i = 6; i < popup.length; i++ ) {
		popup[i].classList.add('software-slide__768');
	}
	(btn.innerHTML === 'Скрыть') ? btn.innerHTML = 'Показать все ' : btn.innerHTML = 'Скрыть';
	btn.classList.remove('btn-open__further--close');
	btn.classList.add('btn-open__further-open');
}
	if (mediaQuery1.matches) {
	for (let i = 8; i < popup.length; i++ ) {
			popup[i].classList.add('software-slide__1120');
		}
	btnclose.classList.remove('btn-open');
	btnclose.classList.add('btn-open-close');
	btnopen.classList.remove('btn-open-close');
	btnopen.classList.add('btn-open');
	}
});
*/