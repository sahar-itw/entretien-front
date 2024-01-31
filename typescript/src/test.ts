import { assert } from "./assert";
const arr = [100, 3, 54, 83];

export function test(sort: (arr: number[]) => number[]) {
  const sorted = sort(arr);
  assert("Sorted array exist", sorted !== undefined);
  assert(
    "Sorted array is sorted",
    JSON.stringify(sorted) === JSON.stringify([3, 54, 83, 100])
  );
  assert(
    "Sorted array returns a new array",
    Array.isArray(sorted) && sorted !== arr
  );

  assert(
    "First array is not modified",
    JSON.stringify(arr) === JSON.stringify([100, 3, 54, 83])
  );
}
