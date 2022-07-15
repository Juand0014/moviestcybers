import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../../Contexts';
import { environment } from '../../Config';

interface ICardProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const Cards = <T extends ICardProps>({
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}: T) => {
  const { state, dispatch} = useContext(FavoriteContext);

  const handleFavorite = () => {
    state.favoriteMovies.includes(id) 
      ? dispatch({ type: 'REMOVE_FAVORITE', payload: id })
      : dispatch({ type: 'ADD_FAVORITE', payload: id });
  }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${environment.getImageUrl}${poster_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Average: {vote_average}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link style={{textDecoration: "none"}} to={`/details/${id}`}>Details</Link>
        </Button>
        <Button size="small"
          onClick={handleFavorite}
        >{
          state.favoriteMovies.includes(id) ? <StarIcon color={'warning'} /> : <StarBorderIcon />
        }</Button>
      </CardActions>
    </Card>
  );
}