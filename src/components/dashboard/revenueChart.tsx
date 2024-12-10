import { memo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "../header"
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"
import { revenueChartData } from "./constant"

const RevenueChart = () =>{
    return(
        <div className="bg-white rounded-md border-gray-200 border-[1px] p-4">
            <div className="flex flex-row flex-wrap justify-between">
                <Header title={"Revenue"} />
                <div className=" flex flex-row justify-between items-center gap-4">
                    <div className="cursor-pointer font-semibold">Organiser</div>
                    <div className="cursor-pointer">Event</div>
                    <div className="cursor-pointer">Monthly</div>
                    <div className="cursor-pointer flex flex-row justify-center items-center"><ArrowDownTrayIcon className="text-gray-800 size-6 pr-2"/>Download</div>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={revenueChartData}
                    margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
        </div>
    )
}

export default memo(RevenueChart)