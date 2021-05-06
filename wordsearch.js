const wordSearch = (letters, word) => {

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = [];

  if (letters.length === 0) {
    return false;
  }

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let character of letters) {
    for (let char = 0; char < character.length; char++) {
      verticalJoin.push(character[char]);
    }
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;

};

module.exports = wordSearch;
