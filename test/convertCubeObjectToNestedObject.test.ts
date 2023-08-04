import {
  convertCubeArrayToNestedObjectArray,
  convertCubeObjectToNestedObject,
} from "../src/index";

describe("convertCubeObjectToNestedObject", () => {
  it("should convert a cube object to a nested object", () => {
    const originalObject = {
      "Issue.id": "1",
      "Issue.description": "asd",
      "Issue.x": "asd",
      "Issue.y": "asd",
      "Member.id": "a",
      "Member.b": "b",
    };

    const expectedObject = {
      id: "1",
      description: "asd",
      x: "asd",
      y: "asd",
      member: {
        id: "a",
        b: "b",
      },
    };

    const convertedObject = convertCubeObjectToNestedObject(originalObject);
    expect(convertedObject).toEqual(expectedObject);
  });

  it("should handle a mainField parameter correctly", () => {
    const originalObject = {
      "Issue.id": "1",
      "Issue.description": "asd",
      "Issue.x": "asd",
      "Issue.y": "asd",
    };

    const expectedObject = {
      issue: {
        id: "1",
        description: "asd",
        x: "asd",
        y: "asd",
      },
    };

    const convertedObject = convertCubeObjectToNestedObject(
      originalObject,
      "Issue"
    );
    expect(convertedObject).toEqual(expectedObject);
  });
});

describe("convertCubeArrayToNestedObjectArray", () => {
  it("should convert an array of cube objects to an array of nested objects", () => {
    const originalArray = [
      {
        "Issue.id": "1",
        "Issue.description": "asd",
        "Issue.x": "asd",
        "Issue.y": "asd",
        "Member.id": "a",
        "Member.b": "b",
      },
      {
        "Issue.id": "2",
        "Issue.description": "xyz",
        "Issue.x": "xyz",
        "Issue.y": "xyz",
        "Member.id": "c",
        "Member.b": "d",
      },
    ];

    const expectedArray = [
      {
        id: "1",
        description: "asd",
        x: "asd",
        y: "asd",
        member: {
          id: "a",
          b: "b",
        },
      },
      {
        id: "2",
        description: "xyz",
        x: "xyz",
        y: "xyz",
        member: {
          id: "c",
          b: "d",
        },
      },
    ];

    const convertedArray = convertCubeArrayToNestedObjectArray(originalArray);
    expect(convertedArray).toEqual(expectedArray);
  });

  it("should handle a mainField parameter correctly", () => {
    const originalArray = [
      {
        "Issue.id": "1",
        "Issue.description": "asd",
        "Issue.x": "asd",
        "Issue.y": "asd",
      },
      {
        "Task.id": "2",
        "Task.description": "xyz",
        "Task.x": "xyz",
        "Task.y": "xyz",
      },
    ];

    const expectedArray = [
      {
        issue: {
          id: "1",
          description: "asd",
          x: "asd",
          y: "asd",
        },
      },
      {
        task: {
          id: "2",
          description: "xyz",
          x: "xyz",
          y: "xyz",
        },
      },
    ];

    const convertedArray = convertCubeArrayToNestedObjectArray(
      originalArray,
      "Issue"
    );
    expect(convertedArray).toEqual(expectedArray);
  });
});
