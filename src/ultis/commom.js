export function isEmpty(value) {
	if (value === '' || /^\s+$/.test(value)) {
		return true;
	}
	return false;
}

export function isInValidEmail(value) {
	if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
		return true;
	}
	return false;
}
