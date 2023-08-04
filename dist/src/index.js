"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCubeArrayToNestedObjectArray = exports.convertCubeObjectToNestedObject = void 0;
var util_1 = require("./util");
function convertCubeObjectToNestedObject(originalObject, mainField) {
    if (mainField === void 0) { mainField = ""; }
    var convertedObject = {};
    for (var key in originalObject) {
        if (originalObject.hasOwnProperty(key)) {
            var keyParts = key.split(".");
            var value = originalObject[key];
            var prefix = keyParts[0];
            var name_1 = keyParts[1];
            // if there is no prefix, it means it is a main field
            if (!name_1) {
                convertedObject[key] = value;
                continue;
            }
            if (prefix === mainField) {
                convertedObject[name_1] = value;
            }
            else {
                prefix = (0, util_1.lowerCaseFirstLetter)(prefix);
                if (!convertedObject[prefix]) {
                    convertedObject[prefix] = {};
                }
                convertedObject[prefix][name_1] = value;
            }
        }
    }
    return convertedObject;
}
exports.convertCubeObjectToNestedObject = convertCubeObjectToNestedObject;
function convertCubeArrayToNestedObjectArray(originalArray, mainField) {
    if (!originalArray) {
        return null;
    }
    if (!originalArray.length) {
        return [];
    }
    var convertedArray = originalArray.map(function (originalObject) {
        return convertCubeObjectToNestedObject(originalObject, mainField);
    });
    return convertedArray;
}
exports.convertCubeArrayToNestedObjectArray = convertCubeArrayToNestedObjectArray;
//# sourceMappingURL=index.js.map