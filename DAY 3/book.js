//Filter out books published before the year 2000 and return their title
const books = [
  { title: "Book 1", year: 1998 },
  { title: "Book 2", year: 2003 },
  { title: "Book 3", year: 1995 },
  { title: "Book 4", year: 2001 },
];

const bookbefore2000 = books
  .filter((item) => {
    return item.year < 2000;
  })
  .map((item) => item.title);

console.log(bookbefore2000);
