import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import HeroPerfume from "../assets/images/perfume_img/pr2.png";

const Hero = ({ handleOrderPopup }) => (
  <section className="wadhaya-hero" id="home">
    <div className="wadhaya-hero-grain" aria-hidden="true" />
    <div className="wadhaya-hero-copy">
      <div className="wadhaya-eyebrow"><span /> THE ART OF ARABIAN PERFUMERY</div>
      <p className="wadhaya-hero-ar" lang="ar" dir="rtl">حضورٌ يُحكى عنه، وأثرٌ لا يُنسى</p>
      <h1>Leave a little<br /><em>mystery.</em></h1>
      <p className="wadhaya-hero-description">
        Discover a world of refined fragrance, where treasured Arabian notes meet a modern expression of luxury.
      </p>
      <div className="wadhaya-hero-actions">
        <a href="#Shop" className="wadhaya-primary-cta">Explore the collection <ArrowUpRight size={17} /></a>
        <button className="wadhaya-text-cta" onClick={handleOrderPopup}>Enquire with us <span>↗</span></button>
      </div>
      <div className="wadhaya-hero-note">
        <span className="wadhaya-note-line" />
        <span>EAU DE PARFUM · OUD · BAKHOOR</span>
      </div>
    </div>
    <div className="wadhaya-hero-art">
      <div className="wadhaya-orbit wadhaya-orbit-one" />
      <div className="wadhaya-orbit wadhaya-orbit-two" />
      <div className="wadhaya-hero-halo" />
      <div className="wadhaya-product-stage">
        <img src={HeroPerfume} alt="Wadhaya fragrance collection" className="wadhaya-hero-product" />
      </div>
      <div className="wadhaya-art-caption">
        <span>01 / SIGNATURE SCENTS</span>
        <span className="wadhaya-art-caption-ar" lang="ar" dir="rtl">تفاصيل من الفخامة</span>
      </div>
    </div>
    <a href="#Shop" className="wadhaya-scroll-cue" aria-label="Scroll to collection"><ArrowDown size={15} /> SCROLL TO DISCOVER</a>
    <div className="wadhaya-hero-index">W · 01</div>
  </section>
);

export default Hero;
