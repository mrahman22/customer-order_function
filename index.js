


  
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
        const selectedNote = arr[i][0];
        return `<<<<< ERROR, £${selectedNote} is not a valid cash note. Only the following cash notes can be accepted; £5, £10, £20 £50.`;
      }
      if (arr[i][1] / arr[i][0] > 2000) {
        const notes = arr[i][1] / arr[i][0] - 2000;
        const selectedNote = arr[i][0];
        const value = arr[i][0] * 2000;
        return `<<<< ERROR, The value requested exceeds the capacity of 2000 notes for a cassette by ${notes} notes. The total value you can request for £${selectedNote} is £${value}`;
      }
      if (arr[i][1] / arr[i][0] < 2000) {
        return "<<<< ERROR, The total value requested is too low, a cassesste can take upto 2000 notes"
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