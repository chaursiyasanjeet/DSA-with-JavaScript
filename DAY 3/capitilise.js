// Question 6: Capitalize the first letter of each word in the array
const strings = ["hello world", "i am openai", "welcome to javascript"];

const firstLetterCapitalize = strings.map((item) => {
  return item[0].toUpperCase();
});

console.log(firstLetterCapitalize);
