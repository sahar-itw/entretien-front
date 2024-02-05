// Goal: find the golden cup -> 🏆

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

console.assert(findPathToGoldenCup(room) === "left,left,right,right");
