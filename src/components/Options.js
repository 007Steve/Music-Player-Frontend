import React from 'react'
import '../styles/Options.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Options() {
    return (
        <div className="options">
            <button className="options__btn">Lyrics</button>
            <MoreHorizIcon className="options__icon"/>
        </div>
    )
}

export default Options
