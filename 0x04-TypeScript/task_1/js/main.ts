interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any; 
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const createDirector = (director: Directors): Directors => {
  return director;
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(createDirector(director1));

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const fullName = `${firstLetter}. ${lastName}`;
  return fullName;
};

const teacherName = printTeacher('John', 'Doe');
console.log(teacherName);

interface Person {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface extends Person {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework()); 
console.log(student.displayName()); 