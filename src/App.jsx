import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import WhoCanParticipate from './components/WhoCanParticipate.jsx';
import WhatIsHackathon from './components/WhatIsHackathon.jsx';
import WhyParticipate from './components/WhyParticipate.jsx';
import HowToParticipate from './components/HowToParticipate.jsx';
import Challenges from './components/Challenges.jsx';
import Schedule from './components/Schedule.jsx';
import Rewards from './components/Rewards.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <WhoCanParticipate />
      <WhatIsHackathon />
      <WhyParticipate />
      <HowToParticipate />
      <Challenges />
      <Schedule />
      <Rewards />
      <FAQ />
      <Footer />
    </div>
  );
}
