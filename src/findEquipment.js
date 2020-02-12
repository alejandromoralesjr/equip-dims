const equipment = require("./allEquipment");
Object.defineProperty(Array.prototype, "flat", {
  value: function(depth = 1) {
    return this.reduce(function(flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) && depth > 1
          ? toFlatten.flat(depth - 1)
          : toFlatten
      );
    }, []);
  }
});

const equipmentArray = Object.keys(equipment)
  .map(eq =>
    equipment[eq].dimensions.map(dim => ({
      ...dim,
      weight: equipment[eq].weight,
      alias: equipment[eq].alias
    }))
  )
  .flat();

function findEquipment(
  dimensions = { length: "", width: "", height: "", weight: "" }
) {
  const matched = equipmentArray.filter(equip => {
    return (
      (dimensions.length <= equip.length) &
      (dimensions.width <= equip.width) &
      (dimensions.height <= equip.height) &
      (dimensions.weight <= equip.weight)
    );
  });
  return matched;
}
module.exports = findEquipment;
