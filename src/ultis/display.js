import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { roundRating } from './commom';

export const renderStarts = (rate) => {
	const rating = roundRating(rate);

	const stars = [];
	for (let index = 0; index < 5; index++) {
		if (rating - index >= 1) {
			stars.push(<FaStar key={index} />);
		} else if (rating - index <= 0) {
			stars.push(<FaRegStar key={index} />);
		} else {
			stars.push(<FaStarHalfAlt key={index} />);
		}
	}
	return stars;
}