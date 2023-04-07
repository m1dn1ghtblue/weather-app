'use strict';

import blizzard from '../resources/weather-icons/blizzard.svg';
import cloudy from '../resources/weather-icons/cloudy.svg';
import drizzle from '../resources/weather-icons/drizzle.svg';
import fog from '../resources/weather-icons/fog.svg';
import icePellets from '../resources/weather-icons/ice_pellets.svg';
import mist from '../resources/weather-icons/mist.svg';
import moon from '../resources/weather-icons/moon.svg';
import overcast from '../resources/weather-icons/overcast.svg';
import rain from '../resources/weather-icons/rain.svg';
import sleet from '../resources/weather-icons/sleet.svg';
import snow from '../resources/weather-icons/snow.svg';
import sun from '../resources/weather-icons/sun.svg';
import thunder from '../resources/weather-icons/thunder.svg';

const iconMap = [
	{ regex: /thunder/i, icon: thunder },
	{ regex: /cloudy/i, icon: cloudy },
	{ regex: /sunny/i, icon: sun },
	{ regex: /clear/i, icon: moon },
	{ regex: /overcast/i, icon: overcast },
	{ regex: /fog/i, icon: fog },
	{ regex: /mist/i, icon: mist },
	{ regex: /(rain)/i, icon: rain },
	{ regex: /snow/i, icon: snow },
	{ regex: /blizzard/i, icon: blizzard },
	{ regex: /(sleet)/i, icon: sleet },
	{ regex: /drizzle/i, icon: drizzle },
	{ regex: /ice pellets/i, icon: icePellets },
];

export default function getIcon(conditionText) {
	for (let element of iconMap) {
		if (element.regex.test(conditionText)) {
			return element.icon;
		}
	}
}
