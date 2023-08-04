type CubeObject = {
    [key: string]: any;
};
type NestedObject = {
    [key: string]: any;
};
export declare function convertCubeObjectToNestedObject<T extends CubeObject>(originalObject: T, mainField?: string): NestedObject;
export declare function convertCubeArrayToNestedObjectArray<T extends CubeObject>(originalArray: T[], mainField?: string): NestedObject[];
export {};
