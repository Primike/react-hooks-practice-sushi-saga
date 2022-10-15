import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, changeMoney, money}) {
  const [number, setNumber] = useState(0)

  let list = sushi.map(i => {
    return (
      <Sushi key = {i.id} sushi = {i} changeMoney = {changeMoney} money = {money}/>
    )
  })

  function changeSushi() {
    if(sushi[number + 1]) {
      setNumber(number + 4)
    } else {
      setNumber(0)
    }
    
  }

  return (
    <div className="belt">
      {list.slice(number, number + 4)}
      <MoreButton changeSushi = {changeSushi}/>
    </div>
  );
}

export default SushiContainer;
