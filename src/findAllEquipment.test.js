const findAllEquipment = require("./findAllEquipment");

describe("All Equipment Types", () => {
  test("Returns all equipment types", () => {
    expect(findAllEquipment()).toHaveReturned();
  });
});
