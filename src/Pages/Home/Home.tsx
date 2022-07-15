import services from "../../Services/BaseServices";
import { useQuery } from "react-query";
import Box from '@mui/material/Box';
import { Cards } from "../../Components";
import { Alert, AlertTitle, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { FavoriteContext } from "../../Contexts";
import { Satellite } from "@mui/icons-material";

export const Home = () => {

	const { state } = useContext(FavoriteContext);
	const onSuccess = () => console.log("success");
	const onError = () => console.log("error");

	const { data, error, isLoading } = useQuery<any, Error>("details", () => services.findAll(), {
		onSuccess,
		onError,
	});

	const dataResult = data?.data.results;

	console.log(state)

	const [isFavorite, setIsFavorite] = useState(false);

	const renderFavorite = (event: any) => {
		setIsFavorite(event.target.checked);
	}

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<>
			<Box display="flex" flexDirection="row" justifyContent="space-evenly" alignItems="center">
				<Typography variant="h4" component="h1">
					Home
				</Typography>
				<FormGroup>
					<FormControlLabel control={<Checkbox />} label="Favorites" onChange={e => renderFavorite(e)} />
				</FormGroup>
			</Box>
			<Box 
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "top",
						paddingTop: "50px",
					}}
					> 
					{
						isFavorite 
						? 
						!state.favoriteMovies.length 
						? <Alert severity="info" sx={{width: '80%'}}>
								<AlertTitle>Info</AlertTitle>
								Mensaje — <strong>No hay favoritos!</strong>
							</Alert> 
						: dataResult?.filter((item: any) => state.favoriteMovies.includes(item.id))
							.map((item: any) => (
								<Box key={item.id} sx={{paddingTop: 3}}>
									<Cards key={item.id} {...item } />
								</Box>
							)) 
						: dataResult?.map((item: any) => (
							<Box key={item.id} sx={{paddingTop: 3}}>
								<Cards key={item.id} {...item} />
							</Box>
						))
					}
			</Box>
		</>
	)
}