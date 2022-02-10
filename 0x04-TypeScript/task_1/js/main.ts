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