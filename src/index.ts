import { lowerCaseFirstLetter } from "./util";

type CubeObject = { [key: string]: any };

type NestedObject = { [key: string]: any };

export function convertCubeObjectToNestedObject<T extends CubeObject>(
  originalObject: T,
  mainField: string = ""
): NestedObject {
  const convertedObject: NestedObject = {};

  for (const key in originalObject) {
    if (originalObject.hasOwnProperty(key)) {
      const keyParts: string[] = key.split(".");
      const value: string = originalObject[key];
      let prefix: string = keyParts[0];
      const name: string = keyParts[1];

      // if there is no prefix, it means it is a main field
      if (!name) {
        convertedObject[key] = value;
        continue;
      }

      if (prefix === mainField) {
        convertedObject[name] = value;
      } else {
        prefix = lowerCaseFirstLetter(prefix);
        if (!convertedObject[prefix]) {
          convertedObject[prefix] = {};
        }
        convertedObject[prefix][name] = value;
      }
    }
  }

  return convertedObject;
}

export function convertCubeArrayToNestedObjectArray<T extends CubeObject>(
  originalArray: T[],
  mainField?: string
): NestedObject[] {
  if (!originalArray) {
    return null;
  }
  if (!originalArray.length) {
    return [];
  }
  const convertedArray: NestedObject[] = originalArray.map(
    (originalObject: T) =>
      convertCubeObjectToNestedObject(originalObject, mainField)
  );
  return convertedArray;
}
