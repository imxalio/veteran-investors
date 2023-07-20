import { useState } from 'react';
import Accordion from './component/Accordion';
import SectionTitle from './component/SectionTitle';

const accordionData = [
  {
    id: '1',
    title: 'Section 1 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
  {
    id: '2',
    title: 'Section 2 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
  {
    id: '3',
    title: 'Section 3 Title',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam condimentum imperdiet sapien, eu facilisis enim tristique sed.',
  },
];

const Faq = () => {
  const [curOpen, setIsCurOpen] = useState(null);

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-7">
      <SectionTitle tailClass={'text-center'}>
        Frequently asked questions
      </SectionTitle>

      <ul className="md:w-2/3 mx-auto ">
        {accordionData.map((item) => (
          <li key={item.id} className="mb-4 shadow-lg rounded-lg">
            <Accordion
              title={item.title}
              description={item.description}
              id={item.id}
              curOpen={curOpen}
              setIsCurOpen={setIsCurOpen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Faq;
