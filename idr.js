// QUESTION
// cards = [2, 3, 5, 4, "John", "King", "Queen", "Queen"];

const cards = [2, 3, 5, 4, "John", "King", "Queen", "Queen"];

const ranks = {
  John: 100,
  King: 101,
  Queen: 102,
};

function getValue(val) {
  return typeof val === "number" ? val : ranks[val];
}

const result = cards.sort((a, b) => getSortValue(a) - getSortValue(b));

console.log(result);

// THE FINAL SOLUTION

// function sortCards(cards) {
//   const ranks = {
//     John: 100,
//     King: 101,
//     Queen: 102,
//   };

//   function getValue(val) {
//     return typeof val === "number" ? val : ranks[val];
//   }

//   return cards.sort((a, b) => getSortValue(a) - getSortValue(b));
// }

// const cards = [2, 2, 3, 5, 4, "John", "King", "Queen"];
// const result = sortCards(cards);
// console.log(result);
