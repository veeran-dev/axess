import EventCard2 from "@/components/explore/eventCard2"
import Search from "@/components/explore/search2"
import Pagination2 from "@/components/table/pagination2"
import withPagination from "@/lib/withPagination"

import withPublicLayout from "@/lib/withPublicLayout"

const Explore =()=>{
    return(
        <>
            <Search/>
            <div className="my-12 bg-black rounded-lg">
                <div className="text-gray-100 flex sm:flex-row flex-col justify-between">
                    <div className="font-bold sm:text-3xl text-xl mb-2">Upcoming Events</div>
                    <div className="">Showing 1 – 24 of 36 results</div>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 place-items-start mb-4 gap-2 bg-black rounded-lg py-8">
                {
                    Array(12).fill(0).map((i:number)=>
                        <EventCard2 key={i}/>
                    )
                }
                </div>
                <Pagination2/>
            </div>
        </>
    )
}

export default withPublicLayout(withPagination(Explore))