export const dateTransform = dateTime => {
	const devide = dateTime.split('T');
	const date = devide[0].split('-').reverse().join('.');
	const time = devide[1].slice(0, 5);

	return `${time} ${date}`;
};
