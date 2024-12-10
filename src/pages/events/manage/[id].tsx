import BannerCard from "@/components/card/BannerCard"
import InfoBlock from "@/components/elements/InfoBlock2"
import Header from "@/components/header"
import withAdminLayout from "@/lib/withAdminLayout"
import TopRefundsRequests from "@/components/refunds/topRefundRequests"

const banner = {
  eventID: "adWS29e83u1893u",
  title :'Digital Dialogue & Pandora Presents – Kaufmann',
  availableTickets :'1200/1400 Available',
  startDate :'November 13, 2024',
  endDate :'November 14, 2024',
  location :'House Of Chapora',
  imageSrc :'/banner.png',
}

const ManageEvent =()=>{

  const handleDownloadRegistrants = (id:string)=>{
    console.log("downloadRegistrants....",id)
  }

  return(
    <div>
      <div className="mx-auto max-w-7xl py-4">
        <Header title='Event Details'/>
      </div>
      <section className="flex flex-row flex-wrap justify-between mb-6 space-y-2">
        <InfoBlock title={'Sold'} value={'₹ 3,45,600'} />
        <InfoBlock title={'Refund'} value={'₹ 45,600'} />
        <InfoBlock title={'Seats vs Sold'} value={'1000 / 800'} />
        <InfoBlock title={'Sold vs Attend'} value={'800 / 720'} />
        <InfoBlock title={'Refund vs Request'} value={'50 / 24'} />
      </section>
      <BannerCard {...banner} downloadRegistrants={handleDownloadRegistrants} />
      <div className="mt-8">
        <TopRefundsRequests />
      </div>
    </div>
  )

}

export default withAdminLayout(ManageEvent)