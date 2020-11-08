


  
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
        return '<<<<< ERROR, Please input a valid note';
      }
      if (arr[i][1] / arr[i][0] > 2000) {

        return "<<<< ERROR, The value requested exceeds the capacity of 2000 notes for a cassette";
      }
      if (arr[i][1] / arr[i][0] < 2000) {
        return "<<<< ERROR, The total value requested is too low, a cassesste can take upto 2000 notes";
      }
      if (arr[i][1] / arr[i][0] === 2000) {
        order.push(arr[i]);
      }
      if (order.length === cassettes) {
        return "SUCCESS, order will be sent for packaging";
      }
    }
  }
  
  module.exports = customerOrder