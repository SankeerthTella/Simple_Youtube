import axios from 'axios';
const KEY = '********Google Api key************';

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