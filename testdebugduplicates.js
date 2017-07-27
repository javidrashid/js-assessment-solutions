function duplicate(arr) {
    arr = arr.filter (function (value, index, array) { 
        console.log(arr);
        console.log(array);
        return array.indexOf (value) == index;
        console.log(arr);
    });
   console.log(arr);
  }



  duplicate([1,2,3,4,4,4,5,6,]);