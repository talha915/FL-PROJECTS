import '../../App.css';
import { Fragment } from "react";

const Cards = (props) => {

    const getCards = () => {
        const { detailedData } = props;
        let results = detailedData.map((item, index) => {
            return (
                <div className="card" key={index}>
                    <h3>{item.name}</h3>
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
