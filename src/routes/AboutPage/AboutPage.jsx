import React, { useState } from 'react';
import Header from '../../components/Header/Header';

import './AboutPage.scss';
import UploadTattoo from '../../components/UploadTattoo/UploadTattoo';
import FirstBlock from '../../components/About/FirstBlock/FirstBlock';
import SecondBlock from '../../components/About/SecondBlock/SecondBlock';
import ThirdBlock from '../../components/About/ThirdBlock/ThirdBlock';
import FourthBlock from '../../components/About/FourthBlock/FourthBlock';
import Footer from '../../components/Footer/Footer';

const AboutPage = () => {
  const [upload, setUpload] = useState(false);

  return (
    <div className="about-page">
      <UploadTattoo view={upload} setView={setUpload} />
      <div className="vert-line"></div>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock upload={upload} setUpload={setUpload} />
      <FourthBlock />
      <Footer />
    </div>
  );
};

export default AboutPage;
