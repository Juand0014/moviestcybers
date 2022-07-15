import { AppRouter } from "./Routes/AppRoutes"
import { FavoriteContext, FavoriteContextType } from "./Contexts";

const favoriteContext: FavoriteContextType = {
  favorites: [],
  addFavorite: (favorite: any) => {
    favoriteContext.favorites.push(favorite);
  },
  removeFavorite: (favorite: any) => {
    favoriteContext.favorites.splice(favoriteContext.favorites.indexOf(favorite), 1);
  },
  isFavorite: (favorite: any) => {
    return favoriteContext.favorites.includes(favorite);
  }
}


const App = () => {
  return <FavoriteContext.Provider value={ favoriteContext }>
    <AppRouter />
  </FavoriteContext.Provider>
}

export default App
