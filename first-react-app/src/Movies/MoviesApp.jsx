// import {useState} from 'react';
// import axios from 'axios';

// const MoviesApp = () => {
//   const [data,setData]= useState("");
//   const [apiKey, setApiKey] = useState("");
//   const [filmTitle, setFilmTitle] = useState("");

//   const updateApiKey = (e) => {
//       e.preventDefault(); 
//       setApiKey(e.target.value);
//   }
//   const updateTitle = (e) => {
//       e.preventDefault(); 
//       setFilmTitle(e.target.value);
//   }

//   const makeRequest =(e) => {
//       axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
//       .then(response => {
//           console.log(response.data);
//           setData(response.data);
//       });
//   };

//   return (
//   <>
//       <div>
//       <h2>MoviesAppuest.js</h2>
//       <p>Enter your API Key for OMDB Here</p>
//       <input type="text" onChange={(e)=>updateApiKey(e)} />
//       <p>Enter the name of the film you are searching for here</p>
//       <input type="text" onChange={(e)=>updateTitle(e)} />
//       <p>
//           Do not click this button until the fields above are correctly filled
//       </p>
//       <button onClick={(e) => makeRequest(e)}>Click me</button>

//       <h4>{data.Title}</h4>
//       <h4>{data.Year}</h4>
//       <h4>{data.Rated}</h4>
//       <h4>{data.Genre}</h4>
//       <h4>{data.Plot}</h4>
//       <img src={data.Poster} alt="The poster"></img>
//       </div>
//   </>
//   );
// }

// export default MoviesApp;

//---------------------------------------------------------------------- seperate versions


import { useEffect, useState } from 'react';
import axios from 'axios';


function MoviesApp() {
    const [data, setData] = useState({});
    const [filmTitle, setFilmTitle] = useState('');
    const [apiKey, setApiKey] = useState("");
    const appkey = ('52ccc701')

    const updateApiKey = (e) => {
              e.preventDefault(); 
              setApiKey(e.target.value);
    }

    
    useEffect(() => {
        axios.get("http://www.omdbapi.com/?apikey=" + appkey + "&t=" + filmTitle)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    }, [filmTitle]);

    const makeRequest = () => {
        axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    };

    return (
        <div>
            <h2>MoviesAppuest.js</h2>
            <p>Enter your API Key for OMDB Here</p>
          <input type="text" onChange={(e)=>updateApiKey(e)} />
            <p>Enter the name of the film you are searching for here</p>
            <input type="text" onChange={(e) => setFilmTitle(e.target.value)} />
            <p>
                Do not click this button until the fields above are correctly filled
            </p>
            <button type="button" onClick={(e) => makeRequest(e)}>Click me</button>

            {
                data && (
                    <>
                        <h4>{data.Title}</h4>
                        <h4>{data.Year}</h4>
                        <h4>{data.Rated}</h4>
                        <h4>{data.Genre}</h4>
                        <h4>{data.Plot}</h4>
                        <img src={data.Poster} alt="The poster" />
                    </>
                )
            }
        </div>
    );
}

export default MoviesApp;