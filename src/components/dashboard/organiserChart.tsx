import { memo } from "react"
import { Tooltip, Legend, ResponsiveContainer, Cell, Pie, PieChart } from "recharts";
import Header from "../header"
import { COLORS, pieChartData } from "./constant";


const OrganiserChart = () =>{
    return(
        <div className="">
            <Header title={"Top Organizer"} />
            <ResponsiveContainer width="100%" height={320}>
                <PieChart>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                        nameKey="name"
                        label
                    >
                    {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
                </ResponsiveContainer>
        </div>
    )
}

export default memo(OrganiserChart)