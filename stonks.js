/** @param {NS} ns */
export async function main(ns) {
  const symbols = ns.stock.getSymbols();
  var index = 0
  while (true) {
    var position = ns.stock.getPosition(symbols[index]);
    var forecast = ns.stock.getForecast(symbols[index]);
    var volatility = ns.stock.getVolatility(symbols[index]);
    var aPrice = ns.stock.getAskPrice(symbols[index]);
    var bPrice = ns.stock.getBidPrice(symbols[index]);
    var nPrice = ns.stock.getPrice(symbols[index]);
    var target = (budget / aPrice);
    var pPrice = ns.stock.getPurchaseCost(symbols[index], target, long);
    var sGain = ns.stock.getSaleGain(symbols[index], position[1], long);
    var money = ns.stock.getServerMoneyAvailable("home");
    var budget = (money / 2);
    var gain = (nPrice * volatility)
    if (forecast > 0.66) {
      if ((gain * target) > 200000) {
        if (pPrice < budget) {
          ns.stock.buyStock(symbols[index], target);
        }
      }
    }
    if (position[1] > 0) {
      if (forecast < 0.5) {
        if (volatility > 0.5) {
          if (sGain > 200000) {
            ns.stock.sellStock(symbols[index], position[1]);
          }
        }
      }
    }
    index++;
    await ns.sleep(10);
  }
}
