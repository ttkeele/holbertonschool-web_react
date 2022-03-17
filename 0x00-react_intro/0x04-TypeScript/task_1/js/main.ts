interface Teacher {
readonly firstName: string,
readonly lastName: string,
fullTimeEmployee: boolean,
yearsOfExperience?: number,
location: string,
[property: string]: any;
};

// task 2
interface Directors extends Teacher {
  numberOfReports: number,
};

// task3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
  firstName: string;
  lastName: string;
}
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workonHomework() {
    return 'Curently working';
  }
  displayName() {
    return this.firstName;
  }
}