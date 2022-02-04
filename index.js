const max = (a, b) => {
  return a > b ? a : b;
};

const isLandscape = (width, height) => {
  return width > height;
};

const fizzBuzz = (input) => {
  if (typeof input !== 'number') return 'Not a Number';
  if (input % 3 == 0 && input % 5 == 0) return 'FizzBuzz';
  if (input % 3 == 0) return 'Fizz';
  if (input % 5 == 0) return 'Buzz';
  return input;
};

const checkSpeed = (speed) => {
  const speedLimit = 70,
    kmPerPoint = 5,
    pointLimit = 12;
  if (speed < speedLimit + kmPerPoint) return 'Ok';
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  return points >= pointLimit ? 'License Suspended' : 'Points: ' + points;
};

const showNumbers = (limit) => {
  console.log('showNumbers: ');
  for (let i = 1; i <= limit; i++) {
    console.log(i, i % 2 === 0 ? `"EVEN"` : `"ODD"`);
  }
};

const countTruthy = (array) => {
  let counter = 0;
  for (let value of array) if (value) counter++;
  return counter;
};

const showStringProperties = (object) => {
  console.log('showStringProperties: ');
  for (let key in object)
    if (typeof object[key] === 'string') console.log(`${key}: ${object[key]}`);
};

const sumOf3and5Multiples = (limit) => {
  let sum = 0;
  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;
  return sum;
};

const calculateAverage = (array) => {
  return array.reduce((sum, curr) => sum + curr) / array.length;
};

const calculateGrade = (marks) => {
  let avg = calculateAverage(marks);
  if (avg < 60) return 'F';
  if (avg < 70) return 'D';
  if (avg < 80) return 'C';
  if (avg < 90) return 'B';
  if (avg <= 100) return 'A';
  return 'You definately have a typo!';
};

const showStars = (num) => {
  console.log('showStars:');
  let pattern = '';
  for (let i = 1; i <= num; i++) {
    pattern += '*';
    console.log(pattern);
  }
};

const isPrime = (number) => {
  for (let i = 2; i < number; i++) if (number % i === 0) return false;
  return true;
};

const showPrimes = (limit) => {
  console.log('showPrimes:');
  for (let i = 2; i <= limit; i++) if (isPrime(i)) console.log(i);
};

//////////////////////////////////////////////////////////////////////

console.log('Max: ', max(15, 60));
console.log('isLandscape: ', isLandscape(100, 20));
console.log('fizzBuzz: ', fizzBuzz(15));
console.log('checkSpeed: ', checkSpeed(120));
showNumbers(10);
console.log(
  'countTruthy: ',
  countTruthy([1, '', null, 2, undefined, 'banana', 5, true])
);
showStringProperties({
  title: 'Avatar',
  releaseYear: 2005,
  rating: 9.4,
  director: 'Peter Jackson',
});
console.log('sumOf3and5Multiples: ', sumOf3and5Multiples(10));
console.log('calculateGrade: ', calculateGrade([80, 90, 90, 90]));
showStars(5);
showPrimes(15);
