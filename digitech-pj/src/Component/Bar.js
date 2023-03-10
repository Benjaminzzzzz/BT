import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryStack, VictoryGroup} from 'victory';


    const data2012 = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000},
        {quarter: 5, earnings: 18000},
        {quarter: 6, earnings: 17000},
        {quarter: 7, earnings: 19000},
      ];
      
     
      class App extends React.Component {
        render() {
          return (
           
            <VictoryGroup
>
            <VictoryChart
              domainPadding={30}
              theme={VictoryTheme.material}
            >
              <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7]}
                tickFormat={["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]}
                style={{ labels: { padding: 5, fontSize: 20, fontFamily:'SUTB' } }}
              />
              <VictoryAxis
                dependentAxis
                tickFormat={(x) => (`${x / 100}kg`)}
              />
              <VictoryStack>
                <VictoryBar
                
                  data={data2012}
                  labels={({ datum }) => `${datum.earnings}`}
                  colorScale={[ "#54C352"]}
                  x="quarter"
                  y="earnings"
                  style={{ labels: { padding: 10, fontSize: 20, fontFamily:'SUTB' } }}
                />
                
              </VictoryStack>
            </VictoryChart>
            </VictoryGroup>
        
          )
        }
      }


export default App;