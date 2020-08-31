show = () => {
	setTimeout(loading, 500);
};

loading = () => {
	document.querySelector('.loading').style.display = 'none';
	document.querySelector('.main-container').style.display = 'block';
};

openMenuMobile = () => {
	let overlay = document.querySelector('.overlay');
	let streep = document.querySelectorAll('.streep');

	if (overlay.style.display === 'block') {
		overlay.style.display = 'none';
		streep[0].style.transform = 'rotate(0deg)';
		streep[0].style.top = '0px';
		streep[1].style.display = 'block';
		streep[2].style.transform = 'rotate(0deg)';
	} else {
		overlay.style.display = 'block';
		streep[0].style.transform = 'rotate(45deg)';
		streep[0].style.top = '10px';
		streep[1].style.display = 'none';
		streep[2].style.transform = 'rotate(-45deg)';
	}
};

let logo = document.querySelector('.logo');

window.onscroll = () => {
	let logo_svg = document.querySelectorAll('.logo-svg g rect');
	let links = document.querySelectorAll('.links a');

	if (this.scrollY == 0) {
		for (let i = 0; i < logo_svg.length; i++) {
			logo_svg[i].style.fill = '#ffcc33';
		}

		for (let i = 0; i < logo_svg.length; i++) {
			logo_svg[i].style.fill = '#ffffff';
		}
	}

	if (this.scrollY <= 120) {
		for (let i = 0; i < logo_svg.length; i++) {
			logo_svg[i].style.fill = '#ffffff';
		}

		for (let index = 0; index < links.length; index++) {
			links[index].style.color = '#ffffff';
		}
	} else {
		for (let index = 0; index < links.length; index++) {
			links[index].style.color = '#ffffff';
		}

		for (let i = 0; i < logo_svg.length; i++) {
			logo_svg[i].style.fill = '#ffffff';
		}
	}
};

scrolling = () => {
	for (let index = 0; index < links.length; index++) {
		links[index].style.color = '#ffffff';
	}

	for (let i = 0; i < logo_svg.length; i++) {
		logo_svg[i].style.fill = '#ffffff';
	}
};
