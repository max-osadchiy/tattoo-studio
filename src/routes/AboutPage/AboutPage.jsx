import React, { useState } from 'react';

import './AboutPage.scss';
import UploadTattoo from '../../components/UploadTattoo/UploadTattoo';
import FirstBlock from '../../components/About/FirstBlock/FirstBlock';
import SecondBlock from '../../components/About/SecondBlock/SecondBlock';
import ThirdBlock from '../../components/About/ThirdBlock/ThirdBlock';
import FourthBlock from '../../components/About/FourthBlock/FourthBlock';

const AboutPage = () => {
  const [upload, setUpload] = useState(false);

  return (
    <div className="about-page">
      <UploadTattoo view={upload} setView={setUpload} />
      <div className="vert-line"></div>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock upload={upload} setUpload={setUpload} />
      <FourthBlock />
    </div>
  );
};

export default AboutPage;
