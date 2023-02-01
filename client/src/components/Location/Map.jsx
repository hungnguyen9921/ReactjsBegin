import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import {
      Combobox,
      ComboboxInput,
      ComboboxPopover,
      ComboboxList,
      ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import Loading from '../Loading/Loading';

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
            googleMapsApiKey: 'AIzaSyB9FkHGUJ76iocGxhJe6jxK_cW8xCn60AI',
      });

      const [map, setMap] = React.useState(null);

      // const onLoad = React.useCallback(function callback(map) {
      //       const bounds = new window.google.maps.LatLngBounds(center);
      //       map.fitBounds(bounds);
      //       setMap(map);
      // }, []);

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
                        // onLoad={onLoad}
                        onUnmount={onUnmount}
                        zoom={12}
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
