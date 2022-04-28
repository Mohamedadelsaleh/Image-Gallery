import React, {Fragment, useState, useEffect} from 'react'
import axios from 'axios';
import CharactersCards from './CharactersCards'
import Searching from './Searching'

const Body = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [params, setParams] = useState("")

    useEffect (() => {
        const fetchItems = async () => {
            const dataResult = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${params}`)
            setItems(dataResult.data);
            setIsLoading(false);  // loading finished after getting Data so we set it to false
        }
        fetchItems()
    },[params])


    return (
        <Fragment>
            <Searching getSearchItem={(searchingValue)=>{setParams(searchingValue)}} />
            <CharactersCards isLoading={isLoading} items={items} />
        </Fragment>
    )
}   

export default Body