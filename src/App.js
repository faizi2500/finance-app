import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAPIcall } from './redux/home/home';
import Top from './components/Top';
import Home from './components/Home';
import cover from './cover.jpg';

const App = () => {
  const result = useSelector((state) => state.countriesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAPIcall());
    // dispatch(getImages(result));
  }, []);
  // useEffect(() => {
  //   dispatch(getImages(result));
  // }, []);
  // console.log(result.length);
  // const highPerformer = result.filter((a, b) => parseFloat(a.) )
  return (
    <>
      <Top />
      <img className="cover-img" src={cover} alt="Grow" />
      <div>
        <Home nasdaq={result} />
      </div>
    </>
  );
};

export default App;
