import React from 'react'
import CharactersItems from './CharactersItems'

const CharactersCards = ({isLoading, items}) => {
    return isLoading ? (<h1>Loading...</h1>) : 
        (<section className="cards">
            {items.map(item => (
                    <CharactersItems key={item.char_id} item={item} />
                )
            )}
    </section>)
}

export default CharactersCards
