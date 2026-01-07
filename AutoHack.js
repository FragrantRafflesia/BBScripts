export async function main(ns) {
  var hosts = ["4sigma", "aerocorp", "aevum-police", "alpha-ent", "applied-energetics", "avmnite-02h", "b-and-a", "blade", "catalyst", "clarkinc", "computek", "crush-fitness", "CSEC", "defcomm", "deltaone", "ecorp", "foodnstuff", "fulcrumassets", "fulcrumtech", "galactic-cyber", "global-pharm", "harakiri-sushi", "helios", "hong-fang-tea", "I.I.I.I", "icarus", "infocomm", "iron-gym", "joesguns", "johnson-ortho", "kuai-gong", "lexo-corp", "max-hardware", "megacorp", "microdyne", "millenium-fitness", "n00dles", "nectar-net", "neo-net", "netlink", "nova-med", "nwo", "omega-net", "omnia", "omnitek", "phantasy", "powerhouse-fitness", "rho-construction", "rothman-uni", "run4theh111z", "sigma-cosmetics", "silver-helix", "snap-fitness", "solaris", "stormtech", "summit-uni", "syscore", "taiyang-digital", "The-Cave", "the-hub", "titan-labs", "unitalife", "univ-energy", "vitalife", "zb-def", "zb-institute", "zer0", "zeus-med"]
  var index = 0
  while (true) {
    var hackSkill = ns.getHackingLevel();
    var reqHackSkill = ns.getServerRequiredHackingLevel(hosts[index]);
    var portsReq = ns.getServerNumPortsRequired(hosts[index]);
    var ports = ns.getServer(hosts[index]).openPortCount;
    if (hackSkill >= reqHackSkill) {
      if (ns.fileExists("BruteSSH.exe", "home")) {
        await ns.brutessh(hosts[index]);
      }
      if (ns.fileExists("FTPCrack.exe", "home")) {
        await ns.ftpcrack(hosts[index]);
      }
      if (ns.fileExists("relaySMTP.exe", "home")) {
        await ns.relaysmtp(hosts[index]);
      }
      if (ns.fileExists("HTTPWorm.exe", "home")) {
        await ns.httpworm(hosts[index]);
      }
      if (ns.fileExists("SQLInject.exe", "home")) {
        await ns.sqlinject(hosts[index]);
      }
      if (ns.fileExists("NUKE.exe", "home")) {
        if (ports >= portsReq) {
          await ns.nuke(hosts[index]);
        }
      }
    }
    index++;
    if (index == 68) { index = (0) }
    await ns.sleep(200);
  }
}
