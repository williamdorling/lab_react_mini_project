import { useEffect, useState } from "react";

const Artwork = ({artworkID, artistFilter, centuryFilter, addToCultures, cultureFilter}) => {

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

    const centuryUpperBound = centuryFilter * 100;
    const centuryLowerBound = centuryFilter === 0 ? -10000000 : (centuryFilter-1) * 100;

    const isInRange = centuryFilter === null || centuryFilter === "Select century" || ((centuryLowerBound <= artwork.objectEndDate) && (centuryUpperBound > artwork.objectBeginDate));
    const isCulture = cultureFilter === null || cultureFilter === undefined || cultureFilter ==="Select culture" || artwork.culture === cultureFilter;

    if(artwork.primaryImageSmall !== "" 
        && artwork.primaryImageSmall !== undefined
        && artwork.artistDisplayName.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '').includes(artistFilter)
        && isCulture
        && isInRange
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
                        <p>{artwork.objectDate}</p>
                        <p>{artwork.medium}</p>
                        <p>{artwork.dimensions}</p>
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
                    {/* <p>{artwork.objectID}</p> */}
                </div>
                }
            </>
            );
    }   
}
 
export default Artwork;