import { memo } from "react"
import Header from "../header"
import { topCityData } from "./constant"

const TopCities = () =>{
    return(
        <div className="mt-8">
            <Header title={"Top Cities"} />
            <div className="space-y-4">
                {topCityData.map((item, index) => (
                <div key={index} className="flex items-center">
                    <div className="flex flex-row items-center flex-grow bg-gray-300 h-8 rounded-md relative overflow-hidden">
                    <div
                        className="flex items-center bg-gray-800 h-8 rounded-md"
                        style={{
                        width: `${(item.revenue / item.maxRevenue) * 100}%`,
                        }}
                    >
                        <div className="pl-2 w-24 font-semibold text-white">{item.city}</div>
                    </div>
                    <div className="pr-2 ml-auto text-white">{item.revenue}k</div>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}

export default memo(TopCities)