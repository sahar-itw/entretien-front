// Goal: find the golden cup -> 🏆

import { assert } from "../assert";
import { title } from "../title";

title("Treasure");

const room = {
  rightDoor: {
    leftDoor: {
      leftDoor: null,
      rightDoor: null,
    },
    rightDoor: {
      leftDoor: null,
      rightDoor: {
        leftDoor: null,
        rightDoor: null,
      },
    },
  },
  leftDoor: {
    leftDoor: {
      leftDoor: null,
      rightDoor: {
        leftDoor: null,
        rightDoor: {
          treasure: "🏆",
          leftDoor: null,
          rightDoor: null,
        },
      },
    },
    rightDoor: {
      rightDoor: null,
      leftDoor: {
        rightDoor: {
          leftDoor: {
            rightDoor: null,
            leftDoor: null,
          },
          rightDoor: {
            rightDoor: {
              leftDoor: null,
              rightDoor: null,
            },
            leftDoor: null,
          },
        },
        leftDoor: null,
      },
    },
  },
};

function findPathToGoldenCup(room: any): any {
  return "";
}

assert(
  "The function works",
  findPathToGoldenCup(room) === "left,left,right,right"
);
