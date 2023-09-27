//Given an array of string, find the longest word and return its length

const words = ["apple", "banana", "cherry", "dauujd", "ijkjdlksdk"];

const longestwordlength = words.reduce((maxlength, item) => {
  const currentLength = item.length;
  return currentLength > maxlength ? currentLength : maxlength;
}, 0);

console.log(longestwordlength);

const longestword = words.reduce((acc, item) => {
  if (item.length > acc.length) {
    acc = item;
  }
  return acc;
});

console.log(longestword);
