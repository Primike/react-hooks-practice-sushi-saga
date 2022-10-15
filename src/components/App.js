import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(() => {
    fetchSushi()
  }, [])

  function fetchSushi() {
    fetch(`http://localhost:3001/sushis`)
      .then(response => response.json())
      .then(json => setSushi(json))
  }

  function changeMoney(bool, sushiPrice) {
    let newPlates = [...plates]
    
    if(bool === true) {
      setMoney(money - sushiPrice)
      newPlates.push(1)
      setPlates(newPlates)
    } else {
      setMoney(money + sushiPrice)
      newPlates.pop()
      setPlates(newPlates)
    }
  }

  return (
    <div className="app">
      <SushiContainer sushi = {sushi} changeMoney = {changeMoney} money = {money}/>
      <Table money = {money} plates = {plates}/>
    </div>
  );
}

export default App;
