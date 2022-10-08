import axios from "axios";
import { useEffect, useState } from "react";
import "./App.scss";
import Advice from "./components/advice/Advice";

const api_url = "https://api.adviceslip.com/advice";

function App() {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    fetchAdvice();
  }, []);

  function fetchAdvice() {
    axios.get(api_url).then((response) => {
      setAdvice(response.data.slip);
    });
  }

  return (
    <div className="app">
      <Advice
        advice={advice}
        onFetchAdvice={fetchAdvice}
        nextAdviceInterval={2000} // There's a 2sec cache on the api, if another request is made in less than 2sec it'll return the same advice
      />
    </div>
  );
}

export default App;
