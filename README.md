# Equip-dims

A package to calculate the approriate transportation equipment type based on dimensions provided.

## Methods

#### `findEquipment(option: Object)`

Required `option: Object`

```
option = {
  length: Int!
  width: Int!
  height: Int!
  weight: Int!
}
```

Returns an array of equipment types.

#### `findAllEquipment()`

Returns an array of all equipment types.
