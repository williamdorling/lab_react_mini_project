import { useEffect, useState } from "react";
import ArtworkForm from "../Components/ArtworkForm";
import ArtworkList from "../Components/ArtworkList";

const ArtworkContainer = () => {

    const SERVER_URL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"

    const [artworks, setArtworks] = useState([]);

    useEffect (() => {
        const fetchArtworks = async () => {
            const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=e&medium=Paintings&isHighlight=true");
            const data = await response.json();
            let id;
            let artworkList = []
            for (id of data.objectIDs){
                const response = await fetch(`${SERVER_URL}/${id}`);
                const data = await response.json();
                if (data.primaryImageSmall !== ""){
                   artworkList.push(data);
                }
            }
            setArtworks(artworkList);
        }
        fetchArtworks();    
    }, [])

    return ( 
        <div className="container">
            <h1>Hello from container</h1>
            <ArtworkForm />
            <ArtworkList artworks={artworks}/>
        </div>
     );
}
 
export default ArtworkContainer;