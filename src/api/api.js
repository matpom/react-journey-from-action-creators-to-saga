const todos = [
  { name: 'Prepare presentation', points: 8 },
  { name: 'Finish project', points: 5 },
  { name: 'Review Pull Requests', points: 3 }
];

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(todos);
    }, 3000)
  });
}
