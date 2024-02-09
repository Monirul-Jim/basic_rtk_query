import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add Todo</button>
        <button>Filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl  space-y-3 p-5">
        {/* <div className="bg-white p-3">
          <p className="flex p-5 rounded-md text-2xl font-bold justify-center items-center">
            There is no task pending
          </p>{" "}
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg">
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
