import { useEffect, useState } from "react";
import ArtworkForm from "../Components/ArtworkForm";
// import ArtworkList from "../Components/ArtworkList";
import Artwork from "../Components/Artwork";

const ArtworkContainer = () => {

    const SERVER_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"

    const [artworks, setArtworks] = useState([]);
    const [artworkIDs, setArtworkIDs] = useState([]);
    const [artistFilter, setArtistFilter] = useState("");
    const [centuryFilter, setCenturyFilter] = useState(null);
    const [cultures, setCultures] = useState([]);
    const [cultureFilter, setCultureFilter] = useState(null);

    // useEffect (() => {
    //     const fetchArtworks = async () => {
    //         const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=e&medium=Paintings&isHighlight=true");
    //         const data = await response.json();
    //         let id;
    //         let artworkList = []
    //         for (id of data.objectIDs){
    //             const response = await fetch(`${SERVER_URL}/${id}`);
    //             const data = await response.json();
    //             if (data.primaryImageSmall !== ""){
    //                artworkList.push(data);
    //             }
    //         }
    //         setArtworks(artworkList);
    //     }
    //     fetchArtworks();    
    // }, [])

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

    const artworkIDComponents = artworkIDs.map((artworkID) => {
        return <Artwork 
                artworkID={artworkID} 
                artistFilter={artistFilter} 
                centuryFilter={centuryFilter}
                addToCultures={addToCultures}
                cultureFilter={cultureFilter}/>
    })

    return ( 
        <div className="container">
            <ArtworkForm setArtistFilter={setArtistFilter} setCenturyFilter={setCenturyFilter} cultures={cultures} setCultureFilter={setCultureFilter}/>
            {/* <ArtworkList artworks={artworks}/> */}
            {/* <ArtworkList artworkIDs={artworkIDs}/> */}
            <div className="artwork-list">
                {artworkIDComponents}
            </div>
        </div>
     );
}
 
export default ArtworkContainer;