import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios';
import CharactersCards from './CharactersCards'

const Body = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect (() => {
        const fetchItems = async () => {
            const dataResult = await axios.get(`https://www.breakingbadapi.com/api/characters`)
            console.log(dataResult.data);
            setItems(dataResult.data);
            setIsLoading(false);  // loading finished after getting Data so we set it to false
        }
        fetchItems()
    },[])

    return (
        <Fragment>
            <CharactersCards isLoading={isLoading} items={items} />
        </Fragment>
    )
}   

export default Body