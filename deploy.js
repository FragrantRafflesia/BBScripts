export async function main(ns) {
  const host = "neo-net"
  const serverMaxRam = ns.getServerMaxRam(host)
  const serverThreads = serverMaxRam / 2.45
  const serverThreadsRnd = Math.floor(serverThreads)
  if (ns.fileExists("BruteSSH.exe", "home")) {
    await ns.brutessh(host);
  }
  if (ns.fileExists("FTPCrack.exe", "home")) {
    await ns.ftpcrack(hostName);
  }
  if (ns.fileExists("NUKE.exe", "home")) {
    await ns.nuke(host);
  }
  await ns.scp("remote.js", host, "home");
  await ns.exec("remote.js", host, { threads: serverThreadsRnd });
  await ns.alert("hostName:" + host + "\n" + "serverMaxRam:" + serverMaxRam + "\n" + "threads:" + serverThreadsRnd);
}
