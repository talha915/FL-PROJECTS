import { useQuery } from 'react-query';
import Cards from '../CommonCards/Cards';

const People = () => {
    const fetchPeople = async () => {
        const res = await fetch('https://swapi.dev/api/people/');
        return res.json();
    }

    const { data, status } = useQuery('people', fetchPeople);

    const renderData = (data) => {
        return <Cards detailedData={data.results} />
    }

    const getStatus = (status) => {
        return (
            status === 'loading' ?
                <h2>
                    Loading data...
                </h2>
                : 
                status === 'error' ?
                <h2>
                    Error while Fetching
                </h2>
                :
                <div>
                    {renderData(data)}
                </div>
        )
    }
    return (
        <div>
            <h2>People</h2>
            {getStatus(status)}
        </div>
    )
}

export default People;
