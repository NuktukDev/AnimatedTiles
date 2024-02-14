/* SVG & Icons */
import logo from 'src/assets/logo.svg';
import icon1 from 'src/assets/images/Image1.png';
import icon2 from 'src/assets/images/Image2.png';
import icon5 from 'src/assets/images/Image5.png';
import icon6 from 'src/assets/images/Image6.png';
import icon7 from 'src/assets/images/Image7.png';
import icon8 from 'src/assets/images/Image8.png';
import icon9 from 'src/assets/images/Image9.png';
import icon10 from 'src/assets/images/Image10.png';
import icon12 from 'src/assets/images/Image12.png';

/* Components */
import { Header } from './components/Layout/Header/Header.tsx';
import { SubNav } from './components/Layout/SubNav/SubNav.tsx';
import { Tile } from './components/Tile/Tile.tsx';
import { Button } from '@chakra-ui/react';
import { Tiles } from 'src/components/Tiles.tsx';

/* Styles */
import './App.scss';

/* Utility */
import { useEffect, useRef, useState } from 'react';

function App() {
  const timeManagementSection = useRef<HTMLDivElement | null>(null);
  const [showTimeManagementTiles, setShowTimeManagementTiles] = useState(false);
  useEffect(() => {
    //console.log(timeManagementSection);
    const observable = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setShowTimeManagementTiles(true);
      }
    });

    if (timeManagementSection.current) {
      observable.observe(timeManagementSection.current);
    }
  }, []);
  return (
    <>
      <Header />
      <SubNav />

      <main className="main">
        <Tiles>
          <Tile x="0px" y="60px" src={icon12} color="#19a0ea" bgColor="#E1F9FF" />
          <Tile x="200px" y="180px" src={icon1} color="#ffb600" bgColor="#FFF4CB" />
          <Tile x="-100px" y="310px" src={icon5} color="#ff2937" bgColor="#FFEBE3" />

          <Tile x0="-50px" y="110px" src={icon2} color="#03C1BA" bgColor="#DDFCFA" />
          <Tile x0="220px" y="160px" src={icon6} color="#A361FF" bgColor="#F7E5FF" />
          <Tile x0="10px" y="370px" src={icon9} color="#FF6522" bgColor="#FFE9D3" />

          <Tile x="90px" y="460px" src={icon10} color="#03C1BA" bgColor="#DDFCFA" />
        </Tiles>
        <section className="intro">
          <div className="intro__head">
            <img src={logo} width="200" />
            <h1 className="intro__title">It's time.</h1>
            <p className="intro__sub-title">
              All of your commitments, now in one place. Meet the beautifully designed, fully
              integrated calendar for your work and life.
            </p>
            <Button bgColor="black" color="white" _hover={{ bgColor: 'gray.600' }} size="md">
              Get Notion Calendar free
            </Button>
          </div>

          <div className="intro__video"></div>
        </section>

        <div className="tile-container">
          {showTimeManagementTiles ? (
            <Tiles>
              <Tile x="-50px" y="210px" src={icon8} color="#FF6522" bgColor="#FFE9D3" />
              <Tile x0="0px" y="80px" src={icon7} color="#A361FF" bgColor="#F7E5FF" />
            </Tiles>
          ) : (
            ''
          )}
        </div>
        <section className="section time-management" ref={timeManagementSection}>
          <h2 className="section__heading">Time management, simplified.</h2>
          <div className="box">
            <div className="box__header">
              <h3>See your schedule at a glance</h3>
              <p>
                Join meetings directly from the menu bar so you can stay focused on the work that
                matters.
              </p>
            </div>
            <div className="box__footer">
              <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/7t9TzEqVMWWGDDV16opOa5/61eb8f1d0acfc631ef1fbe55b363c026/menu-bar.png" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
