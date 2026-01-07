/** @param {NS} ns */
export async function main(ns) {
  var index = 1
  while (true) {
    var servers = ns.getPurchasedServers();
    var srvCount = servers.length
    var price = ns.getPurchasedServerCost(4);
    var money = ns.getServerMoneyAvailable("home");
    var namecnt = (srvCount + 1)
    var name = "srv"
    var hname = name + namecnt
    var target = name + index
    var cRam = ns.getServerMaxRam(target)
    var tRam = cRam * 2
    var ramCost = ns.getPurchasedServerUpgradeCost(target, tRam);


    var threads = Math.floor(cRam / 2.5)
    //Buy servers until you have 25
    if (srvCount < 25) {
      if (money >= price) {
        ns.purchaseServer(hname, 4);
      }
    }

    // Upgrade the first server
    if (srvCount >= 25) {
      ns.print(target + "Current RAM: " + cRam)
      if (cRam < 1024) {
        ns.print("Ram Cost: " + ramCost);
        if (money >= ramCost) {
          ns.upgradePurchasedServer(target, tRam)
        }
      }
      //Switch to the next one
      if (cRam >= 1024) {
        index++;
      }

    }
    if (index >= 26) { index = 1 };
    if (!ns.fileExists("remote.js", target)) { ns.scp("remote.js", target, "home") }
    if (!ns.scriptRunning("remote.js", target)) {
      ns.scp("remote.js", target, "home")
      ns.exec("remote.js", target, threads)
    }
    if (ns.getServerUsedRam(target) <= (cRam * 0.6)) {
      ns.killall(target);
      ns.exec("remote.js", target, threads)
    }
    await ns.sleep(3000);
  }
}
