import axios from 'axios';
const KEY = 'AIzaSyA9nW81QJr-hCwDAAiwS2RAHCPxU2rF3qg';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:10,
        key:`${KEY}`,
        q:'surfboards'
    }
});