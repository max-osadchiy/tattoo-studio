import React from 'react';

import './TattooRemovalPage.scss';
import tattoo_rem_one_img from '../../img/tattoo-rem-one.svg';
import arrow_left from '../../img/arrow-l.svg';
import line_tattoo from '../../img/line-tattoo.svg';
import { Link } from 'react-router-dom';

const TattooRemovalPage = ({ history }) => {
  return (
    <div className="tattoo-rem-page">
      <div className="tattoo-rem-container">
        <div>
          <img src={tattoo_rem_one_img} alt="" />
        </div>
        <div className="tattoo-rem-text">
          <h4 className="reset-btn" onClick={() => history.goBack()}>
            <img src={arrow_left} alt="" /> return
          </h4>
          <h1>Tattoo removal</h1>
          <img src={line_tattoo} alt="" />
          <h2 className="h2-to-p removal-first">Tattoo removal</h2>
          <p>
            While tattoos were once considered permanent, it is now possible to
            remove them with treatments, fully or partially. In the first days
            after the session, the tattoo can become brighter. This is due to
            the lifting of paint particles on the upper layers of the skin.
            Within a month, the first results will appear. The interval between
            sessions is at least 1.5 months for the complete restoration of the
            affected area.
          </p>
          <h2 className="h2-to-p removal-second">The number of sessions</h2>
          <p>
            the tattoo or lighten it for subsequent overlapping with another
            job. Also, factors such as the quality of the paint and how deep it
            was “clogged” under the skin affect the removal process; the
            technique in which the tattoo was performed; the thickness of the
            skin in the area that is exposed to the laser.
          </p>
          <h2 className="h2-to-p removal-third">Colored tattoos</h2>
          <p>
            by the laser beam, respectively, it takes more time to get rid of
            these areas. On average, 10-15 sessions are needed for complete
            removal, about 3-5 sessions are needed to prepare for overlapping.
          </p>
          <h2 className="h2-to-p removal-fourth">The duration</h2>
          <p>tattoo.</p>
          <br />
          <p>
            After the session, the area affected by the beam turns red. In some
            cases, a crust appears on this area, which in no case can be
            scratched or peeled.
          </p>
          <Link to="/appointment">
            <button className="tattoo-rem-btn black-btn">
              <h4>get an appointment</h4>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TattooRemovalPage;
