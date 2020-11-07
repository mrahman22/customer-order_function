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
    expect(actual).to.equal("Order is valid");
    expect(order[0][1]).to.equal(expected);
  });
  it("Tests the function when the customer only specifies 1 cassette on the order form", () => {
    const order = [
      ["cassettes", 1],
      [5, 10000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("Order is valid");
  });
  it("Tests the function when the customer specifies 2 cassettes on the order form", () => {
    const order = [
      ["cassettes", 2],
      [5, 10000],
      [10, 20000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("Order is valid");
  });
  it("Tests the function when the customer specifies 3 cassettes on the order form", () => {
    const order = [
      ["cassettes", 3],
      [5, 10000],
      [10, 20000],
      [20, 40000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("Order is valid");
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
    expect(actual).to.equal("Order is valid");
  });
  it("When the customer does not specify the number of cassettes, the function will assume it is 4", () => {
    const order = [
      [5, 10000],
      [10, 20000],
      [20, 40000],
      [50, 100000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("Order is valid");
  });
});

describe("CUSTOMER ORDER - TESING ALL ORDERS WHERE THE VALUE REQUESTED IS EXCEEDS CASSETTE CAPACITY", () => {
  it("If the customer request £20000 in £5 notes this will excess capacity of the cassette", () => {
    const order = [
      ["cassettes", 1],
      [5, 20000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal("The total value is too high requested exceeds capacity of 2000 notes");
  });
});
