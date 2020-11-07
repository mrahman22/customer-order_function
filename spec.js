const customerOrder = require("./index");
const { expect } = require("chai");

describe("customerOrder", () => {
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
    expect(actual).to.equal('Order is valid');
    expect(order[0][1]).to.equal(expected);
  });
  it("Tests the function when the customer only specifies 1 cassette on the order form", () => {
    const order = [
      ["cassettes", 1],
      [5, 10000],
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal('Order is valid');
  });
  it("Tests the function when the customer specifies 2 cassette on the order form", () => {
    const order = [
      ["cassettes", 1],
      [5, 10000],
      [10, 20000]
    ];
    const actual = customerOrder(order);
    expect(actual).to.equal('Order is valid');
  });
});