
function customerOrder(arr) {

  
  // A variable for cassettes has been declared but will be assgined a value later, the value will inform us how many times we loop through array 
  let cassettes;

  // cassette limit is the maimum amount of notes a cassette can hold
  const cassette_limit = 2000;
  
  // cassette request determines how many cassettes have been requested
  let cassette_request;

  // The counter will be used to count how many valid cassettes we have. Customer is only allow 4 cassette's per order
  let counter = 0;


  // An array has been declared of all valid notes for orders
  const valid_notes = ['5', '10', '20', '50'];


  /* The first if statement is to determine if the customer has specified the number of cassettes if not it will be set to 4.
     If a cassette input has been provided this will be a set as a value for the cassette_request variable. arr.shift() will
     remove this row from our array as it will not be needed inside the loop. cassettes will then be set to arr.length which
     allows us to indetify how many times we need to loop through. If not cassette input has been provided by the customer then
     the value will be set to 4
  */

  if (arr[0][0] === "cassettes") {
    cassette_request = arr[0][1]
    arr.shift();
    cassettes = arr.length;
  } else {
    cassette_request = 4
    cassettes = arr.length;
  }
  
  for (let i = 0; i < cassettes; i++) {

    // The cash_value variable notes the amount request by the customer and note_value is the type of note requested
    cash_value = arr[i][1];
    note_value = arr[i][0];

    /* The condition belows checks through the order against our array declared about. If the note is invalid our program below
    will return an error advising them an invalid note has been provided.
    */

    if (!valid_notes.includes(note_value)) {
      const selectedNote = arr[i][0];
      return `<<<<< ERROR, £${selectedNote} is not a valid cash note. Only the following cash notes can be accepted; £5, £10, £20 £50.`;
    }

    /* The condition below check the order to establish if any cash values requested exceeds cassette capacity. A valid cassette order
    can be add to the following figures, 2000, 4000, 6000, 80000, if it doesn't the program will return an error advising customer the 
    value requested exceeds cassette capacity 
    */

    if (
      cash_value / note_value > cassette_limit &&
      cash_value / note_value !== 4000 &&
      cash_value / note_value !== 6000 &&
      cash_value / note_value !== 8000
    ) {
      return ["ERROR", "The value request exceeds the limit for a cassette"]
    }
    
    /* The condition below check if the value provide is too low to fill to maxium cassette capacity. If it is less than the cassette_limit
    the program will return an error advising the customer the value requested is too low
    */

    if (cash_value / note_value < cassette_limit) {
      return ["ERROR", "The value requested is too low and does not meet the capacity of 2000 notes for a cassette"];
    }

    /* The conditon below now check the array for valid cassettes. Some of valid orders could be values equaling 2000 which
    amounts to 1 valid cassette. 4000 is equal to 2 valid cassettes, 6000 is equal to 3 valid cassettes and 8000 is equal to 4 valid
    cassettes. The counter is very important is will add the valid cassettes which will be check at the end of the function.
     */


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

    // Once the for loop as reach the end of the cycle we will then break out of the loops so we can evaluate the values.

    if(i === arr.length) {
      break;
    }
  }
   /* The final if statement below will check the counter against the cassette request which was set a the begining. If the counter
   is equal to cassette request then a valid order has been made. If the counter does not equal the cassette_request then the program
   will return an error advising the values exceeds the capacity of cassettes requsted.
    */

    if(counter === cassette_request) {
      return ["Valid", 'order valid, send for packing'];
    } else {
      return ['ERROR', 'The value requested exceeds the capacity of cassettes requested']
    }
}


module.exports = customerOrder;
