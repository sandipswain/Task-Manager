// // paramas "<name of the testcase>, <function>"
// test("Hello World!", () => {});

// test("This should fail", () => {
//   throw new Error("Failure");
// });

const { calculate } = require("../src/math");

test("Should calculate total with tip", () => {
  const total = calculate(10, 0.3);

  if (total !== 13) {
    throw new Error("Total tip should be 13. Get " + total);
  }
});
