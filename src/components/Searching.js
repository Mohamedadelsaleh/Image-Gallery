import React,{useState} from 'react'

const Searching = ({getSearchItem}) => {

    const [searchItem, setSearchItem] = useState('')

    const SearchingSchema = (searchingValue) => {
        setSearchItem(searchingValue);
        getSearchItem(searchingValue);
    }

    return (
        <section className="search">
            <from>
                <input  type="text" 
                        value={searchItem}
                        onChange={(e)=>SearchingSchema(e.target.value)}
                        className="form-control" 
                        placeholder="Search about your Character"/>
            </from>
        </section>
    )
}

export default Searching