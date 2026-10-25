import Attar from './assets/images/perfume_img/at5.png';
import Perfume from './assets/images/perfume_img/pr4.png';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Category from './components/Category.jsx';
import Category2 from './components/Category2.jsx';
import Services from './components/Services.jsx';
import Banner from './components/Banner.jsx';
import Products from './components/Products.jsx';
import Blogs from './components/Blogs.jsx';
import Partners from './components/Partners.jsx';
import Footer from './components/Footer.jsx';
import Popup from './components/Popup.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerData = {
  discount: '30% OFF',
  title: 'Wadhaya Perfume',
  date: 'Limited Time',
  image: '',
  title2: 'Cool Fragrance',
  title3: 'Special Sale',
  title4: 'Discover your signature fragrance with Wadhaya.',
  bgColor: '#088395',
};

const BannerData2 = {
  discount: '40% OFF',
  title: 'Wadhaya Attar',
  date: 'Limited Time',
  image: '',
  title2: 'Woody Attar',
  title3: 'Special Sale',
  title4: 'Discover exclusive fragrances with Wadhaya.',
  bgColor: '#03113F',
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-bgdark bg-bgcolor duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
      <Popup
        orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}
      />
    </div>
  );
};

export default App;
