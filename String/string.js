//string in JS

let firstName = "sanjeet";

//length of a string
console.log(firstName.length);

//Acessing the string element
console.log(firstName.charAt(1));
console.log(firstName[0]);

//return ascii value
console.log(firstName.charCodeAt(2));

// "S" is present in string or not
console.log(firstName.includes("k"));
console.log(firstName.indexOf(" "));

//find the last index of a
console.log(firstName.lastIndexOf("a"));

const anotherName = "sanjeet kumar";
console.log(firstName.localeCompare(anotherName));

//replace string doesn't change the original string
const str = "sanjeet is best MERN stack developer.sanjeet is Best developer";
console.log(str.replace("sanjeet", "sanjeet kumar"));
console.log(str.replaceAll("sanjeet", "sanjeet kumar"));

console.log(str.substring(8, 12)); //exclude last
//take substring from last second argument how many you wan to exclude
console.log(str.slice(-10, -2));

console.log(str.search("sanjeet"));

//split string method=>return the array
console.log(str.split(" "));

const substring = str.split(" ");
console.log(substring.join(" "));

//first only
console.log(str.startsWith("sanjeet"));
console.log(str.endsWith("developer"));

//string trim method
const str2 = "      sddffde  ";
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

//uppercase
const str3 = "sanjeet jknkm";
console.log(str3.toLocaleUpperCase());

//differnce b/w toLowerCase vs toLocaleLowerCase

//convert into string
const num = 13233;
console.log(num, num.toString());

//convert object to string
const obj = {
  name: "sanjeet",
  course: "DSA with JS",
};
console.log(obj, JSON.stringify(obj));
const objk = JSON.stringify(obj);
console.log(objk, JSON.parse(objk));

//concat two string
const lastName = " kumar";
console.log(firstName + lastName + " best");
console.log(firstName.concat(lastName, " is a", " best"));
