var canvas = document.getElementById('cvs')
canvas.width = innerWidth
canvas.height = innerHeight
var context = canvas.getContext('2d')
context.fillStyle = 'black'

var colors = document.querySelectorAll('.colors div')

var boldInput = document.querySelector('input[type="range"]')
var radius = 30
boldInput.value = radius

boldInput.onchange = function() {
	radius = boldInput.value
}

var isDraw = false

canvas.addEventListener('mousedown', function() {
	isDraw = !isDraw
	if(isDraw) canvas.style.cursor = 'url(./pen.cur), default'
	else canvas.style.cursor = 'default'
})

canvas.addEventListener('mousemove', function(e) {
	if(!isDraw) return
	var pos = [e.clientX, e.clientY]
	context.beginPath();
	context.arc(pos[0], pos[1], radius * 0.1, 0, 2 * Math.PI);
	context.fill();
})

document.addEventListener('keydown', function(e) {
	if(e.keyCode === 27) {
		isDraw = false
		canvas.style.cursor = 'default'
	}
})

colors.forEach(function(color) {
	color.addEventListener('click', function() {
		context.fillStyle = color.style.backgroundColor
	})
})

