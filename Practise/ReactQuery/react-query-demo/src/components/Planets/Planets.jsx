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
            <div>
                Loading data...
            </div>
            : status === 'error' ?
            <div>
                Error while Fetching
            </div>
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
