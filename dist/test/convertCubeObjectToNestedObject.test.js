"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe("convertCubeObjectToNestedObject", function () {
    it("should convert a cube object to a nested object", function () {
        var originalObject = {
            "Issue.id": "1",
            "Issue.description": "asd",
            "Issue.x": "asd",
            "Issue.y": "asd",
            "Member.id": "a",
            "Member.b": "b",
        };
        var expectedObject = {
            id: "1",
            description: "asd",
            x: "asd",
            y: "asd",
            member: {
                id: "a",
                b: "b",
            },
        };
        var convertedObject = (0, index_1.convertCubeObjectToNestedObject)(originalObject, "Issue");
        expect(convertedObject).toEqual(expectedObject);
    });
    it("should handle a mainField parameter correctly", function () {
        var originalObject = {
            "Issue.id": "1",
            "Issue.description": "asd",
            "Issue.x": "asd",
            "Issue.y": "asd",
        };
        var expectedObject = {
            issue: {
                id: "1",
                description: "asd",
                x: "asd",
                y: "asd",
            },
        };
        var convertedObject = (0, index_1.convertCubeObjectToNestedObject)(originalObject);
        expect(convertedObject).toEqual(expectedObject);
    });
});
describe("convertCubeArrayToNestedObjectArray", function () {
    it("should convert an array of cube objects to an array of nested objects", function () {
        var originalArray = [
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
        var expectedArray = [
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
        var convertedArray = (0, index_1.convertCubeArrayToNestedObjectArray)(originalArray, "Issue");
        expect(convertedArray).toEqual(expectedArray);
    });
    it("should handle a mainField parameter correctly", function () {
        var originalArray = [
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
        var expectedArray = [
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
        var convertedArray = (0, index_1.convertCubeArrayToNestedObjectArray)(originalArray);
        expect(convertedArray).toEqual(expectedArray);
    });
});
//# sourceMappingURL=convertCubeObjectToNestedObject.test.js.map