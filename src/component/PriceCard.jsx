import Button from './Button';

const PriceCard = ({ data, type, price, link, highlight }) => {
  return (
    <div
      className={`justify-self-center p-10 shadow-xl rounded-2xl ${
        highlight && 'bg-blue-950 text-white'
      } `}
    >
      <h2 className="font-medium text-2xl mb-4">{type}</h2>
      <h1 className="text-orange-500 text-4xl font-bold mb-6">{price}</h1>
      <ul className="mb-5 p-2">
        {data.map((feature) => {
          return (
            <li
              key={feature.name}
              className="flex items-center gap-3 text-lg font-medium mb-2"
            >
              <span
                className={`text-2xl flex items-center ${
                  feature.valid ? 'text-orange-500' : 'text-blue-950'
                }`}
              >
                <ion-icon
                  name={`${
                    feature.valid ? 'checkmark-circle' : 'close-circle'
                  }`}
                ></ion-icon>
              </span>
              <h2>{feature.name}</h2>
            </li>
          );
        })}
      </ul>
      <a href={link} target={`_blank`} className="shadow-lg">
        <Button
          moreClass={`w-full font-bold text-2xl ${
            highlight && 'hover:ring-orange-500 hover:ring-4 hover:ring-inset'
          }`}
        >
          Choose Plan
        </Button>
      </a>
    </div>
  );
};
export default PriceCard;
