import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import services from '../../Services/BaseServices';

export const Details = () => {
	const { id } = useParams();
	const { data, error, isLoading } = useQuery<any, Error>("details", () => services.findOne(id));

	console.log(data)

	return (
		<div className="App">
			<h1>Details {id}</h1>
		</div>
	)
}