import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <>
      {toDoList.map((todo) => {
        return <ToDo todo={todo} handleToggle={handleToggle} />;
      })}
      <button onClick={handleFilter}>Clear History</button>
      <p className="searchComment">select word to clear</p>
    </>
  );
};

export default ToDoList;
