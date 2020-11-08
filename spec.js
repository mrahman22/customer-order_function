const customerOrder = require("./index");
const { expect } = require("chai");

describe("CUSTOMER-ORDER - TESTING ALL VALID ORDERS", () => {
  it("Tests if the customer has specified the number of cassettes required", () => {
    const order = [
      ["cassettes", 4],
      [5, 10000],
      [10, 20000],
      [20, 40000],
      [50, 100000],
    ];
    const actual = customerOrder(order);
    const expected = 4;
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
    expect(order[0][1]).to.equal(expected);
  });
  it("Tests the function when the customer only specifies 1 cassette on the order form", () => {
    const order = [
      ["cassettes", 1],
      [5, 10000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
  });
  it("Tests the function when the customer specifies 2 cassettes on the order form", () => {
    const order = [
      ["cassettes", 2],
      [5, 10000],
      [10, 20000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
  });
  it("Tests the function when the customer specifies 3 cassettes on the order form", () => {
    const order = [
      ["cassettes", 3],
      [5, 10000],
      [10, 20000],
      [20, 40000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
  });
  it("Tests the function when the customer specifies 4 cassettes on the order form", () => {
    const order = [
      ["cassettes", 4],
      [5, 10000],
      [10, 20000],
      [20, 40000],
      [50, 100000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
  });
  it("When the customer does not specify the number of cassettes, the function will assume it is 4", () => {
    const order = [
      [5, 10000],
      [10, 20000],
      [20, 40000],
      [50, 100000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("SUCCESS, order will be sent for packaging");
  });
});

describe("CUSTOMER-ORDER - TESING ALL ORDERS WHERE THE VALUE REQUESTED EXCEEDS CASSETTE CAPACITY", () => {
  it("If the customer requests £20000 in £5 notes this will exceed the capacity of the cassette", () => {
    const order = [
      ["cassettes", 1],
      [5, 20000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The value requested exceeds the capacity of 2000 notes for a cassette");
  });
  it("If the customer requests £40000 in £10 notes this will exceed the capacity of the cassette", () => {
    const order = [
      ["cassettes", 1],
      [10, 40000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The value requested exceeds the capacity of 2000 notes for a cassette");
  });
  it("If the customer request £60000 in £20 notes this will exceed the capacity of the cassette", () => {
    const order = [
      ["cassettes", 2],
      [5, 10000],
      [20, 60000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The value requested exceeds the capacity of 2000 notes for a cassette");
  });
});

describe("CUSTOMER-ORDER - TESING ALL ORDERS WHERE THE VALUE REQUESTED IS TOO LOW TO FILL A CASSETTE", () => {
  it("If the customer requests £20000 in £5 notes this is too low to fill the capacity of the cassette", () => {
    const order = [
      ["cassettes", 1],
      [5, 5000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The total value requested is too low, a cassesste can take upto 2000 notes");
  });
  it("If the customer requests £10000 in £10 notes this is too low to fill the capacity of the cassette", () => {
    const order = [
      ["cassettes", 2],
      [5, 10000],
      [10, 10000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The total value requested is too low, a cassesste can take upto 2000 notes");
  });
  it("If the customer requests £80000 in £50 notes this is too low to fill the capacity of the cassette", () => {
    const order = [
      [5, 10000],
      [10, 20000],
      [20, 40000],
      [50, 80000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("<<<< ERROR, The total value requested is too low, a cassesste can take upto 2000 notes");
  });
});

describe("CUSTOMER-ORDER - TESING ALL ORDERS WHERE INVALID NOTE HAS BEEN REQUESTED", () => {
  it("If the customer requests £3 for a cassette, the function will throw an error as this is an invalid note", () => {
    const order = [
      ["cassettes", 1],
      [3, 10000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal('<<<<< ERROR, Please input a valid note');
  });
  it("If the customer requests £8 for a cassette, the function will throw an error as this is an invalid note", () => {
    const order = [
      ["cassettes", 4],
      [5, 10000],
      [8, 20000],
      [20, 40000],
      [50, 80000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal('<<<<< ERROR, Please input a valid note');
  });
  it("If the customer requests £15 for a cassette, the function will throw an error as this is an invalid note", () => {
    const order = [
      [5, 10000],
      [10, 20000],
      [15, 40000],
      [50, 80000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal('<<<<< ERROR, Please input a valid note');
  });
});







