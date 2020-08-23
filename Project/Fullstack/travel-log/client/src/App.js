import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './index.css';
import LogEntryForm from './components/LogEntryForm';

import { listLogEntries } from './API';

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [addEntryLocation, setAddEntryLocation] = useState(null);
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: -40.848461,
    longitude: 174.886,
    zoom: 5.3,
  });

  const getEntries = async () =>{
     const logEntries = await listLogEntries();
      setLogEntries(logEntries);
      // console.log(logEntries);
  };

  //making backend request
  useEffect(() => {
      getEntries();
  }, []);

  const showAddMarkerPopup = (event) => {
    const [longitude, latitude] = event.lngLat;
    setAddEntryLocation({
      latitude,
      longitude,
    });
  };

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/rogue-nin/cke5640f01jeo19mbw8p7clea"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={setViewport}
      onDblClick={showAddMarkerPopup}
    >
      {logEntries.map((entry) => (
        <React.Fragment key={entry._id}>
          <Marker
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-12}
            offsetTop={-24}
          >
            <div
              onClick={() =>
                setShowPopup({
                  // ...showPopup,
                  [entry._id]: true,
                })
              }
            >
              <img
                className="marker"
                style={{
                  width: `${6 * viewport.zoom}px`,
                  height: `${6 * viewport.zoom}px`,
                }}
                src="https://image.flaticon.com/icons/svg/1483/1483336.svg"
                alt="marker"
              />
            </div>
          </Marker>

          {showPopup[entry._id] ? (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setShowPopup({})}
              anchor="top"
            >
              <div className="popup">
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
                <p>{entry.comments}</p>
                <small>
                  Visited on: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
                {entry.image && <img src={entry.image} alt={entry.title} />}
              </div>
            </Popup>
          ) : null}
        </React.Fragment>
      ))}
      {addEntryLocation ? (
        <React.Fragment>
          <Marker
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            offsetLeft={-12}
            offsetTop={-24}
          >
            <div>
              <img
                className="globe-marker"
                style={{
                  width: `${6 * viewport.zoom}px`,
                  height: `${6 * viewport.zoom}px`,
                }}
                src="https://image.flaticon.com/icons/svg/3152/3152848.svg"
                alt="marker"
              />
            </div>
          </Marker>
          <Popup
            latitude={addEntryLocation.latitude}
            longitude={addEntryLocation.longitude}
            closeButton={true}
            closeOnClick={false}
            dynamicPosition={true}
            onClose={() => setAddEntryLocation(null)}
            anchor="top"
          >
            <div className="popup">
              <LogEntryForm onClose={() => {
                setAddEntryLocation(null);
                getEntries();
              }} location={addEntryLocation} />
            </div>
          </Popup>
        </React.Fragment>
      ) : null}
    </ReactMapGL>
  );
};
export default App;
