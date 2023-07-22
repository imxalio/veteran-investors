import first from './../assets/clients/01client.jpeg';
import second from './../assets/clients/02client.jpeg';
import third from './../assets/clients/03client.jpeg';
import { ImQuotesLeft } from 'react-icons/im';
import Connect from './Connect';

const clientTestimonials = [
  {
    testimonial:
      'Joining Veteran Investor was a game-changer! Their community empowered me to succeed in stock trading and crypto markets. Highly recommended!',
    name: 'Mike',
    jobTitle: 'Software Engineer',
    image: first,
  },
  {
    testimonial:
      "Thanks to Veteran Investor, I'm now making informed financial decisions. The mentorship and resources have been invaluable for my wealth-building journey.",
    name: 'John',
    jobTitle: 'Marketing Specialist',
    image: second,
  },
  {
    testimonial:
      "Veteran Investor's Discord community is a gem! I've grown as an investor with their top-notch training and support. Grateful for the experience!",
    name: 'Ryan',
    jobTitle: 'Business Analyst',
    image: third,
  },
];

const Clients = () => {
  return (
    <div>
      <article className="max-w-screen-xl px-7 py-20 mx-auto">
        <div className="grid md:grid-cols-4 gap-10 items-center  md:p-20 p-3 relative ">
          <div className="w-[84%] h-[110%] bg-blue-950 absolute z-0 rounded-2xl md:opacity-100 opacity-0"></div>

          <Connect />

          {clientTestimonials.map((client) => {
            return (
              <div
                key={client.name}
                className="rounded-xl bg-white w-full place-self-stretch z-10"
              >
                <img
                  className="border-b-[1.3rem] border-gray-200 rounded-t-xl"
                  src={client.image}
                ></img>

                <div className="p-5 relative rounded-xl md:h-80 md:flex md:flex-col md:justify-between">
                  <div className="text-slate-50 text-3xl bg-blue-950 p-4 absolute rounded-[50%] -top-[2.6rem]">
                    <ImQuotesLeft />
                  </div>
                  <blockquote className="text-base leading-8 ">
                    {client.testimonial}
                  </blockquote>
                  <div className="">
                    <h1 className="text-2xl font-semibold">{client.name}</h1>
                    <h3 className="text-lg font-medium text-orange-500">
                      {client.jobTitle}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
};
export default Clients;
