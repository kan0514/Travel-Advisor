import React from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import GoogleMapReact from 'google-map-react';
import tt from '@tomtom-international/web-sdk-maps';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';

const MAX_ZOOM=2
const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  const mapElement = useRef();
  const[mapLongitude,  setMapLongitude] =useState (-  121.91599 );
  const[mapLatitude, setMapLatitude] = useState(  37.36765  );  
  const[mapZoom , setMapZoom]=useState ( 13 ) ;
  const[map , setMap] = useState ( { } ) ;
  
  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
    setMapZoom (mapZoom + 1);
    }
  };
   
  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom (mapZoom - 1) ;
    }
   };

    const updateMap = () => {
    map.setCenter([parseFloat (mapLongitude), parseFloat (maplatitude)]);
    ma. setZoom (mapZoom);
    };

    useEffect (() => {
      let map = tt.map({
      key:"KXidPj9xGaJs5eOkqetIfNX82zk9NuQ7",
      container: mapElement. current,
       center: [mapLongitude, mapLatitude], 
       zoom: mapZoom
      });
      setMap (map);
      return () => map.remove ();
    },[]);

  return (
    <div className={classes.mapContainer}>
      <Input 
      type="text" 
      name="longitude" 
      value={maplongitude}
      onChange={(e) => setMapLongitude(e.target.value)}
      />
      
      

        {/* <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      > 
      <div ref ={mapElement} className='mapDiv'></div>
        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!matches
              ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img
                    className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  />
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
      </GoogleMapReact> */}
    </div>
      );
    };

export default Map ;
