function generateId() {
  // Function to generate a random capital letter
  function getRandomCapitalLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }
  const letters = getRandomCapitalLetter() + getRandomCapitalLetter();
  const numbers = Array.from({ length: 4 }, getRandomNumber).join("");

  const hash = "#";

  const id = hash + letters + numbers;

  return id;
}

export default generateId();
