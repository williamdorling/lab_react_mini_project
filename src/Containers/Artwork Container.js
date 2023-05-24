import { useEffect, useState } from "react";
import ArtworkForm from "../Components/ArtworkForm";
import Artwork from "../Components/Artwork";

const ArtworkContainer = () => {

    const [artworkIDs, setArtworkIDs] = useState([]);
    const [artistFilter, setArtistFilter] = useState("");
    const [centuryFilter, setCenturyFilter] = useState(null);
    const [cultures, setCultures] = useState([]);
    const [cultureFilter, setCultureFilter] = useState(null);
    const [mediums, setMediums] = useState([]);
    const [mediumFilter, setMediumFilter] = useState(null);
    const [mediumSearchFilter, setMediumSearchFilter] = useState("");


    useEffect (() => {
        const fetchArtworkIDs = async () => {
            const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=z&medium=Paintings");
            const data = await response.json();
            setArtworkIDs(data.objectIDs)
        }
        fetchArtworkIDs();
    }, [])


    const addToCultures = (newCulture) =>{
        if (!cultures.includes(newCulture) && newCulture !== "" && newCulture!==undefined){
            setCultures([...cultures, newCulture])
        }
    }

    const addToMediums = (newMedium) =>{
        if (!mediums.includes(newMedium) && newMedium !== "" && newMedium!==undefined){
            setMediums([...mediums, newMedium])
        }
    }


    const artworkIDComponents = artworkIDs.map((artworkID) => {
        return <Artwork 
                artworkID={artworkID} 
                artistFilter={artistFilter} 
                centuryFilter={centuryFilter}
                addToCultures={addToCultures}
                cultureFilter={cultureFilter}
                addToMediums={addToMediums}
                mediumFilter={mediumFilter}
                mediumSearchFilter={mediumSearchFilter}/>
    })

    return ( 
        <div className="container">
            <ArtworkForm setArtistFilter={setArtistFilter} 
                setCenturyFilter={setCenturyFilter} 
                cultures={cultures} 
                setCultureFilter={setCultureFilter}
                mediums={mediums}
                setMediumFilter={setMediumFilter}
                setMediumSearchFilter={setMediumSearchFilter}/>
            <div className="artwork-list">
                {artworkIDComponents}
            </div>
        </div>
     );
}
 
export default ArtworkContainer;