// Creating Classes

class intro {
  constructor(
    firstName,
    lastName,
    age,
    developer,
    weight,
    waist,
    goalWeight,
    height,
    openness
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.developer = developer;
    this.bodySize = {
      currentWeight: weight,
      currentWaist: waist,
      currentGoalWeight: goalWeight,
      currentHeight: height,
    };
    this.openness = openness;
  }
  toggleOpenness(openStatus) {
    this.openness = openStatus;
  }
  bodySizeUpdate(newWeight, newWaist, newGoalWeight, newHeight) {
    this.bodySize.weight = newWeight;
    this.bodySize.waist = newWaist;
    this.bodySize.goalWeight = newGoalWeight;
    this.bodySize.height = newHeight;
  }
}
