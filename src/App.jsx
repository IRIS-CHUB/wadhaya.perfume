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
  image: Perfume,
  title2: 'Signature Fragrance',
  title3: 'A scent of distinction',
  title4: 'Discover your signature fragrance with Wadhaya.',
  bgColor: '#8A6A3E',
};

const BannerData2 = {
  discount: '40% OFF',
  title: 'Wadhaya Attar',
  date: 'Limited Time',
  image: Attar,
  title2: 'Arabian Oud',
  title3: 'Tradition, reimagined',
  title4: 'Discover exclusive fragrances with Wadhaya.',
  bgColor: '#332719',
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup((open) => !open);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
      offset: 100,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="wadhaya-site dark:bg-bgdark bg-bgcolor duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <div id="about">
        <Category />
        <Category2 />
        <Services />
      </div>
      <Banner data={BannerData} />
      <div id="Shop" className="wadhaya-collection-anchor">
        <Products />
      </div>
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <div id="contactus"><Footer /></div>
      <Popup
        orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}
      />
    </div>
  );
};

export default App;
