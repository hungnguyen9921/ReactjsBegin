import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Loading from '../Loading/Loading';
import axios from 'axios';

const containerStyle = {
      width: '100%',
      height: '400px',
      overflow: 'hidden',
};

const center = {
      lat: 10.77653,
      lng: 106.700981,
};

function Map() {
      const value = useRef();

      const { isLoaded } = useJsApiLoader({
            id: 'google-map-script',
            googleMapsApiKey: 'AIzaSyB6t74K1wITNrEsgI6T2djPdn7S8BktLLU',
      });

      const [map, setMap] = React.useState(null);

      const onLoad = React.useCallback(function callback(map) {
            const bounds = new window.google.maps.LatLngBounds(center);
            map.fitBounds(bounds);
            setMap(map);
      }, []);

      const onUnmount = React.useCallback(function callback(map) {
            setMap(null);
      }, []);

      return isLoaded ? (
            <>
                  <div className="py-[10px]">
                        <input
                              className="pl-[5px] pr-[20px] text-[14px] py-[8px] border-2 rounded w-full "
                              type="text"
                              placeholder=""
                              ref={value}
                        />
                  </div>
                  <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={1}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        disableDefaultUI={true}
                  >
                        <></>
                  </GoogleMap>
            </>
      ) : (
            <Loading />
      );
}

export default React.memo(Map);