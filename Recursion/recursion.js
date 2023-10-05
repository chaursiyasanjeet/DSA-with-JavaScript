function fun(n) {
  if (n == 0) return; //base case
  console.log("fun");
  fun(n - 1);
}
fun(10);

// space - complexity=>O(n)
// time-O(n)
