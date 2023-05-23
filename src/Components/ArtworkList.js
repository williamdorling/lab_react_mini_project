import Artwork from "./Artwork";

const ArtworkList = ({artworks}) => {

    const artworkComponents = artworks.map((artwork) => {
        return <Artwork artwork={artwork}/>
    })

    return ( 
        <div className="artwork-list">
            {artworkComponents}
        </div>
     );
}
 
export default ArtworkList;