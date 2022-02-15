function makeButtonsInteractive(parent, onClick = undefined) {
	const buttons = parent.querySelectorAll('button');
	const setActive = ({ currentTarget }) => {
		buttons.forEach(btn => btn.classList[btn === currentTarget ? 'add' : 'remove']('active'))
		onClick?.()
	}
	buttons.forEach(btn => btn.addEventListener('click', setActive));
}

const shuffleFoodItems = (() => {
	const parent = document.querySelector('.cuisine-options');
	return () => {
		for (let i = parent.children.length; i >= 0; i--) {
			parent.appendChild(parent.children[Math.random() * i | 0]);
		}
	}
})();
document.querySelectorAll('.carousel-indicators:nth-of-type(1), .order-online-now ul').forEach(element => makeButtonsInteractive(element, shuffleFoodItems))

makeButtonsInteractive(document.querySelector('.carousel-indicators:nth-of-type(2)'))
