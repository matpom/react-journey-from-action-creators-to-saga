import React from 'react';

export default function TodoTable(props) {
  return <table className="table">
    <thead>
    <tr>
      <th>Task</th>
      <th>Story points</th>
    </tr>
    </thead>
    <tbody>
    {props.todos.map((task) => {
      return <tr key={task.name}>
        <td>{task.name}</td>
        <td>{task.points}</td>
      </tr>
    })}
    </tbody>
  </table>;
}
