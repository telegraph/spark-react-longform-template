import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import analytics from './helpers/analytics';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import CTA from './components/CTA';
import Button from './components/Button';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import Broughttyb from './components/Broughttyb';
import BasicSlider from './components/BasicSlider';

// Assets

function App() {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    window.requestAnimationFrame(() => {
      let progressState = progress;
      const docHeight = document.body.scrollHeight;
      const scrolled = window.scrollY + window.innerHeight;
      const difference = docHeight + scrolled;
      const percentage = difference / docHeight - 1;
      progressState = percentage;
      setProgress(progressState);
    });
  };

  useEffect(() => {
    // on update
    document.addEventListener('scroll', changeProgress);
    return function cleanup() {
      document.removeEventListener('scroll', changeProgress);
    };
  });

  useEffect(() => {
    // on mount
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header progress={progress} />
      <Hero />
      <Pagebody title="Lorum Ipsum title header">
        <p>
          <Dropcap>L</Dropcap>orem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus scelerisque ut ipsum sed pharetra. Pellentesque auctor mattis orci et scelerisque. Sed lacinia ullamcorper felis eget sagittis. Sed pellentesque fermentum fringilla. Maecenas sed sem lorem. Donec iaculis, diam eget porta auctor, erat orci ultrices erat, varius auctor libero ipsum interdum sapien. Nam eget varius quam. Vestibulum dapibus neque urna, in porttitor augue cursus sit amet. Nam in rutrum nisi. Mauris lobortis lacus diam, et posuere ligula finibus et. Aenean at purus at velit ullamcorper tempus. Curabitur eget tempus dui. Nulla aliquam lorem eget molestie finibus.
        </p>
        <p>
          Phasellus pellentesque ex ac dapibus lacinia. Phasellus non justo urna. Phasellus lobortis auctor odio, eu maximus erat. Mauris interdum iaculis vulputate. Aenean eu sagittis dui. Vivamus vitae tempus leo. Vivamus sagittis neque vel ultricies sodales. Phasellus quis blandit erat. Etiam scelerisque, velit ornare efficitur varius, augue risus consequat justo, quis dignissim lectus nisi eget dolor. Nunc vel sagittis nibh, at condimentum sapien. Integer nisi nunc, fermentum in nisi placerat, congue imperdiet turpis. Nam elementum, lectus sit amet pulvinar accumsan, metus justo pretium magna, vel ultricies mauris risus eget felis.
        </p>
        <Pullquote quote>
          <h3>
            Donec non magna pellentesque, tempus magna eu, ultrices leo. Aliquam id sodales orci. Curabitur pellentesque tempus metus, nec sagittis mi porta ut.
          </h3>
        </Pullquote>
        <p>
          Donec non magna pellentesque, tempus magna eu, ultrices leo. Aliquam id sodales orci. Curabitur pellentesque tempus metus, nec sagittis mi porta ut. Nullam vitae turpis quis augue pellentesque tempus ut molestie lacus. In porta eros a lectus malesuada, at euismod odio tempus. Vestibulum lacus nisl, dignissim ac velit et, interdum ultrices quam. Nullam sit amet est et nunc sodales lobortis.
        </p>
        <p>
          Vestibulum auctor nulla at cursus placerat. Aliquam leo nibh, imperdiet ac gravida eu, blandit at urna. In hac habitasse platea dictumst. Morbi rutrum arcu ex, eget molestie risus lobortis vel. Aliquam laoreet nulla velit, sit amet feugiat risus convallis in. Cras diam enim, ornare in lorem et, auctor aliquam purus. Mauris nisl nunc, congue nec faucibus eu, varius in elit. Donec ac hendrerit urna, at tempus quam. Phasellus vestibulum commodo justo, eget efficitur ante. Donec egestas ligula a nibh ullamcorper viverra. Suspendisse potenti. Maecenas vestibulum eros dolor, tincidunt sagittis justo cursus in.
        </p>
      </Pagebody>
      <BasicSlider title="title of slider" />
      <CTA>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          link="https://ad.doubleclick.net/ddm/trackclk/N8083.124621MSNUK/B22370404.240723500;dc_trk_aid=443465896;dc_trk_cid=105350124;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
        />
      </CTA>
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
} 
export default App;
