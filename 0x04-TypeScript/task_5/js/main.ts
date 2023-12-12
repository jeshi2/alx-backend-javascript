interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MajorCredits',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'MinorCredits',
  };
}


const subject1: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const subject2: MajorCredits = { credits: 4, brand: 'MajorCredits' };

const resultMajor = sumMajorCredits(subject1, subject2);
console.log('Sum of Major Credits:', resultMajor);

const subject3: MinorCredits = { credits: 2, brand: 'MinorCredits' };
const subject4: MinorCredits = { credits: 1, brand: 'MinorCredits' };

const resultMinor = sumMinorCredits(subject3, subject4);
console.log('Sum of Minor Credits:', resultMinor);