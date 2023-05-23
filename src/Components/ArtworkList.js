import Artwork from "./Artwork";

const ArtworkList = ({artworks}) => {

    const artworkComponents = artworks.map((artwork) => {
        return <Artwork artwork={artwork}/>
    })

    return ( 
        <>
            {artworkComponents}
        </>
     );
}
 
export default ArtworkList;