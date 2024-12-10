import RefundsRequests from "@/components/refunds/RefundsRequests"
import withAdminLayout from "@/lib/withAdminLayout"

const Refunds =() =>{
    return (
        <div className="">
            <RefundsRequests/>
        </div>
    )
}

export default withAdminLayout(Refunds)