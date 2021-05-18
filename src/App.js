import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import { Spinner } from 'react-bootstrap';

function App() {

  const [data, setData] = useState(null);
  let city = 'Rome';
  const state = 'Italy';
  const APIKEY = "edad788f999748dd986f2d4b76c75522";

  const getCityName = () => {
    let loc = document.location;
    if(loc.pathname!=''){
      return loc.pathname.split("/")[1];
    }
    if(loc.search!=''){
      let par = new URLSearchParams(loc.search);
      return Array.from(par.values())[0];
    }
    return null;

  };

  useEffect(()=> {
      console.log(document.location);
      const fetchData = async () => {
          let root = "https://api.weatherbit.io/v2.0/forecast/daily";
          let new_city = getCityName();
          if(new_city){
            city = new_city;
          }
          let api_call = `${root}?city=${city}&country=${state}&key=${APIKEY}&lang=it&days=8`
          await fetch(api_call)
          .then(res => res.json())
          .then(result => {
            setData(result)
            console.log('RESULT',result);
          }).catch((err) => {
            console.log('Error occurred!');
          });
      };
      if(!data){
        fetchData();
      }
  });

  return (
    <div className="App">
      {(data ) ? (
        <Weather weatherData={data} />
      ): (
        <Spinner animation="grow" className={'verycenter'} variant="light" />
      )}
    </div>
  );
}

export default App;
