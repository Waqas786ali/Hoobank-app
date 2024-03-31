import React from 'react'
import './App.css'
import style from './style';
import {Navbar,
  Billing,
  Hero,
  Business,
  CTA,
  Clients,
  CardDeal,
  FeedbackCrad,
  Footer,
  GetStarted,
  Stats,
  Testimoials,
  Button } from './Components/index'
const App = () => {
  return (
    <>
      <div className='bg-[var(--primary)]  w-full overflow-hidden'>
        <div className={`${style.paddingX} ${style.flexCenter}`}>
          <div className={`${style.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-[var(--primary)] ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-[var(--primary)] ${style.paddingX} ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimoials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
