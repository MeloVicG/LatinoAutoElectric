import React from 'react';

const MapContainer = () => {
    var link = "https://www.google.com/maps/embed/v1/place?key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&q=Latinos+Auto+Electric+427+E+Anaheim+Street,Long+Beach,California&zoom=13"

    return (
        <div>
            <iframe width="600"
                title="Location Map Frame"
                height="350"
                frameBorder="0"
                style={{ border: 0 }}
                src={link}
                allowFullScreen>
            </iframe>
        </div>
    )
}


export default MapContainer;
