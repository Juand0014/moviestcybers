import services from "../../Services/BaseServices";
import { useQuery } from "react-query";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Cards } from "../../Components";

export const Home = () => {

	const onSuccess = () => console.log("success");
	const onError = () => console.log("error");

	const { data, error, isLoading } = useQuery<any, Error>("details", () => services.findAll(), {
		onSuccess,
		onError,
	});

	const dataResult = data?.data.results;

	console.log(dataResult);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error.message}</div>;
	}

	return (
			<Box 
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "center",
					}}
					> {dataResult?.map((item: any, index: number) => (
						<Box key={index} sx={{paddingTop: 3}}>
							<Cards key={index} {...item} />
						</Box>
					))}
			</Box>
	)
}