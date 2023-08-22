import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
  
const headers = {
    // Authorization: `bearer ${TMDB_TOKEN}`, 
    Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzljNWYxZmQxNTIyZDMyNjFkZjVmZGRhNmFlZDFlNyIsInN1YiI6IjY0ZGYwNjcyYTNiNWU2MDBmZjRkZGE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iQO6-xbuHe6-txceHJD77g-XLY9CLH7v3bVwNqCAxxg`, 

    accept:`application/json`// Use template literal for string interpolation
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

