import { useAppSelector } from "@/redux/features/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl   p-5">
        {/* <div className="bg-white p-3">
          <p className="flex p-5 rounded-md text-2xl font-bold justify-center items-center">
            There is no task pending
          </p>{" "}
        </div> */}
        <div className="bg-white p-5 w-full h-full space-y-3 rounded-lg">
          {todos?.map((item) => (
            <TodoCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
