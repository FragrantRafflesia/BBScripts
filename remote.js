export async function main(ns) {
  while (true) {
    var host = ns.peek(1)
    var minSec = ns.getServerMinSecurityLevel(host);
    var maxMoney = ns.getServerMaxMoney(host);
    var sec = ns.getServerSecurityLevel(host);
    var money = ns.getServerMoneyAvailable(host);
    if (sec > minSec + 1) {
      await ns.weaken(host);
    } else if (money < maxMoney * 0.9) {
      await ns.grow(host);
    } else {
      await ns.hack(host);
    }
  }
}
