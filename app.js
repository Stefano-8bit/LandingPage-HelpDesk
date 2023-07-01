
/*-------------------*/

const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;

let currentPosition = 0;

function scrollCards(direction) {
  const cardCount = cardContainer.children.length;

  if (direction === 'left') {
	currentPosition = Math.max(currentPosition - 1, 0);
  } else if (direction === 'right') {
	currentPosition = Math.min(currentPosition + 1, cardCount - 1);
  }

  const scrollPosition = currentPosition * cardWidth;

  cardContainer.style.transform = `translateX(-${scrollPosition}px)`;
}