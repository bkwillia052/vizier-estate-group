import React, {useState, useEffect, useMemo} from 'react';
import {useHistory} from 'react-router-dom';


const HomePage = ({...props}) => {

    const history = useHistory()

    useEffect(() => {
        history.push('/act-now')
    })

    return (
        <>
        <div style={{height: '100vh'}}></div>
        </>
    )
}

export default HomePage