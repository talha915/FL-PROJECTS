import '../../App.css';
import { Fragment } from "react";

const Cards = (props) => {

    const getCards = () => {
        const { detailedData } = props;
        let results = detailedData.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <h3>{item.name}</h3>
                    {item.population ?
                    <Fragment> 
                        <p>Population - {item.population}</p>
                        <p>climate - {item.climate}</p>
                    </Fragment>
                    :
                    <Fragment> 
                        <p>Height - {item.height}</p>
                        <p>Birth Year - {item.birth_year}</p>
                    </Fragment>}

                </div>
            );
        });
        return results;
    }

    return (
        <Fragment>
            {getCards()}
        </Fragment>     
    )
}
export default Cards;
