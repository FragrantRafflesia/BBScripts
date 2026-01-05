export async function main(ns) {
  var host = "nectar-net"
  ns.nuke(host);
  ns.scp("remote.js", host);
}
