const caesarCipher = (text, shift) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  text = text.toLowerCase();

  let result = "";

  for (let i = 0; i < text.length; i++) {
    const charIndex = alphabet.indexOf(text[i]);

    if (charIndex === -1) {
      result += text[i];
      continue;
    }

    const shiftedIndex = (charIndex + shift) % alphabet.length;
    result += alphabet[shiftedIndex];
  }

  return result;
}

module.exports = caesarCipher;
