import { GetService } from "../../services/movies";


export const HandleGetMovies = async () => {
    let result = await GetService();
    console.log(result)
    return result;
}