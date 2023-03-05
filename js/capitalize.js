const capitalize = (str_text) => {
  if (str_text) {
    const first_letter = str_text.substring(0, 1);
    const others = str_text.substring(1);
    return first_letter.toUpperCase() + others;
  } else {
    return null
  }
};

module.exports = capitalize;
