// const arr = [
//     ["cassettes", 3],
//     [5, 10000],
//     [10, 20000],
//     [20, 40000],
//     // [50, 100000],
//   ];
  
  function customerOrder(arr) {
    let cassettes;
    if (arr[0][0] === "cassettes") {
      cassettes = arr[0][1];
      arr = arr.slice(1);
    } else {
      cassettes = 4;
    }
    
     
    let order = [];
  
    for (let i = 0; i <= cassettes; i++) {
        if(arr[i][0] !== 5 && arr[i][0] !== 10 && arr[i][0] !== 20 && arr[i][0] !== 50) {
          return 'Please input a valid note';
      }
      if (arr[i][1] / arr[i][0] > 2000) {
        return "The total value is too high requested exceeds capacity of 2000 notes";
      }
      if (arr[i][1] / arr[i][0] < 2000) {
        return "The the total value is too low, a cassesste needs to filled to 2000 notes";
      }
      if (arr[i][1] / arr[i][0] === 2000) {
        order.push(arr[i]);
      }
      if (order.length === cassettes) {
        return "Order is valid";
      }
    }
  }
  
//   console.log(customerOrder(arr));
  

  module.exports = customerOrder