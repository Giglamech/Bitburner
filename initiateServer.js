/** @param {NS} ns **/
export async function main(ns) {
	var threads = ns.args[0];
	await ns.wget("https://cdn.jsdelivr.net/gh/Giglamech/Bitburner@latest/runGeneralHack.js", "runGeneralHack.js");
	await ns.wget("https://cdn.jsdelivr.net/gh/Giglamech/Bitburner@latest/generalHack.js", "generalHack.js");
	await ns.run("runGeneralHack.js", 1, threads);
}
