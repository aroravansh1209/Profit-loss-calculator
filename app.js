const purchasePrice = document.querySelector("#purchase-price");
const quatityPurchased = document.querySelector("#quantity");
const marketPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate");
const outputEl = document.querySelector("#output");

function calculateProfitAndLoss() {
  if (Number(purchasePrice.value) > Number(marketPrice.value)) {
    var loss =
      (Number(purchasePrice.value) - Number(marketPrice.value)) *
      quatityPurchased.value;
    var lossPercentage = (loss / Number(purchasePrice.value)) * 100;
    outputEl.innerText = `The loss is ${loss} and the percentage of loss is ${lossPercentage}`;
  } else if (Number(purchasePrice.value) < Number(marketPrice.value)) {
    var profit =
      (Number(marketPrice.value) - Number(purchasePrice.value)) *
      quatityPurchased.value;
    var profitPercentage = (profit / Number(purchasePrice.value)) * 100;
    outputEl.innerText = `The profit is ${profit} and the percentage of profit is ${profitPercentage}`;
  } else {
    outputEl.innerText = "There is no profit no loss yet.";
  }
}

calculateButton.addEventListener("click", calculateProfitAndLoss);
