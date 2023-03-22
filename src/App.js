import { Button } from "antd";
import { useState } from "react";
import Inputs from "./components/Inputs";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
function App() {
  const [prayTime, setPrayTime] = useState({
    region: "",
    month: "",
    day: "",
  });
  const [data, setData] = useState({});
  const { region, month, day } = prayTime;

  async function fetcher() {
    const res = await fetch(
      `https://islomapi.uz/api/daily?region=${region.trim()}&month=${month}&day=${day.trim()}`
    );
    const datas = await res.json();
    setData(datas);
  }

  console.log(data);
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex justify-content-between">
        <div className="box col-3">
          <Inputs prayTime={prayTime} setPrayTime={setPrayTime} />
          <Button className="mb-3" onClick={fetcher}>Namoz vaqtini ko'rish</Button>
          </div>
          <div className="col-9" >
          <Card {...data} />
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
