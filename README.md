# Netlume App
This is a simpe app where the map elements are gotten from a geojson data and displayed on the map,
- it has a button filter (i made only two buttons which are prominent than the others)
- it has a pop up feature
-  
# Usage
- `yarn install`
- `yarn start`
- go to this route `/mapview`
- 
# Requirements
- [x] You should use Leaflet.js and/or React Leaflet libraries to build the map component.
- [x] User should be able to see all map elements in a default color.
- [x] User should be able to toggle a switch/click a button to see all map elements with the custom color defined in the color property of each GeoJSONFeature properties object.
- [x] When a given map element is hovered, the map element should be highlighted so the user can identify an individual map element.
- [x] When a given map element is clicked, a popup displays the data inside the info property of each GeoJSONFeature and the its uuid.
- [ ] The map should automatically center on the map elements upon initialization.
