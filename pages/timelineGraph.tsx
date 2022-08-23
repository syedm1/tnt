import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
const TimelineGraph = () => {
    const [userData, setUserData] = useState([
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
])
   
    
    return (
        <>
            {/* <h1>hello world</h1> */}
            <div style={{ backgroundColor: "#D8D8D8", padding: "1em", marginTop: "2%", textAlign: "center" }}>
            <h1 style={{ fontSize: "2rem" }}>TimeLine Graph.</h1>
            <h3>Try it out below!</h3>
            </div>
            <div style={{
            display: "flex",
            flex: 2,
            justifyContent: "space-evenly",
            margin: "2% 10%",
            }}>
                <textarea style={{width:"35vw", height: "50vh",  border: "0.1em solid #398AD7",
                        borderRadius: "1%"
                    }}>
                    {/* value={userData} */}
                </textarea>
                <AreaChart style={{width:"35vw", height: "50vh",  border: "0.1em solid #398AD7",
                        borderRadius: "1%"
                    }}
                    width={570}
                    height={450}
                    data={userData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
                
            </div>
        </>
    )
 }

 export default TimelineGraph