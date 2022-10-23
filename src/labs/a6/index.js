import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo";

function Assignment6() {
  const color = "blue";
  const dangerous = true;
  return (
    <div>
      <h2>Assignment 6</h2>
          <ConditionalOutput/>
          <Styles/>
          <Classes/>
          <TodoList/>
    </div>
  );
}

export default Assignment6;