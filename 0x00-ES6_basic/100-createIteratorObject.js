export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flatMap((department) => department);

  const iterator = {
    [Symbol.iterator]() {
      let index = 0;

      return {
        next() {
          if (index < employees.length) {
            const value = employees[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };

  return iterator;
}
