### Challenge Project: Credit Card Checker

**Description:**

The "Credit Card Checker" project is a coding challenge from **[Codecademy](https://github.com/Codecademy)**. The purpose of this project is to implement a credit card validation system using the Luhn algorithm. The algorithm checks whether a given credit card number is valid or not.

**Project Structure:**

- **validateCred():**
  - Function to validate a credit card number using the Luhn algorithm.
  - Returns `true` if the credit card number is valid, and `false` otherwise.
  - Does not mutate the original array.

- **findInvalidCards():**
  - Function to identify invalid credit card numbers from a nested array of credit card numbers.
  - Uses `validateCred()` to check the validity of each card number.
  - Returns a nested array of invalid credit card numbers.

- **idInvalidCardCompanies():**
  - Function to identify the companies that may have issued the faulty credit card numbers.
  - Returns an array of unique company names corresponding to invalid cards.

- **fixInvalidCards():**
  - Function to fix invalid credit card numbers by applying the Luhn algorithm.
  - Returns an array of fixed credit card numbers.

**Usage:**

```javascript
// Example: Validate a credit card number
const isValid = validateCred([4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5]);
console.log(isValid ? "Card is valid" : "Card is invalid");

// Example: Find invalid cards in a nested array
const invalidCards = findInvalidCards([[...], [...], ...]);
console.log(invalidCards);

// Example: Identify companies with invalid cards
const invalidCompanies = idInvalidCardCompanies(invalidCards);
console.log(invalidCompanies);

// Example: Fix invalid cards
const fixedCards = fixInvalidCards(invalidCards);
console.log(fixedCards);
```

**Luhn Algorithm:**

The Luhn algorithm is a mathematical formula used to validate certain identification numbers, such as credit card numbers. The steps of the algorithm include doubling every other digit, subtracting 9 from numbers greater than 9, summing up all the digits, and checking if the sum modulo 10 is 0.

For a visual representation of the Luhn algorithm, refer to the Codecademy diagram [here](https://content.codecademy.com/PRO/independent-practice-projects/credit-card-checker/diagrams/cc%20validator%20diagram%202.svg).

Feel free to contribute, report issues, or suggest improvements. Happy coding!
