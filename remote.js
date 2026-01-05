export async function main(ns) {
  var host = ns.getHostname();
  var sec = ns.getServerSecurityLevel(host)
  var minSec = ns.getServerMinSecurityLevel(host)
  var money = ns.getServerMoneyAvailable(host)
  var maxMoney = ns.getServerMaxMoney(host)
  while (true) {
    while (sec > minSec + 1) {
      await ns.weaken(host);
    }
    while (money < maxMoney * 0.9) {
      await ns.grow(host);
    }
    while (sec <= minSec + 1) {
      while (money >= maxMoney * 0.9) {
        await ns.hack(host);
      }
    }
  }
}
