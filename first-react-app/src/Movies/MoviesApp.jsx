import {useState, useEffect} from 'react';
import axios from 'axios';

const MoviesApp = () => {
    const [data, setData] = useState("");
    const [apiKey, setapiKey] = useState("");
    const [filmTitle, setfilmTitle] = useState("");

useEffect(() =>
axios
.get("http://www.omdbapi.com/?apikey=" + apiKey +"&t=" + filmTitle )
)