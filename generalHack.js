/** @param {NS} ns **/
export async function main(ns) {
	var target = ns.args[0];
	var moneyTresh = ns.getServerMaxMoney(target) * 0.95;
	var securityThresh = ns.getServerMinSecurityLevel(target) + 1;

	if (ns.fileExists("BruteSSH.exe", "home")) {
		ns.brutessh(target);
	}
	
	ns.nuke(target);
	while(true) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyTresh) {
			await ns.grow(target);
		} else {
			await ns.hack(target);
		}
	}
}
