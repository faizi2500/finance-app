import React from 'react';
import PropTypes from 'prop-types';

const CompanyBanner = ({
  name,
  image,
  exchange,
  sector,
  price,
  description,
  volAvg,
  website,
}) => {
  const newdes = description.split(/\s+/).slice(0, 35).join(' ');
  return (
    <div className="parent-banner-div">
      <div className="banner-div">
        <div className="banner-img">
          <img src={image} alt="company logo N/A" />
        </div>
        <div className="banner-details">
          <h1>{name}</h1>
          <p>
            Exchange:
            {' '}
            &quot;
            <strong>
              {exchange}
            </strong>
            &quot;
          </p>
          <p>
            Sector:
            {' '}
            &quot;
            <strong>
              {sector}
            </strong>
            &quot;
          </p>
          <p>
            Price:
            {' '}
            &quot;
            <strong>
              {price}
            </strong>
            &quot;
          </p>
          <p>
            Average Volume:
            {' '}
            &quot;
            <strong>
              {volAvg}
            </strong>
            &quot;
          </p>
        </div>
      </div>
      <div className="banner-description-para">
        <p>
          {newdes}
          ....
          {' '}
          <br />
          (
          More at
          {' '}
          <a href={website} className="web">
            {website}
          </a>
          {' '}
          )
        </p>
      </div>
    </div>
  );
};

CompanyBanner.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  volAvg: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};

export default CompanyBanner;
