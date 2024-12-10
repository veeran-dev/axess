import React, { useMemo } from 'react'
import { useTableContext } from './tableContext'

const Summary = () => {
    const {data} = useTableContext()
    const totalBids = useMemo(()=>data.reduce((x, row)=>{
        const bid = parseInt(row['data']['bid'].value as string)
        return x + bid
    },0),[data])

    const totalCost = useMemo(()=>data.reduce((x, row)=>{
        const cost = parseInt(row['data'].cost.value as string)
        return x + cost
    },0),[data])
    return (
    <div className="mt-4">
            <div className="flex ml-auto flex-col items-end justify-between p-6">
            <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                <dt className="col-end-1 font-semibold text-text">Total Bids</dt>
                <dd className='text-right'>{totalBids}</dd>
                <dt className="col-end-1 font-semibold text-text">Total Costs</dt>
                <dd className="truncate text-right">
                <a href="https://example.com">
                    {totalCost}
                </a>
                </dd>
                <dt className="col-end-1 font-semibold text-text">ETA</dt>
                <dd className="truncate text-right">
                <a href="mailto:kristinwatson@example.com">
                    12/09/2024
                </a>
                </dd>
            </dl>
            </div>
        </div>
    )
}

export default React.memo(Summary)