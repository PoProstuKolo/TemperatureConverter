const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

// T(°F) = T(°C) x 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const fahrToCel = () => {
	let fahrenheit = converter.value * 1.8 + 32
	result.style.color = ''
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
	converter.value = ''
}

const celToFahr = () => {
	let celsius = (converter.value - 32) / 1.8
	result.style.color = ''
	result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if (one.textContent === '°C') {
			fahrToCel()
		} else {
			celToFahr()
		}
	} else {
		result.textContent = `Musisz podać jakąś wartość!`
		result.style.color = 'tomato'
	}
}

const reset = () => {
	converter.value = ''
	result.textContent = ''
}
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
changeBtn.addEventListener('click', swap)
