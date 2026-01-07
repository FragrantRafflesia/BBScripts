/** @param {NS} ns */
export async function main(ns) {
  var hosts = ["4sigma", "aerocorp", "aevum-police", "alpha-ent", "applied-energetics", "avmnite-02h", "b-and-a", "blade", "catalyst", "clarkinc", "computek", "crush-fitness", "CSEC", "darkweb", "defcomm", "deltaone", "ecorp", "foodnstuff", "fulcrumassets", "fulcrumtech", "galactic-cyber", "global-pharm", "harakiri-sushi", "helios", "hong-fang-tea", "I.I.I.I", "icarus", "infocomm", "iron-gym", "joesguns", "johnson-ortho", "kuai-gong", "lexo-corp", "max-hardware", "megacorp", "microdyne", "millenium-fitness", "n00dles", "nectar-net", "neo-net", "netlink", "nova-med", "nwo", "omega-net", "omnia", "omnitek", "phantasy", "powerhouse-fitness", "rho-construction", "rothman-uni", "run4theh111z", "sigma-cosmetics", "silver-helix", "snap-fitness", "solaris", "stormtech", "summit-uni", "syscore", "taiyang-digital", "The-Cave", "the-hub", "titan-labs", "unitalife", "univ-energy", "vitalife", "zb-def", "zb-institute", "zer0", "zeus-med"]
  var index = 0
  while (true) {
    var target = hosts[index]
    var cRam = ns.getServerMaxRam(target);
    var threads = Math.floor(cRam / 4);
    var pwned = ns.getServer(target).hasAdminRights
    if (cRam > 4) {
      if (pwned) {
        if (!ns.fileExists("share.js", target)) { ns.scp("share.js", target, "home") }
        if (!ns.scriptRunning("share.js", target)) { ns.exec("share.js", target, threads) }
        if (ns.getServerUsedRam(target) <= (cRam * 0.9)) {
          ns.killall(target);
          ns.exec("share.js", target, threads)
        }
      }
    }
    index++;
    if (index >= 69) { index = 0 };
    await ns.sleep(3000);
  }
}
