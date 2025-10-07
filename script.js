const textInput = document.querySelector("#textInput");
const charCount = document.querySelector("#charCount");
const charRemaining = document.querySelector("#charRemaining");
const maxChar = 200;

textInput.addEventListener("input", () => {
  let charNumber = textInput.value.length;

  // Limit input instead of showing alert
  if (charNumber > maxChar) {
    textInput.value = textInput.value.substring(0, maxChar);
    charNumber = maxChar;
  }

  updateCount(charNumber);
  updateRemaining(charNumber);
});

function updateCount(count) {
  charCount.textContent = count;
}

function updateRemaining(count) {
  const remaining = maxChar - count;
  charRemaining.textContent = remaining;

  // Optional: change color when close to limit
  charRemaining.style.color = remaining <= 20 ? "red" : "black";
}
