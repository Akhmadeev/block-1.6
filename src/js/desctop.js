
let sidebarMenuDesctop = document.querySelector('.sidebar');

const mediaQuery3 = window.matchMedia('(min-width: 1440px)');
//aside
let flexDesctop = function() {
	let a;
	if(mediaQuery3 < width) {
		a = console.log('Работает!')
	} else {
		a = console.log('НЕЕЕЕЕ Работает!')
	}
	return a; 
};

flexDesctop();
