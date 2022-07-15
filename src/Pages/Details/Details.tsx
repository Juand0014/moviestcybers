import { useParams } from 'react-router-dom';

export const Details = () => {
	const { id } = useParams();

	return (
		<div className="App">
			<h1>Details {id}</h1>
		</div>
	)
}