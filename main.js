document.querySelectorAll(".carousel").forEach(carousel =>{

	const items = carousel.querySelectorAll(".carousel-item");
	const buttonsHtml = Array.from(items, () =>{

		return `<span class="carousel-button"></span>`

	});

carousel.insertAdjacentHTML("beforeend", `
		<div class="carousel-nav">
		${ buttonsHtml.join("")}
	
		</div>
	`);

const buttons = carousel.querySelectorAll(".carousel-button");

buttons.forEach( (button,i) => {

	button.addEventListener("click", () => {

		// un-select all the items
		items.forEach( item => item.classList.remove("carousel-item-selected"));
		buttons.forEach(button => button.classList.remove("carousel-button-selected"));

		items[i].classList.add("carousel-item-selected");
		button.classList.add("carousel-button-selected");

		});

	});

		//select first item on window load
		items[0].classList.add("carousel-item-selected");
		buttons[0].classList.add("carousel-button-selected");

});


var countedSeconds = 0;

window.onload = carouselUpdate;

function carouselUpdate(){

	setInterval(changeCarousel, 3000)
}


function changeCarousel(){

	if(countedSeconds > 2){
		countedSeconds = 0;	
	}

	document.querySelectorAll(".carousel").forEach(carousel =>{

		const items = carousel.querySelectorAll(".carousel-item");
		const buttons = carousel.querySelectorAll(".carousel-button");

		// un-select all the items
		items.forEach( item => item.classList.remove("carousel-item-selected"));
		buttons.forEach(button => button.classList.remove("carousel-button-selected"));

		// selected the current index
		items[countedSeconds].classList.add("carousel-item-selected");
		buttons[countedSeconds].classList.add("carousel-button-selected");

	});

	countedSeconds++;

}
