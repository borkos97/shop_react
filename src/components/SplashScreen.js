import React, {useEffect} from 'react';
import splash from '../images/loading.gif'


const SplashScreen = ({ setIsLoading }) => {

    const divStyle = {
        backgroundColor: '#ddd',
        width: '100%',
        height: '100vh'
    }

    const imgStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }, [])

    return (
        <div style={divStyle}>
            <img src={splash} alt='splash-screen' style={imgStyle} />
        </div>
    )

}

export default SplashScreen;