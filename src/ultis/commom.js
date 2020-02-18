export const isEmpty = (value) => {
	if (value === '' || /^\s+$/.test(value)) {
		return true;
	}
	return false;
}

export const isInValidEmail = (value) => {
	if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
		return true;
	}
	return false;
}

export const roundRating = (value, step = 0.5) => {
	var inv = 1.0 / step;
	return Math.round(value * inv) / inv;
}

export const formatNumber = (value) => {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const setLocal = (name, value) => {
	return localStorage.setItem(name, JSON.stringify(value));
}

export const getLocal = (name) => {
	return JSON.parse(localStorage.getItem(name));
}