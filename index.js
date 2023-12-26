class Intro {
  constructor(
    firstName,
    lastName,
    age,
    developer,
    weight,
    waist,
    goalWeight,
    height,
    openness,
    dateAcquired
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
    this.dateAcquired = dateAcquired;
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
  myTime() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Intro;
