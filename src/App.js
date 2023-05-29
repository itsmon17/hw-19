import "./App.css";
import { Provider, useSelector } from "react-redux";
import Login from "./auth/Login";
import CalculatorApp from "./components/CalculatorApp";
import store from "./store";

function App() {
  const { isAuthorization } = useSelector((state) => state.user);
  console.log(isAuthorization);
  return (
    <>
      {!isAuthorization ? (
        <Login />
      ) : (
        <Provider store={store}>
          <CalculatorApp />
        </Provider>
      )}
    </>
  );
}

export default App;
