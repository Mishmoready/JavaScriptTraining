// Creating a Object

const intro = {
  firstName: "Moses",
  lastName: "Cook",
  age: 36,
  developer: true,
  bodySize: {
    weight: 160,
    waist: 150,
    goalWeight: 85,
    height: 183,
  },
  openness: false,
  toggleOpenness: function (openStatus) {
    this.openness = openStatus;
  },
  bodySizeUpdate: function (newWeight, newWaist, newGoalWeight, newHeight) {
    (this.bodySize.weight = newWeight),
      (this.bodySize.waist = newWaist),
      (this.bodySize.goalWeight = newGoalWeight),
      (this.bodySize.height = newHeight);
  },
};

console.log("This is me:", intro);
console.log("I am", intro.firstName);
console.log("I am", intro.age, "years old");

console.log("Old weight:", intro.bodySize.weight);

intro.bodySizeUpdate(120, 100, 85, 183);

console.log("New Weight:", intro.bodySize.weight);
console.log("My Height is still:", intro.bodySize.height, "cm");
