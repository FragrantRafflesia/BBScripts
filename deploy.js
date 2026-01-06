export async function main(ns) {
  var host = "crush-fitness"
  var serverMaxRam = ns.getServerMaxRam(host)
  var serverThreads = serverMaxRam / 2.45
  var serverThreadsRnd = Math.floor(serverThreads)
  var hackSkill = ns.getHackingLevel(host)
  var reqHackSkill = ns.getServerRequiredHackingLevel(host)
  if (hackSkill >= reqHackSkill) {
    if (ns.fileExists("BruteSSH.exe", "home")) {
      await ns.brutessh(host);
    }
    if (ns.fileExists("FTPCrack.exe", "home")) {
      await ns.ftpcrack(host);
    }
    if (ns.fileExists("relaySMTP.exe", "home")) {
      await ns.relaysmtp(host);
    }
    if (ns.fileExists("HTTPWorm.exe", "home")) {
      await ns.httpworm(host);
    }
    if (ns.fileExists("SQLInject.exe", "home")) {
      await ns.sqlinject(host);
    }
    if (ns.fileExists("NUKE.exe", "home")) {
      await ns.nuke(host);
    }
    if (serverMaxRam > 0) {
      if (ns.fileExists("remote.js", host)) {
        ns.killall(host)
        ns.rm("remote.js", host)
        await ns.scp("remote.js", host, "home");
      }
      else { await ns.scp("remote.js", host, "home"); }

      await ns.exec("remote.js", host, { threads: serverThreadsRnd });
      await ns.alert("host:" + host + "\n" + "serverMaxRam:" + serverMaxRam + "\n" + "threads:" + serverThreadsRnd);
    }
    else { ns.alert("No RAM!"); }
  }

  else { ns.alert("Insufficient hacking skill!") }
}
