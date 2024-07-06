import React, { useEffect } from 'react';

const containerStyle = {
  width: '798px',
  height: '442px',
  borderRadius: '32px',
  overflow: 'hidden',
};

const Map = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=maps,marker&v=beta`;
    script.async = true;
    document.head.appendChild(script);

    window.initMap = function() {
      const map = document.createElement('gmp-map');
      map.setAttribute('center', '4.142566204071045,-73.64232635498047');
      map.setAttribute('zoom', '14');
      map.setAttribute('map-id', 'DEMO_MAP_ID');

      const marker = document.createElement('gmp-advanced-marker');
      marker.setAttribute('position', '4.142566204071045,-73.64232635498047');
      marker.setAttribute('title', 'My location');

      map.appendChild(marker);
      document.getElementById('map').appendChild(map);
    };

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <div id="map" style={containerStyle}>
      <div>Loading...</div>
    </div>
  );
};

export default Map;
