function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
    // Only change code above this line
     for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        product *= arr[i][j];
      }
    }
  
    return product;
  }
  
  let product = multiplyAll([[1,2],[3,4],[5,6,7]]);
  
  console.log(product);