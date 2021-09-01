const initialState = {
    data: [],
    name: "Vidisha"
};

const reducer = (state = initialState, action) => { //strting mai state hogyi initial state ki agar by chance state undefined pass hui toh initial state lelega vo
    switch (action.type){
        case "updateMovies":
        state.data = action.data;
        return{
            ...state
        }
        case "updateName":
            state.name = action.name;
            return {
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default reducer;