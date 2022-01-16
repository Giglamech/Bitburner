/** @param {NS} ns **/
export async function main(ns) {
	var threads = ns.args[0];
	await ns.wget("https://cdn.jsdelivr.net/gh/Giglamech/Bitburner@latest/generalHack.js", "generalHack.js");
	ns.run("generalHack.js", threads, "hong-fang-tea");
	ns.run("generalHack.js", threads, "harakiri-sushi");
	ns.run("generalHack.js", threads, "joesguns");
	ns.run("generalHack.js", threads, "sigma-cosmetics");
	ns.run("generalHack.js", threads, "foodnstuff");
	ns.run("generalHack.js", threads, "n00dles");
}
