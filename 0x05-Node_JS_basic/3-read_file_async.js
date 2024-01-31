const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = fileContent.split('\n').filter(line => line.trim() !== '');

      // Skip the header line
      lines.shift();

      const students = lines.map(line => {
        const [firstname, , , field] = line.split(',');
        return { firstname, field };
      });

      const totalStudents = students.length;
      console.log(`Number of students: ${totalStudents}`);

      const fields = {};
      students.forEach(student => {
        const { firstname, field } = student;
        if (fields[field]) {
          fields[field].count++;
          fields[field].list.push(firstname);
        } else {
          fields[field] = {
            count: 1,
            list: [firstname]
          };
        }
      });

      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field].count}. List: ${fields[field].list.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
