import Intro from "/index.js";

const identity = new Intro(
  "Moses",
  "Cook",
  36,
  true,
  160,
  150,
  85,
  183,
  true,
  "Tue Dec 1 1987 (NZDT)"
);

const content = `
    <main>
      <article>
        <h1>Hi Me</h1>
        <ul>
          <li class="myBio identity_firstName">First Name:<span> ${identity.firstName}</span></li>
          <li class="myBio identity_lastName">Last Name:<span> ${identity.lastName}</span></li>
          <li class="myBio identity_age">Age:<span> ${identity.age}</span></li>
          <li class="myBio identity_developer">Developer:<span> ${identity.developer}</span></li>
          <li class="myBio identity_weight">Weight:<span> ${identity.bodySize.currentWeight}</span></li>
          <li class="myBio identity_waist">Waist: <span>${identity.bodySize.currentWaist}</span></li>
          <li class="myBio identity_goalWeight">Goal Weight:<span> ${identity.bodySize.currentGoalWeight}</span></li>
          <li class="myBio identity_currentHeight">Current Height:<span> ${identity.bodySize.currentHeight}</span></li>
          <li class="myBio identity_openness">Openness:<span> ${identity.openness}</span></li>
          <li class="myBio identity_dateAcquired">Date Acquired:<span> ${identity.dateAcquired}</span></li>
        </ul>
      </article>
    </main>
`;

document.body.innerHTML = content;

console.log("This is Me:", identity);
console.log("Date Acquired:", identity.dateAcquired);
console.log("Acquired", identity.myTime());
