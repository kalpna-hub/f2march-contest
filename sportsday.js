// Initializing the score object
let scores = { red: 0, blue: 0, green: 0, yellow: 0 };

function openingCeremony(cb) {
  console.log("Let the games begin");
  setTimeout(() => {
    race100M(scores, cb);
  }, 1000);
}

function race100M(scores, cb) {
  console.log("Race 100M started!");
  setTimeout(() => {
    // Generate random times for each color
    const redTime = Math.floor(Math.random() * 6) + 10;
    const blueTime = Math.floor(Math.random() * 6) + 10;
    const greenTime = Math.floor(Math.random() * 6) + 10;
    const yellowTime = Math.floor(Math.random() * 6) + 10;

    // Find the color with the least time
    let minTime = Math.min(redTime, blueTime, greenTime, yellowTime);
    let secondMinTime = Number.MAX_VALUE;
    for (let color in scores) {
      if (scores[color] === 0) {
        scores[color] = scores[color] + 50;
        console.log(color + " has secured the first position and scored 50 points");
      } else if (scores[color] !== 0 && minTime === redTime && scores[color] < secondMinTime) {
        secondMinTime = scores[color];
      } else if (scores[color] !== 0 && minTime === blueTime && scores[color] < secondMinTime) {
        secondMinTime = scores[color];
      } else if (scores[color] !== 0 && minTime === greenTime && scores[color] < secondMinTime) {
        secondMinTime = scores[color];
      } else if (scores[color] !== 0 && minTime === yellowTime && scores[color] < secondMinTime) {
        secondMinTime = scores[color];
      }
    }

    // Find the color with the second least time
    for (let color in scores) {
      if (scores[color] === secondMinTime) {
        scores[color] = scores[color] + 25;
        console.log(color + " has secured the second position and scored 25 points");
      }
    }

    console.log("Race 100M ended!");
    console.log(scores);
    cb(scores, longJump);
  }, 3000);
}

function longJump(scores, cb) {
  console.log("Long Jump started!");
  setTimeout(() => {
    // Randomly select a color
    const colors = ["red", "yellow", "green", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const color = colors[randomIndex];

    // Update the score for the selected color
    scores[color] = scores[color] + 150;
    console.log(color + " has won the Long Jump and scored 150 points");
    console.log(scores);

    console.log("Long Jump ended!");
    cb(scores, highJump);
  }, 2000);
}

function highJump(scores) {
  console.log("High Jump started!");
  const color = prompt("Which color secured the highest jump?");

  if (color !== null) {
    color.toLowerCase();
    if (color === "red" || color === "yellow" || color === "blue" || color === "green") {
      scores[color] = scores[color] + 100;
      console.log(color + " has secured the highest jump and scored 100 points");
      console.log(scores);
    } else {
      console.log("Event was cancelled!");
    }
