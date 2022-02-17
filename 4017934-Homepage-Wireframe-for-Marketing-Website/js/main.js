
function hoverAboutUs({ currentTarget }){
	for (const sibling of currentTarget.parentNode.children) sibling.querySelector('figure').classList.remove('dark')
	currentTarget.querySelector('figure').classList.add('dark')
}
document.querySelectorAll('.about-us > section > section').forEach(section => section.addEventListener('mouseover', hoverAboutUs))