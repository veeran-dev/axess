import CouponList from "@/components/coupons/couponList"
import withAdminLayout from "@/lib/withAdminLayout"

const Refunds =() =>{
    return (
        <div className="">
            <CouponList/>
        </div>
    )
}

export default withAdminLayout(Refunds)