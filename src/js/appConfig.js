/**
 * hackathon date
 */
const hachathonDate = new Date(2017, 10, 28);

export const startTiming = new Date(hachathonDate.valueOf());
startTiming.setHours(11);
startTiming.setMinutes(0);
startTiming.setSeconds(0, 0);

export const deadlineTiming = new Date(hachathonDate.valueOf());
deadlineTiming.setHours(17);
deadlineTiming.setMinutes(30);
deadlineTiming.setSeconds(0, 0);

/* eslint-disable max-len */
const defaultTypingText = 'aljjjgaaaaaaaaaaaaaaaaaaaaaaam,32;iop9gy7uk/lm;\\\\\\\\\\\\\\\\\\\\\\\\\\aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyy................s@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ioooooooooooooooooooooooooooooooooooooifffffffffffffffffffffffffffffffo23orl;wef;p34io3m23ihcdusihcowefdfnbdjewd';
/* eslint-enable max-len */

const textWidth = 48;
const textHeight = 92;

const bodyHeightWithoutFooter = document.body.offsetHeight - 160;

const totalTextNumber = Math.floor(window.innerWidth / textWidth) *
	(
		bodyHeightWithoutFooter % textHeight === 0 ?
			bodyHeightWithoutFooter / textHeight
			:
			Math.floor(bodyHeightWithoutFooter / textHeight) + 1
	);

export const catTyping = totalTextNumber < defaultTypingText.length ?
	defaultTypingText.substr(0, totalTextNumber)
	:
	defaultTypingText.repeat(Math.ceil(totalTextNumber / defaultTypingText.length))
		.substr(0, totalTextNumber - 1);

export const timer = {
	days: null,
	hours: null,
	minutes: null,
};

export default 'CONFIG';
