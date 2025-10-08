const countDifferentChars = (str1, str2) => {
  if (str1.length !== str2.length) {
    return -1;
  }

  let count = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }
  }

  return count;
};

// Exemple:
console.log(countDifferentChars("salut", "salut")); // 0
console.log(countDifferentChars("salut", "savut")); // 1
console.log(countDifferentChars("ana", "ion"));     // 3
console.log(countDifferentChars("test", "teste"));  // -1
