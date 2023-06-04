document.querySelectorAll('.fun_button')[1].onclick = () => {
	let items = document.querySelectorAll('.item')
	document.querySelector('.slide').appendChild(items[0])
	_flag = true
}

document.querySelectorAll('.fun_button')[0].onclick = () => {
	let items = document.querySelectorAll('.item')
	document.querySelector('.slide').prepend(items[items.length - 1])
	_flag = false
}

/**
 * 轮播
 */

let _flag = true;

const poll = () => {
	let items = document.querySelectorAll('.item')
	if (_flag) {
		// 向右
		document.querySelector('.slide').appendChild(items[0])
	} else {
		// 向左
		document.querySelector('.slide').prepend(items[items.length - 1])
	}
}

let _poll = setInterval(poll, 2000)

document.querySelector('.container').onmouseover = () => {
	clearInterval(_poll)
}
document.querySelector('.container').onmouseout = () => {
	_poll = setInterval(poll, 2000)
}
