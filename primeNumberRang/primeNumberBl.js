exports.prime2D = number => {
  primenumber = number => {
    try {
      number == 0 || 1 ? false : true;
      for (let i = 2; i < number; i++) 
      return number % i == 0 ? false : true;
    } catch (e) {
      console.log(e);
    }
  };
  /**
   * arry1: To store the data
   */
  let arr1 = [];
  for (let i = 0; i < number / 100; i++) {
    let arr = [];
    {
      for (let j = i * 100; j <= (i + 1) * 100; j++) {
        if (primenumber(j)) arr.push(j);
      }
    }
    arr1.push(arr);
  }
  arr1.forEach(a => {
    let str = "";
    a.forEach(b => {
      str = str + b + " ";
    });
    console.log("[" + [str] + "]");
  });
};
