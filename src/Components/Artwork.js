import { useEffect, useState } from "react";

const Artwork = ({artwork}) => {

    if (!artwork.artistDisplayName){
        return ( 
            <>
                <h2>{artwork.title}</h2>
                <img src={artwork.primaryImageSmall}/>
                <p>Artist unknown</p>
                <p>{artwork.objectDate}</p>
                <p>{artwork.objectWikidata_URL}</p>
                <p>{artwork.region}, {artwork.country}</p>
                <p>{artwork.medium}</p>
                <p>{artwork.dimensions}</p>
                <p>{artwork.geographyType}</p>
                <p>{artwork.artistDisplayName}, {artwork.artistNationality}, {artwork.artistBeginDate} - {artwork.artistEndDate}</p>
                <p>{artwork.artistWikidata_URL}</p>
                <p>{artwork.linkResource}</p>
                <p>{artwork.rightsAndReproduction}</p>
                <hr/>
            </>
         );
    }  else {
        return ( 
            <>
                <h2>{artwork.title}</h2>
                <img src={artwork.primaryImageSmall}/>
                <p>{artwork.objectDate}</p>
                <p>{artwork.objectWikidata_URL}</p>
                <p>{artwork.region}, {artwork.country}</p>
                <p>{artwork.medium}</p>
                <p>{artwork.dimensions}</p>
                <p>{artwork.geographyType}</p>
                <p>{artwork.artistDisplayName}, {artwork.artistNationality}, {artwork.artistBeginDate} - {artwork.artistEndDate}</p>
                <p>{artwork.artistWikidata_URL}</p>
                <p>{artwork.linkResource}</p>
                <p>{artwork.rightsAndReproduction}</p>
                <hr/>
            </>
         );
    }

    
}
 
export default Artwork;