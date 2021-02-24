import React from 'react';

const Map = () => {
    return (
        <>
            <h2>nasza lokalizacja</h2>
            <div className={'map'}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.473528866901!2d19.452689620980575!3d51.74880047921168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4964d7457b5f7e5!2sWydzia%C5%82%20Fizyki%20Technicznej%2C%20Informatyki%20i%20Matematyki%20Stosowanej%20Politechniki%20%C5%81%C3%B3dzkiej!5e0!3m2!1spl!2spl!4v1613998671206!5m2!1spl!2spl"
                    width="600" height="450" allowFullScreen=""/>
            </div>
        </>
    )
}

export default Map;