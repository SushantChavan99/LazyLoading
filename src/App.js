import React,{ Suspense, lazy } from 'react';
import './App.css';
import JsonData from './JSON/sample.json';
import Cardlist from './Cardlist';

function App() {
  const Cardlist = React.lazy(() => import('./Cardlist'));
  return (
    <>  
    <div className="container">
      <div className="row">
        <Suspense fallback={<div>Loading...</div>}>
          {
            JsonData.entries.map((js, index) => {
              return <Cardlist key={index} imgPath={js.images.Poster_Art.url} title={js.title} />
            })
          }
        </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
