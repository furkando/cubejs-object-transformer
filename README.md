# Cube.js Object to JS Object

[![npm package](https://img.shields.io/badge/npm%20i-cubejs--object--transformer-brightgreen)](https://www.npmjs.com/package/cubejs-object-transformer)
[![npm version](https://img.shields.io/npm/v/cubejs-object-transformer.svg?style=flat-square)](https://www.npmjs.com/package/cubejs-object-transformer)
[![Actions Status](https://github.com/furkandoganktf/cubejs-object-transformer/workflows/CI/badge.svg)](https://github.com/furkandoganktf/cubejs-object-transformer/actions)
[![license](https://img.shields.io/github/license/furkandoganktf/cubejs-object-transformer.svg?style=flat-square)](https://github.com/furkandoganktf/cubejs-object-transformer/blob/main/LICENSE)

This package provides a utility function to transform a Cube.js object into a nested JavaScript object.

## Installation

To install the package, you can use npm or yarn:

```bash
npm install cubejs-object-transformer
```

or

```bash
yarn add cubejs-object-transformer
```

## Usage

### Example

```typescript
import {
  convertCubeObjectToNestedObject,
  convertCubeArrayToNestedObjectArray,
} from "cubejs-object-transformer";

const originalObject = {
  "Issue.id": "1",
  "Issue.description": "asd",
  "Issue.x": "asd",
  "Issue.y": "asd",
  "Member.id": "a",
  "Member.b": "b",
};

const convertedObject = convertCubeObjectToNestedObject(
  originalObject,
  "Issue"
);
console.log(convertedObject);
/*
Output:
{
  id: '1',
  description: 'asd',
  x: 'asd',
  y: 'asd',
  member: {
    id: 'a',
    b: 'b',
  },
}
*/

const originalArray = [originalObject];
const convertedArray = convertCubeArrayToNestedObjectArray(
  originalArray,
  "Issue"
);
console.log(convertedArray);
/*
Output:
[
  {
    id: '1',
    description: 'asd',
    x: 'asd',
    y: 'asd',
    member: {
      id: 'a',
      b: 'b',
    },
  },
]
*/
```

## API

### `convertCubeObjectToNestedObject<T extends CubeObject>(originalObject: T, mainField?: string): NestedObject`

This function takes a Cube.js object `originalObject` and converts it into a nested JavaScript object. You can also provide an optional `mainField` parameter to specify the main field that should be used to group the properties on higher level.

### `convertCubeArrayToNestedObjectArray<T extends CubeObject>(originalArray: T[], mainField?: string): NestedObject[]`

This function takes an array of Cube.js objects `originalArray` and converts each object into a nested JavaScript object. You can also provide an optional `mainField` parameter to specify the main field that should be used to group the properties on higher level.

## License

This package is licensed under the [MIT License](https://github.com/furkandoganktf/cubejs-object-transformer/blob/main/LICENSE).

## Contributions

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a GitHub issue or submit a pull request.
