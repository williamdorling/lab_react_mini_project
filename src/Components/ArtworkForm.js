const ArtworkForm = ({setArtistFilter, setCenturyFilter, cultures, setCultureFilter}) => {

    const handleInput = (e) =>{
        setArtistFilter(e.target.value.toLowerCase())
    }

    const centuries = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].reverse();

    const centuryOptions = centuries.map( (century) => {
        return (<option key={century + "th"} value={century}>{(century-1)*100 + " - " + (((century)*100)-1)}</option>)
    })
    centuryOptions.push(<option key="B.C." value={0}>B.C.</option>)

    const cultureOptions = cultures.map((culture) => {
        return (<option key={culture} value={culture}>{culture}</option>)
    })
    
    const handleCenturyChange = (e) => {
        setCenturyFilter(e.target.value);
    }

    const handleCultureChange = (e) => {
        setCultureFilter(e.target.value);
    }

    return ( 
        <>
            <form action="">
                <input type="text" 
                    placeholder="Search for artist..." 
                    id="artist-search"
                    onInput={handleInput}/>
                
                <select onChange={handleCenturyChange} name="century" >
                    <option disabled-value={null}>Select century</option>
                    {centuryOptions}
                </select>

                <select onChange={handleCultureChange} name="culture" >
                    <option disabled-value={null}>Select culture</option>
                    {cultureOptions}
                </select>
            </form>
        </>
     );
}
 
export default ArtworkForm;