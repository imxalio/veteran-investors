const links = [
  { name: 'About Us', link: '#' },
  { name: 'Testimonials', link: '#' },
  { name: 'Contact US', link: '#' },
];

const Links = () => {
  return (
    <>
      {links.map((item) => {
        return (
          <li key={item.name}>
            <a
              href={item.link}
              className="hover:text-orange-500 transition-all duration-300"
            >
              {item.name}
            </a>
          </li>
        );
      })}
    </>
  );
};
export default Links;
