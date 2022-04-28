import React from 'react'
import Spinnerimg from '../images/spinner.gif'

const Spinner = () => {
    return (
        <img src={Spinnerimg} style={{width: '30%', margin: 'auto', display: 'block'}} alt="Loading" />
    )
}

export default Spinner