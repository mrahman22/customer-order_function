
function customerOrder(arr) {
  let cassettes;
  const cassette_limit = 2000;
  let cassette_request;
  let counter = 0;

  if (arr[0][0] === "cassettes") {
    cassette_request = arr[0][1]
    arr = arr.slice(1);
    cassettes = arr.length;
  } else {
    cassette_request = 4
    cassettes = arr.length;
  }

  for (let i = 0; i <= cassettes; i++) {
    cash_value = arr[i][1];
    note_value = arr[i][0];

    if (
      note_value !== '5' &&
      note_value !== '10' &&
      note_value !== '20' &&
      note_value !== '50'
    ) {
      const selectedNote = arr[i][0];
      return `<<<<< ERROR, £${selectedNote} is not a valid cash note. Only the following cash notes can be accepted; £5, £10, £20 £50.`;
    }
    if (
      cash_value / note_value > cassette_limit &&
      cash_value / note_value !== 4000 &&
      cash_value / note_value !== 6000 &&
      cash_value / note_value !== 8000
    ) {
      return ["ERROR", "The value request exceeds the limit for a cassette"]
    }
    if (cash_value / note_value < cassette_limit) {
      return ["ERROR", "The value requested is too low and does not meet the capacity of 2000 notes for a cassette"];
    }
    if (cash_value / note_value === cassette_limit) {
      counter += 1;
    }
    if (cash_value / note_value === 4000) {
      counter += 2;
    }
    if (cash_value / note_value === 6000) {
      counter += 3;
    }
    if (cash_value / note_value === 8000) {
      counter += 4;
    }
    if(i === arr.length-1) {
      break;
    }
  }
    if(counter === cassette_request) {
      return ["Valid", 'order valid, send for packing'];
    } else {
      return ['ERROR', 'The value requested exceeds the capacity of cassettes requested']
    }
}


module.exports = customerOrder;
