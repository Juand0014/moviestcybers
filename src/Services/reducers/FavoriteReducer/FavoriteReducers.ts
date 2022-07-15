import { FavoriteContextStateType } from "../../../Contexts";

export const FavoriteReducers = (state: FavoriteContextStateType, action: any) => {
	
	switch (action.type) {
		case 'ADD_FAVORITE': {
			return {
				...state,
				favoriteMovies: [...state.favoriteMovies, action.payload]
			};
		}
		case 'REMOVE_FAVORITE':
			return {
				...state,
				favoriteMovies: state.favoriteMovies.filter(movie => movie !== action.payload)
			}
		default:
			return state;
	}
}