import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: 1, y: 2},
  { x: 2, y: 3 },
  { x: 3, y: 5}
];

const App = () => {
  return (
    <div>
      <VictoryPie
        height={220}
        data={myData}
       
        style={{ labels: { padding: 5, fontSize: 20, fontFamily:'SUTB' } }}

        labels={({ datum }) => ` ${datum.y}%`}
        colorScale={["#FFC34D", "#427ACF", "#54C352"]}
        innerRadius={50}
        radius={80}
        
      />
    </div>
  );
};

export default App;