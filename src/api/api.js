const todos = [
  { name: 'Prepare presentation', points: 8 },
  { name: 'Finish project', points: 5 },
  { name: 'Review Pull Requests', points: 2 },
  { name: 'Update documentation', points: 3 },
];

export function fetchTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(todos);
    }, 2000)
  });
}
