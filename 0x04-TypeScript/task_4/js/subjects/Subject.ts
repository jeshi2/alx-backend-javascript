namespace Subjects {
    export class Subject {
      protected _teacher: Teacher;
  
      setTeacher(teacher: Teacher): void {
        this._teacher = teacher;
      }
    }
  }