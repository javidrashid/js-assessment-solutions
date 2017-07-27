function remove(arr, item) {
    arr.forEach(function(elem, i) {
      var index = arr.indexOf(item)  
        if(index > -1) {
            arr.splice(index, 1);
        }
    })
    return arr;
  }

  remove([1,2,3,4,5], 3);