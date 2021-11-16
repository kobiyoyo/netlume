/* eslint-disable camelcase */

export type GeoTypeProps = 'FeatureCollection' | 'Feature' | 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon' | 'GeometryCollection';
export type FeatureProps = {
  type: GeoTypeProps;
  geometry: {
      type: GeoTypeProps;
      coordinates: number[][];
  };
  properties: {
    color: string;
    info:{
      diameter: number;
      length: number
    };
    parent_uuid: string;
    uuid: string;
  }
}
export type GeojsonFeatureProps = {
  type: GeoTypeProps;
  features: (FeatureProps)[];
};
