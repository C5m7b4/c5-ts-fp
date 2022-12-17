import { BinarySearch } from "../../SimpleImplementations/BinarySearch";

describe("binary search", () => {
  test("should find object in array", () => {
    const people = [
      {
        id: 1,
        name: "mike",
      },
      {
        id: 2,
        name: "billy",
      },
      {
        id: 3,
        name: "sam",
      },
      {
        id: 4,
        name: "terry",
      },
    ];
    expect(BinarySearch(people, 3, "id")).toEqual({ id: 3, name: "sam" });
    expect(BinarySearch(people, 1, "id")).toEqual({ id: 1, name: "mike" });
    expect(BinarySearch(people, 12, "id")).toBeNull();
  });
});
