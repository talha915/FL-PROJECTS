import { useQuery } from 'react-query';
import Cards from '../CommonCards/Cards';

const Planets=()=> {

    const fetchPlanets = async()=> {
        const res = await fetch('https://swapi.dev/api/planets/');
        return res.json();
    }

    const {data, status} = useQuery('planets', fetchPlanets);

    const renderData=(data)=> {
        return <Cards detailedData={data.results} />
    }

    const getStatus=(status)=> {
        return(
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

    return(
        <div>
            <h2>Planets</h2>
            {getStatus(status)}
        </div>
    )
}

export default Planets;
