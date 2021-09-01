import axios from "axios"

export const GetService =  async () => {
    // const response = await axios.get("https://pepmoviesapp.free.beeceptor.com/movies");
     //const response = await axios.get("https://moviesapp.free.beeceptor.com/moviess");
     const response = await axios.get("https://moviesapplication.free.beeceptor.com/movies");
    console.log(response);
    return response.data
}