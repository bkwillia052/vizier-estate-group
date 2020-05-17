import React, {useState, useEffect, useMemo} from 'react';
import {useHistory} from 'react-router-dom';


const HomePage = ({...props}) => {

    const history = useHistory()

    useEffect(() => {
        history.push('/act-now')
    })

    return (
        <>
        <div className='home-ctr' style={{height: '100vh'}}>
            <nav className="home-nav">

            </nav>
        </div>
        </>
    )
}

export default HomePage