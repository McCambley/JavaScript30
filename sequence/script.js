let keyLog = [];
const secretCode = "secretcode";

window.addEventListener("keydown", (e) => {
  keyLog.push(e.key);
  keyLog.splice(-secretCode.length - 1, keyLog.length - secretCode.length);
  if (keyLog.join("") === secretCode) {
    alert("You did it!!");
  }
});
