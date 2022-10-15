import React, { useState } from "react";

function Sushi({sushi, changeMoney, money}) {
  const [eaten, setEaten] = useState(false)

  function sushiClicked() {
    if(eaten === false) {
      if(money - parseInt(sushi.price) > 0) {
        setEaten(true)
        changeMoney(true, parseInt(sushi.price))
      } else {
        alert("You have no more money!")
      }
    } else {
      setEaten(false)
      changeMoney(false, parseInt(sushi.price))
    }  
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={sushiClicked}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
