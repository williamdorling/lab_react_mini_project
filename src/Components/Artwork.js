import { useEffect, useState } from "react";

const Artwork = ({artwork}) => {

    const [inspecting, setInspecting] = useState(false);

    const handleClick = (e) => {
        e.target.innerHTML =
        <>
            <h2>{artwork.title}</h2>
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
        </>
    }

    const handleClickTest = (e) => {
        console.log(e.target);
    }

    const handleClick2 = () => {
        setInspecting(!inspecting) 
    }

    return ( 
        <>           
            {/* <img src={artwork.primaryImageSmall}
                loading="lazy"
                alt={artwork.title + " by "+ artwork.artistDisplayName}
                onClick={handleClick2}
                /> */}
            {inspecting ? 
            <div className="artwork-details">
                <img src={artwork.primaryImageSmall}
                    loading="lazy"
                    alt={artwork.title + " by "+ artwork.artistDisplayName}
                    onClick={handleClick2}
                    />                    
                <div className="text"
                onClick={handleClick2}>
                    <h2 >{artwork.title}</h2>
                    <p>{artwork.objectDate}</p>
                    <p>{artwork.medium}</p>
                    <p>{artwork.dimensions}</p>
                    <p>{artwork.geographyType}</p>
                    {artwork.artistDisplayName !== "" ?
                    <a href ={artwork.artistWikidata_URL} target="_blank">{artwork.artistDisplayName}, {artwork.artistBeginDate} - {artwork.artistEndDate} </a>
                    : <p>Artist unknown</p>}
                    
                    <p>{artwork.rightsAndReproduction}</p>
                </div>
            </div>
            : 
            <div className="artwork-image">
                <img src={artwork.primaryImageSmall}
                    loading="lazy"
                    alt={artwork.title + " by "+ artwork.artistDisplayName}
                    onClick={handleClick2}
                    />
            </div>
            }
        
        </>
        );   
}
 
export default Artwork;