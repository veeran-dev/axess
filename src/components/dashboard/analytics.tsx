import { memo } from "react"

const Analytics =() =>{
    return(
        <div className=" flex sm:flex-row flex-col items-center flex-wrap justify-between space-y-4 sm:space-y-0">
            <div className="bg-white rounded-md border-gray-200 border-[1px] p-4 w-full sm:w-auto">
                <div className="mb-4 text-xl">Overall Revenue</div>
                <div>
                    <span className=" text-sm">January</span>
                    <h2 className="mt-2 font-bold text-2xl">{'₹ 3,45,600'}</h2>
                </div>
            </div>
            <div className="bg-white rounded-md border-gray-200 border-[1px] p-4 w-full sm:w-auto">
                <div className="mb-4 text-xl">Refund</div>
                <div>
                    <span className=" text-sm">Amount / Count</span>
                    <h2 className="mt-2 font-bold text-2xl">{'₹ 45,600 / 240'}</h2>
                </div>
            </div>
            <div className="bg-white rounded-md border-gray-200 border-[1px] p-4 w-full sm:w-auto">
                <div className="mb-4 text-xl">New Registrations</div>
                <div>
                    <span className=" text-sm">Users / Organizers</span>
                    <h2 className="mt-2 font-bold text-2xl">{'720 / 2'}</h2>
                </div>
            </div>
        </div>
    )
}
export default memo(Analytics)