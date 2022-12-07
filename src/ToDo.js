const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };

  // console.log(todo);
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task + 1}
      // key={todo.id}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className={todo.complete ? "strike" : ""}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
