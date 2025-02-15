
import './App.css';
import { useState } from 'react';

function App() {
      let [city,setCity] =useState();
      let [wdetails,setWdetails] = useState(null);
// via using  fetch with async await
      // let getcitydata =(e) => {
      //   e.preventDefault();
      //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9494d22452178010c7f5b33fb3460ea7&units=metric`)
      //   .then(response => response.json())
      //   .then(data => {
      //             if(data.cod === "400" || data.cod === "404")
      //             { console.log('response========un=======>>',setWdetails);
      //               setWdetails();
      //               }
      //             else {
      //               setWdetails(data);
      //             }
      //           }
      //         ) 
      //   setCity('');
      // }
      let getcitydata = async (e) => {
        e.preventDefault();
        const apirespone = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9494d22452178010c7f5b33fb3460ea7&units=metric`)
        const result = await apirespone.json();
        console.log('resulyt============>',result)

        if (!apirespone.ok) {
          console.log('response========not ok=======>>',setWdetails);
          setWdetails(null);
          setCity('');
          return;
        }else{
          console.log('response========ok=======>>',result)
           setWdetails(result);
          
        }
        setCity('');
      }



return (
  <div className='w-[100%] h-[100vh] bg-[#4aacb1] app'>
    <div className='max-w-[1320px] mx-auto'>
      <h1 className='text-[40px] font-bold py-[50px] text-white '>Simple weather App</h1>

      <form onSubmit={getcitydata}>
        <input 
          type='text' 
          className='w-[300px] h-[40px] pl-3 cityinput' 
          placeholder='City Name' 
          value={city}
          onChange={(e)=>{setCity(e.target.value);}}
        />
        <button className='bg-white'>Search</button>
      </form>

      <div className='w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] card'>
{/* for fetch  wdetails !== undefined */}
        {wdetails !== null ?
        <>
        <h3 className='font-bold text-[30px]'>{wdetails.name}<span className='bg-[yellow]'>{wdetails.sys.country}</span></h3>
        <h2 className='font-bold text-[40px]' >{wdetails.main.temp}</h2>
        <img src='http://openweathermap.org/img/w/50d.png' />
        <p>{wdetails.weather[0].main}</p>
        </>
        :
        'NO city found'}
        

      </div>
    </div>
  </div>
);

}


export default App;
