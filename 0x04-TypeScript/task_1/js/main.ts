type Teacher = {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Allows adding any other attribute dynamically
  };
  
  const createTeacher = (teacher: Teacher): Teacher => {
    return teacher;
  };
  
  const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
console.log(createTeacher(teacher3));