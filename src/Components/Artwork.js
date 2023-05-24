import { useEffect, useState } from "react";

const Artwork = ({artworkID, artistFilter, centuryFilter, addToCultures, cultureFilter, addToMediums, mediumFilter, mediumSearchFilter}) => {

    const [artwork, setArtwork] = useState(0);
    const [inspecting, setInspecting] = useState(false);

    const SERVER_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

    useEffect (() => {
        const fetchArtwork = async () => {
            const response = await fetch(`${SERVER_URL}/${artworkID}`);
            if(response.ok){
                const data = await response.json();
                setArtwork(data);
            }
        }
        fetchArtwork();
    }, [])

    const handleClick = () => {
        setInspecting(!inspecting) 
    }

    if (artwork.primaryImageSmall){
        addToCultures(artwork.culture);
    }

    if (artwork.primaryImageSmall){
        addToMediums(artwork.medium);
    }

    const centuryUpperBound = centuryFilter * 100;
    const centuryLowerBound = centuryFilter === 0 ? -1/0 : (centuryFilter-1) * 100;

    const isInRange = centuryFilter === null || centuryFilter === "Select century" || ((centuryLowerBound <= artwork.objectEndDate) && (centuryUpperBound > artwork.objectBeginDate));
    const isCulture = cultureFilter === null || cultureFilter === undefined || cultureFilter ==="Select culture" || artwork.culture === cultureFilter;
    const isMedium = mediumFilter === null || mediumFilter === undefined || mediumFilter ==="Select medium" || artwork.medium === mediumFilter;

    if(artwork.primaryImageSmall !== "" 
        && artwork.primaryImageSmall !== undefined
        && artwork.artistDisplayName.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(artistFilter)
        && isCulture
        && isInRange
        && isMedium
        && artwork.medium.toLowerCase().includes(mediumSearchFilter)
        ){
        return ( 
            <>           
                {inspecting ? 
                <div className="artwork-details">
                    <img src={artwork.primaryImageSmall}
                        loading="lazy"
                        alt={artwork.title + " by "+ artwork.artistDisplayName}
                        onClick={handleClick}
                        />                    
                    <div className="text"
                    onClick={handleClick}>
                        <h2 >{artwork.title}</h2>
                        <p>Date: {artwork.objectDate}</p>
                        <p>Medium: {artwork.medium}</p>
                        <p>Dimensions: {artwork.dimensions}</p>
                        {artwork.artistDisplayName !== "" ?
                        <a href ={artwork.artistWikidata_URL} target="_blank">{artwork.artistDisplayName}, {artwork.artistBeginDate} - {artwork.artistEndDate} </a>
                        : <p>Artist unknown</p>}
                        
                        <p className="rights">{artwork.rightsAndReproduction}</p>
                    </div>
                </div>
                : 
                <div className="artwork-image">
                    <img src={artwork.primaryImageSmall}
                        loading="lazy"
                        alt={artwork.title + " by "+ artwork.artistDisplayName}
                        onClick={handleClick}
                        />
                </div>
                }
            </>
            );
    }   
}
 
export default Artwork;