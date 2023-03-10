import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis,VictoryTheme, VictoryStack, VictoryGroup,VictoryScatter} from 'victory';

    class App extends React.Component {
        render() {
          return (
<VictoryChart horizontal

  domainPadding={{x: 40}}
>
  <VictoryBar
    style={{
      data: { fill: "#c43a31" }
    }}
    data={[
        { x: 0, y: 0 },
        { x: 45, y: 3 },
        { x: 90, y: 5 },
        { x: 135, y: 4 },
        { x: 0, y: 0 }
      ]}
  />
  <VictoryScatter
    data={[
        { x: 0, y: 0 },
        { x: 45, y: 3 },
        { x: 90, y: 5 },
        { x: 135, y: 4 },
        { x: 0, y: 0 }
      ]}
  />
</VictoryChart>
)
}
}


export default App;