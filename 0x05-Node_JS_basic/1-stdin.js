process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  if (name) {
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
