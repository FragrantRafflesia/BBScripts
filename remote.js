export async function main(ns) {
  var name = ns.getHostname()
  var port = name.replace("srv", "");
  while (true) {
    if (name == "home") { port = 26 }
    var host = ns.peek(port)
    var minSec = ns.getServerMinSecurityLevel(host);
    var maxMoney = ns.getServerMaxMoney(host);
    var sec = ns.getServerSecurityLevel(host);
    var money = ns.getServerMoneyAvailable(host);
    if (ns.hasRootAccess(host)) {
      if (sec > minSec + 1) {
        await ns.weaken(host);
      } else if (money < maxMoney * 0.9) {
        await ns.grow(host);
      } else {
        await ns.hack(host);
      }
    }
  }
}
