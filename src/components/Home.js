import React from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Each from './Each';
// import { getImages } from '../redux/home/images';

const Home = ({ nasdaq }) => {
  const companies = nasdaq;
  companies.sort((a, b) => b.changesPercentage - a.changesPercentage);
  // console.log(companies);
  // const dipatch = useDispatchc()
  // useEffect(() => {
  //   dipatch(getImages(companies));
  // }, [companies]);
  return (
    <>
      <div className="full-width">
        <h5 className="list-heading">Top Performers</h5>
      </div>
      <div className="container">
        {companies.map((item, index) => (
          // eslint-disable-next-line max-len
          <Each key={item.ticker} name={item.ticker} price={item.price} index={index} company={item.companyName} />
        ))}
      </div>
    </>
  );
};
Home.propTypes = {
  nasdaq: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
