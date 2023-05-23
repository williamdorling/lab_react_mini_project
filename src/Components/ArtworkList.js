import Artwork from "./Artwork";

const ArtworkList = ({artworks}) => {

    const filteredArtworks = artworks.filter((artwork) => artwork.title && artwork.primaryImageSmall)

    const artworkComponents = filteredArtworks.map((artwork) => {
        return <Artwork artwork={artwork}/>
    })

    return ( 
        <>
            {artworkComponents}
        </>
     );
}
 
export default ArtworkList;