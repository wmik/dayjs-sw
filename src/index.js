const localeObject = {
	name: "sw",
	weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
		"_"
	),
	months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
		"_"
	),
	monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
	relativeTime: {
		future: "%s ijayo",
		past: "%s iliyopita",
		s: "sekunde",
		m: "dakika",
		mm: "dakika %d",
		h: "saa",
		hh: "masaa %d",
		d: "siku",
		dd: "siku %d",
		M: "mwezi",
		MM: "miezi %d",
		y: "mwaka",
		yy: "miaka %d"
	}
};

module.exports = localeObject;
