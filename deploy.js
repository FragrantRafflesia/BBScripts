  export async function main(ns) {
  const host = "neo-net"
  const serverMaxRam = ns.getServerMaxRam(host)
  const serverThreads = serverMaxRam / 2.45
  const serverThreadsRnd = Math.floor(serverThreads)
  await ns.nuke(host);
  await ns.brutessh(host);
  //await ns.ftpcrack(hostName);
  await ns.scp("remote.js", host, "home");
  await ns.exec("remote.js", host, {threads: serverThreadsRnd});
  await ns.alert("hostName:"+host+"\n"+"serverMaxRam:"+serverMaxRam+"\n"+"threads:"+serverThreadsRnd);
  }
