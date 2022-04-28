import React from 'react'
import CharactersItems from './CharactersItems'
import Spinner from './Spinner'

const CharactersCards = ({isLoading, items}) => {
    return isLoading ? (<Spinner />) : 
        (<section className="cards">
            {items.map(item => (
                    <CharactersItems key={item.char_id} item={item} />
                )
            )}
    </section>)
}

export default CharactersCards
