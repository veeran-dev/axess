import InfoBlock from '@/components/elements/InfoBlock2';
import Header from '@/components/header';
import withAdminLayout from '@/lib/withAdminLayout';
import { horizontalCardEventData } from '../../constant/event';
import HorizontalCardEvent, {
  HorizontalCardProps,
} from '@/components/card/HorizontalCardEvent';

const Organiser = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-4">
        <Header title='Dashboard'/>
      </div>
      <section className="flex flex-row flex-wrap justify-between mb-6 space-y-2">
        <InfoBlock title={'Overall Sale'} value={'₹ 3,45,600'} />
        <InfoBlock title={'Total Refund'} value={'₹ 45,60'} />
        <InfoBlock title={'Total Registration'} value={'1020'} />
        <InfoBlock title={'Total Attendees'} value={'720'} />
        <InfoBlock title={'Refunds'} value={'72'} />
      </section>
      <section className="mb-6">
        
        <div className='mb-4'>
          <Header title={'Events'} href={`/events`} />
        </div>
        <div className='flex flex-col gap-2'>
        {horizontalCardEventData.slice(5).map((item: HorizontalCardProps, index:number) => (
          <HorizontalCardEvent key={index} {...item} />
        ))}
        </div>
      </section>
    </div>
  );
};

export default withAdminLayout(Organiser);
