function loveChecker() {
  var yourName = document.getElementById("your_name").value;
  var crushName = document.getElementById("crush_name").value;
  var n = Math.random();
  n = n * 100 + 1;
  var lovePercentage = Math.floor(n);
  showResult(
    yourName + "❤️" + crushName + "\nlove percentage:" + lovePercentage + "%"
  );
}
function showResult(message) {
  var box = document.getElementById("resultBox");
  var text = document.getElementById("resultText");
  text.innerText = message;
  box.style.display = "block";
  document.querySelector("#resultBox .close").onclick = function () {
    document.getElementById("resultBox").style.display = "none";
  };
}
