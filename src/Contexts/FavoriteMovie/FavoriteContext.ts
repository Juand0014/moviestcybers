import { createContext } from "react";

export type FavoriteContextType = {
	favorites: Array<number>;
	addFavorite: (id: number) => void;
	removeFavorite: (id: number) => void;
	isFavorite: (id: number) => boolean;
};

export const FavoriteContext = createContext<FavoriteContextType | null>(null);