import ItemDetails, {Record} from "../item-details";
import React from "react";
import WithSwapiService from '../hoc-helper/with-swapi-service';

const StarshipDetails = (props) =>{
    return (
        <ItemDetails
            {...props}
        >
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    );
}

const mapMethodsToProps = (swapiService) =>{
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
}

export default WithSwapiService(mapMethodsToProps)(StarshipDetails);