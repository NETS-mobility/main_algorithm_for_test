import "./App.css";
import Algo from "./algorithm/algo";

const App = () => {
  return (
    <button type="button" onClick={() => Algo()}>
      main algorithm 실행하기
    </button>
  );
};

export default App;
