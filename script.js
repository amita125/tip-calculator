function tipCalculator() {
  var bill = prompt("Please enter your bill amount");

  var rate = prompt("Please rate the service ");

  var total = 0;

  if (bill != null) {
    total = Number(bill) + (Number(rate) / 100) * Number(bill);

    document.getElementById("bill").innerHTML =
      "Your Bill  : £" +
      bill +
      " " +
      "Your tip rate : " +
      rate +
      "% " +
      "And your total bill : £" +
      total;
  }
}
