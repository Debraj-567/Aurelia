import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1c] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-heading font-semibold text-luxury-gold tracking-widest block mb-6">
              AURELIA
            </Link>
            <p className="text-luxury-gray text-sm leading-relaxed mb-8 max-w-sm">
              Extraordinary Stays. Timeless Experiences. Discover handcrafted luxury across the world's most breathtaking destinations.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Destinations', 'Hotels & Resorts', 'Private Villas', 'Curated Experiences'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-luxury-gray hover:text-luxury-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Aurelia', 'Careers', 'Press & Media', 'Sustainability'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-luxury-gray hover:text-luxury-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-luxury-gray hover:text-luxury-gold transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-gray text-xs mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aurelia Hotels & Resorts. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-luxury-gray hover:text-luxury-gold transition-colors text-xs uppercase tracking-widest">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
