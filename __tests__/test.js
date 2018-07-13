import test from "ava";
import pkg from "this";

test("pkg name", t => {
	const pkgConfig = pkg();
	t.is(pkgConfig.name, "xxxxx");
});

test("pkg version", t => {
	const pkgConfig = pkg();
	t.is(pkgConfig.version, "0.0.0-alpha1");
});

test("pkg devDependencies", t => {
	const devDependencies = {
		ava: "*",
		coveralls: "*",
		"eslint-config-xo-wmik": "*",
		nyc: "*",
		requirable: "*",
		this: "*",
		xo: "*"
	};
	const pkgConfig = pkg();
	t.deepEqual(pkgConfig.devDependencies, devDependencies);
});

test("pkg style guide", t => {
	const pkgConfig = pkg();
	t.deepEqual(pkgConfig.xo, { extends: "xo-wmik" });
});
