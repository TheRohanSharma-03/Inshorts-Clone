import axios from 'axios';

const URL = 'https://inshorts-clone-by-rohan.onrender.com/news';


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}