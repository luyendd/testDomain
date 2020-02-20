export const isEmpty = (value) => {
	if (value === '' || /^\s+$/.test(value)) {
		return true;
	}
	return false;
}

export const isInValidEmail = (value) => {
	if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
		return true;
	}
	return false;
}

export const roundRating = (value, step = 0.5) => {
	var inv = 1.0 / step;
	return Math.round(value * inv) / inv;
}

export const formatNumber = (value) => {
	return roundRating(value, 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

export const setLocal = (name, value) => {
	return localStorage.setItem(name, JSON.stringify(value));
}

export const getLocal = (name) => {
	return JSON.parse(localStorage.getItem(name));
}