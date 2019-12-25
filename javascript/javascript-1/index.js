function sum(n) {
  let localSum = 0;

  function f(n) {
    if (n === undefined) return localSum;
    localSum += n;
    return f;
  }

  f.toString = function() {
   return localSum;
  };
  return f(n);
}