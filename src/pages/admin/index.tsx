import Analytics from "@/components/dashboard/analytics"
import ApprovalList from "@/components/dashboard/ApprovalList"
import OrganiserChart from "@/components/dashboard/organiserChart"
import RefundsList from "@/components/dashboard/RefundsList"
import RevenueChart from "@/components/dashboard/revenueChart"
import TopCities from "@/components/dashboard/topCities"
import Header from "@/components/header"

import withAdminLayout from "@/lib/withAdminLayout"
import { memo } from "react"

const Admin =()=>{
    return(
        <div >
            <Header title={"Dashboard"} />
            <div className="grid grid-cols-1 sm:grid-cols-3 space-x-4">
                <div className="col-span-2 space-y-4">
                    <Analytics />
                    <RevenueChart/>
                </div>
                <div className="bg-white rounded-md border-gray-200 border-[1px] px-4 pb-4 ">
                    <OrganiserChart />
                    <TopCities/>
                </div>
            </div>
            <div className="px-4 py-4 bg-white grid grid-cols-1 sm:grid-cols-2 space-x-4 mt-8">
                <RefundsList />
                <ApprovalList />
            </div>
        </div>
    )
}

export default memo(withAdminLayout(Admin))