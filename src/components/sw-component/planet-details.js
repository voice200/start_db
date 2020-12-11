import ItemDetails, {Record} from "../item-details";
import React from "react";
import WithSwapiService from '../hoc-helper/with-swapi-service';

 const PlanetDetails = (props) =>{
     return (
         <ItemDetails
             {...props}
         >
             <Record field="population" label="Population"/>
             <Record field="rotationPeriod" label="Rotation period"/>
             <Record field="diameter" label="Diameter"/>
         </ItemDetails>
     );
}
const mapMethodsToProps = (swapiService)=>{
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default WithSwapiService(mapMethodsToProps)(PlanetDetails);