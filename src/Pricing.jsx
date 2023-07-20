import { useState } from 'react';
import PriceCard from './component/PriceCard';
import Button from './component/Button';
import Toogle from './component/Toogle';
import SectionTitle from './component/SectionTitle';

const premium = [
  { name: 'Private Chatroom', valid: true },
  {
    name: 'Daily Alerts on Trades with Pre/Post Gains.',
    valid: true,
  },
  {
    name: 'Daily Voice/Video calls with Cameron.',
    valid: false,
  },
  { name: 'Chart Requests', valid: false },
  { name: 'Exclusive Alerts', valid: false },
  { name: 'Full access to private indicators', valid: false },
  { name: 'Full private trading guide & documents', valid: false },
  {
    name: 'Full Exclusive trading Education.',
    valid: false,
  },
  { name: 'Private weekly meetings & trade check-ins', valid: false },
  { name: 'Monthly 1 on 1 Mentoring', valid: false },
];

const vip = [
  { name: 'Private Chatroom', valid: true },
  {
    name: 'Daily Alerts on Trades with Pre/Post Gains.',
    valid: true,
  },
  {
    name: 'Daily Voice/Video calls with Cameron.',
    valid: true,
  },
  { name: 'Chart Requests', valid: true },
  { name: 'Exclusive Alerts', valid: true },
  { name: 'Full access to private indicators', valid: true },
  { name: 'Full private trading guide & documents', valid: true },
  {
    name: 'Full Exclusive trading Education.',
    valid: true,
  },
  { name: 'Private weekly meetings & trade check-ins', valid: true },
  { name: 'Monthly 1 on 1 Mentoring', valid: true },
];

const Pricing = () => {
  const [period, setPeriod] = useState('Month');

  console.log('hello ' + period);
  return (
    <div className="max-w-screen-xl mx-auto py-20 px-7">
      <div className="md:flex justify-around items-center md:mb-14 mb-10 text-center">
        <SectionTitle>Simple, transparent pricing</SectionTitle>

        <div className="border-2 border-blue-950 inline-block rounded-lg h-full ">
          <Toogle
            tailClass={`${period === 'Week' && 'bg-blue-950 text-white'}`}
            onClick={() => setPeriod('Week')}
          >
            Week
          </Toogle>
          <Toogle
            tailClass={`${period === 'Month' && 'bg-blue-950 text-white'}`}
            onClick={() => setPeriod('Month')}
          >
            Month
          </Toogle>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-9">
        <PriceCard
          data={premium}
          type={'Premium'}
          price={period === 'Week' ? '25AUD/Week' : '100AUD/Month'}
          link={
            period === 'Week'
              ? 'https://whop.com/checkout/plan_eYgIXaZePgDUR/'
              : 'https://whop.com/checkout/plan_fmbYi96654Rpr/'
          }
        />
        <PriceCard
          data={vip}
          type={'VIP'}
          price={period === 'Week' ? '50AUD/Week' : '200AUD/Month'}
          link={
            period === 'Week'
              ? 'https://whop.com/checkout/plan_wsISSI6AQvJEz/'
              : 'https://whop.com/checkout/plan_PYfLWNpro2tuV/'
          }
          highlight={true}
        />
      </div>
    </div>
  );
};
export default Pricing;
