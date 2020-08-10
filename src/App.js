import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import Footer from 'components/footer/footer.component';
import Routes from 'routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Spinner from 'components/spinner/spinner.component';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyle />
      {loading ? (
        <Spinner borderWidth="3px" size="30px" color="#050384" />
      ) : (
        <div data-aos="slide-left" data-aos-duration={5000}>
          <Routes />
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
