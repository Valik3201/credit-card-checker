// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:
const validateCred = (cardNum) => {
  let sum = 0;

  for (let i = cardNum.length - 1; i >= 0; i--) {
    let currentNum = cardNum[i];

    if ((cardNum.length - 1 - i) % 2 === 1) {
      currentNum *= 2;
      if (currentNum > 9) {
        currentNum -= 9;
      }
    }
    sum += currentNum;
  }
  let result = sum % 10 === 0;

  return result;
};

const isValid = validateCred(mystery1);
console.log(isValid ? "Card is valid." : "Card is invalid.");

const findInvalidCards = (cardNumbers) => {
  let invalidCards = [];

  for (let i = 0; i < cardNumbers.length; i++) {
    if (!validateCred(cardNumbers[i])) {
      invalidCards.push(cardNumbers[i]);
    }
  }
  return invalidCards;
};

const invalidCards = findInvalidCards(batch);
console.log("Invalid Cards:", invalidCards);

const idInvalidCardCompanies = (invalidCards) => {
  const companies = [];

  for (let i = 0; i < invalidCards.length; i++) {
    let company;

    switch (invalidCards[i][0]) {
      case 3:
        company = "Amex (American Express)";
        break;
      case 4:
        company = "Visa";
        break;
      case 5:
        company = "Mastercard";
        break;
      case 6:
        company = "Discover";
        break;
      default:
        console.log(`Company not found. First digit ${invalidCards[i][0]}`);
    }

    if (company && !companies.includes(company)) {
      companies.push(company);
    }
  }

  return companies;
};

const companies = idInvalidCardCompanies(invalidCards);
console.log("Companies:", companies);

const fixInvalidCards = (invalidCards) => {
  const fixedCards = [];

  for (let i = 0; i < invalidCards.length; i++) {
    let card = [...invalidCards[i]];

    for (let j = card.length - 2; j >= 0; j -= 2) {
      let doubledDigit = card[j] * 2;
      card[j] = doubledDigit > 9 ? doubledDigit - 9 : doubledDigit;
    }

    let sum = card.reduce((acc, num) => acc + num, 0);
    let checkDigit = (Math.ceil(sum / 10) * 10 - sum) % 10;
    card[card.length - 1] = checkDigit;

    fixedCards.push(card);
  }

  return fixedCards;
};

const fixedCards = fixInvalidCards(invalidCards);
console.log("Fixed Cards:", fixedCards);