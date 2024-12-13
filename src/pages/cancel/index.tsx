import CounterInput from "@/components/elements/counterInput"
import SelectReason from "@/components/elements/selectReasons"
import withPublicLayout from "@/lib/withPublicLayout"
import { memo, useState } from "react"

const Cancel =()=>{
    const [quantity, setQuantity] = useState<number>(0)
    const [reason, setReason] = useState<string>('');
    console.log("reason...",reason)
    const handleReasonSelect = (selectedReason: string) => {
        setReason(selectedReason);
        console.log('Selected Reason:', selectedReason); // Do something with the selected reason
    };
    
    const handleValueChange = (newValue: number) => {
        setQuantity(newValue);
    };

    return(
        <div className="mx-auto max-w-3xl bg-white p-8 rounded-lg">
            <h2 className="font-bold text-xl mb-8">Cancel Ticket</h2>
            <div className="font-bold">Digital Dialogue & Pandora Presents – Kaufmann</div>
            <div className="flex flex-row justify-between items-center mt-2">
                <div>Single Adult Pass</div>
                <CounterInput value={quantity} onChange={handleValueChange} />
            </div>
            <div className="flex flex-row justify-between items-center mt-2">
                <div>Approx Refund</div>
                <div className="font-bold">₹3400.00</div>
            </div>
            <div className="mt-4">
                <SelectReason onReasonSelect={handleReasonSelect} />
            </div>
            <div className="mt-4">
                <button className="flex flex-row justify-center items-center font-bold rounded-lg p-2 w-[120px] bg-gray-800 text-white">Submit</button>
            </div>

        </div>
    )
}

export default memo(withPublicLayout(Cancel))