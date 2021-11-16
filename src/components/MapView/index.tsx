/* eslint-disable func-names */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState, useEffect, useCallback } from 'react';
import {
  MapContainer, TileLayer, GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapViewStyle.css';
import geojsonFeature from './fakebackend.json';
import { GeojsonFeatureProps } from './types';

const MapView = function () {
  const filterColor = localStorage.getItem('color') ? localStorage.getItem('color') : '';
  const [mapData, setMapData] = useState({});
  const styleOptions = (color: string) => ({
    fillColor: color,
    weight: 2,
    opacity: 1,
    color,
    fillOpacity: 0.7,
    className: 'hoverElements',
  });
  const handleColor = useCallback((color: string) => {
    localStorage.setItem('color', color);
    window.location.reload();
  }, []);
  const popUpInfo = (uuid: string, diameter: number, length: number) => `id: ${uuid} <br/> diameter: ${diameter} <br/> length: ${length}`;
  const filterMapData = (feature: { properties: { color: string }}) => filterColor === '' || feature.properties?.color === filterColor;
  const onEachFeatureData = (feature: { properties: { color: string; uuid: string; info: { diameter: number; length: number} }}, layer: L.Layer) => {
    if (feature?.properties) {
      layer.bindTooltip(`Object: ${feature.properties?.color}`);
      layer.bindPopup(popUpInfo(feature.properties?.uuid, feature.properties?.info?.diameter, feature.properties?.info?.length));
    }
  };
  // I stubbled into an error when fetching data and dont know if its my browser
  // or not so i decided to copy the json file and use it directly.
  // you can as well review the code

  // useEffect(() => {
  //   const getMapData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/mapview');
  //       const data: GeojsonFeatureProps = await response.json();
  //       console.log(features.map((feature) => feature.properties.color));
  //       if (data) setMapData(data);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   getMapData();
  // }, []);
  useEffect(() => {
    const getMapData = () => { setMapData(geojsonFeature); };
    getMapData();
  }, []);
  return (
    <>
      <button onClick={() => handleColor('#fa0500')}>red</button>
      <button onClick={() => handleColor('#0030cf')}>blue</button>

      <MapContainer center={[11.989387, 8.531975]} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          filter={filterMapData}
          data={mapData as GeojsonFeatureProps}
          style={(feature) => styleOptions(feature?.properties.color)}
          onEachFeature={onEachFeatureData}
        />
      </MapContainer>
    </>
  );
};

export default MapView;
