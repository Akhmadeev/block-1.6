
let btnMenuOpen = document.querySelector('.modal-btn__button_burger--header');
let btnMenuClose = document.querySelector('.modal-btn__button_burger--sidebar');
let menu = document.querySelector('.sidebar');
let body = document.querySelector('body');
let hidden = document.querySelector('.hidden');
let form = document.querySelector('.form-list');
let formCall = document.querySelector('.form-call-list');
let btnFormOpen = document.querySelector('.modal-btn__button_repair');
let btnFormCallOpen = document.querySelector('.modal-btn__button_checkstatus');
let btnFormClose = document.querySelector('.modal-btn__button_burger--form');
let btnFormCallClose = document.querySelector('.modal-btn__button_back__formClose');



let addRemove = function(element, add, remove) {
	element.classList.add(add);
	element.classList.remove(remove);
}


//menu_left
btnMenuOpen.addEventListener('click', function() {
	addRemove(menu, 'sidebar__open', 'sidebar__close');
	addRemove(hidden, 'sidebar--open', 'sidebar--close');
	body.classList.add('.no_scroll');
	hidden.classList.add('.no_scroll');
});
btnMenuClose.addEventListener('click', function() {
	addRemove(menu, 'sidebar__close', 'sidebar__open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});
hidden.addEventListener('click', function() {
	addRemove(menu, 'sidebar__close', 'sidebar__open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});


//form
btnFormOpen.addEventListener('click', function() {
	addRemove(form, 'formAnimation_open', 'formAnimation_close');
	addRemove(hidden, 'sidebar--open', 'sidebar--close');
});
btnFormClose.addEventListener('click', function() {
	addRemove(form, 'formAnimation_close', 'formAnimation_open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});
hidden.addEventListener('click', function() {
	addRemove(form, 'formAnimation_close', 'formAnimation_open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});

//form-Call
btnFormCallOpen.addEventListener('click', function() {
	addRemove(formCall, 'formAnimation_open', 'formAnimation_close');
	addRemove(hidden, 'sidebar--open', 'sidebar--close');
});
btnFormCallClose.addEventListener('click', function() {
	addRemove(formCall, 'formAnimation_close', 'formAnimation_open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});
hidden.addEventListener('click', function() {
	addRemove(form, 'formAnimation_close', 'formAnimation_open');	
	addRemove(hidden, 'sidebar--close', 'sidebar--open');
});