export async function main(ns) {
  let host = "harakiri-sushi";
  let minSec = ns.getServerMinSecurityLevel(host);
  let maxMoney = ns.getServerMaxMoney(host);
  while (true) {
    let sec = ns.getServerSecurityLevel(host);
    let money = ns.getServerMoneyAvailable(host);
    if (sec > minSec + 1) {
      await ns.weaken(host);
    } else if (money < maxMoney * 0.9) {
      await ns.grow(host);
    } else {
      await ns.hack(host);
    }
  }
}
