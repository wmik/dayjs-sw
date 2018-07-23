import test from "ava";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import swLocale from "this";

test.beforeEach(() => {
	dayjs.locale(swLocale);
});

test("properly formats months and days using swahili(sw) locale", t => {
	t.is(dayjs("2018-07-16").format("MMMM"), "Julai");
	t.is(dayjs("2018-07-16").format("dddd"), "Jumatatu");
	t.is(dayjs("2018-02-16").format("MMMM"), "Februari");
	t.is(dayjs("2018-02-23").format("dddd"), "Ijumaa");
});

test("properly formats future and past", t => {
	dayjs.extend(relativeTime);
	t.is(dayjs("2020").from("2018"), "miaka 2 ijayo");
	t.is(dayjs("2009").from("2018"), "miaka 9 iliyopita");
	t.is(dayjs("2018-02").from("2018-07"), "miezi 5 iliyopita");
});
