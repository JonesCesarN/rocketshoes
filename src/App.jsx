import { Aside } from '@/components/layout/Aside'
import { Main } from '@/components/layout/Main'
import { Footer } from '@/components/layout/Footer'
import { Nav } from '@/components/layout/Nav'
import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react'

function App() {
  const [screen, setScreen] = useState(0)

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setScreen(width)
  };

  return (
    <div className="container">
      <div className='wrapper'>
        <Nav />
        <div className='content'>
          <Aside />
          <Main />
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;
