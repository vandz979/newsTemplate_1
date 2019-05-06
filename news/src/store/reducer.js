import * as actionType from "./actionType"

const initialState = {
    landingid: [],
    landingData: []
    
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.LANDINGID: 
        return {
            ...state,
            landingid: action.id
        }

        case actionType.DATA: 
        return {
            ...state,
            landingData: action.data
        }

        default:
        return state
    }

}

export default reducer;