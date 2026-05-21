const scores = [1, 2, 3, 4, 5];

scores.forEach((e) => {
  e *= e;
  console.log(e);
});

const doubledScores = scores.map((num) => num * 2);
console.log(doubledScores);
