# NASA Meteorite Visualizer

## Tutorial

### Requirements

Google Chrome Browser

A Code Editor

### Steps

1. [index.html](https://git.io/vVFsi) setup basic html5 launcher page
1. [index.html](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-1...step-2) import d3, topojson, and moment libraries
1. [index.html](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-2...step-3) stub and link `./css/styles.css`
1. [index.html](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-3...step-4) stub and import `./js/meteorites.js`
1. [styles.css](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-4...step-5) set the background color
1. [world-50m.json](https://git.io/vVFGz) save `world` data json file to `./data/` directory as `./data/world-50m.json`
1. [meteorites.js](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-6...step-7) add initial variables and script to render d3.geo.mercator map with land, projection, and graticule using the `world-50m.json` data file.
1. [styles.css](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-7...step-8) add styles for map
1. [meteorites.js d3.json(-->world)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-8...step-9) use d3 to load json formatted meteorite data from https://data.nasa.gov _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-9...step-10) create coordinates by filtering out data from `features` that do not have `geometry` _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-10...step-11) filter coordinates further by only including geometry with `type` `"Point"` _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-11...step-12) generate formatted data needed by d3 in the format `{ date, lat, long }` from the filtered coordinates _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-12...step-13) sort the resulting coordinate data by `year` in `ascending` order _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-13...step-14) create then invoke a function named `showMeteorites()` that will add svg elements for each meteorite projected on the map
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-14...step-15) (above `showMeteorites()`) generate a new array of unique years from the years in `coordinates` _look at data_
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-15...step-16)
    1. track the `curYearIdx` by setting it to `0`
    1. initialize `curYear`
    1. (inside `showMeteorites()`) display curYear in the `yearLabel` svg element
1. [meteorites.js d3.json(-->meteorites)](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-16...step-17)
    1. initialize a new array named `coordsThisYear`
    1. in the `showMeteorites()` function, set `coordsThisYear` to the `coordinates` that belong to the current year
    1. then set the `fallingMeteorites` data to `coordsThisYear`
1. [meteorites.js showMeteorites()](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-17...step-18)
    1. before `fallingMeteorites`, remove all previous `star-container` elements.
    1. before the end of `showMeteorites()` conditionally increment `curYearIdx`, looping through the years.
    1. set `curYear` to the new `curYearIdx`.
    1. add a `setTimeout` to invoke `showMetorites` again
    1. (after the `showMeteorites()` function) replace the initial invocation with a `1000` ms delay.
1. [meteorites.js fallingMeteorites.enter()](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-18...step-19) replace the white circle with a shape (svg `path`) of a falling meteorite from http://codepen.io/nakaz/pen/dMdPmZ
1. [meteorites.js fallingMeteorites.enter()] add a `star` class attribute to the new svg path
    1. [styles.css](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-19...step-20) add styles and animation to the "falling star"
1. [styles.css](https://github.com/devleague/NASA-Meteorite-Visualizer/compare/step-20...step-21) style the `.year-label` text

### Extending and Experimentation

add more animation delays in css (hint, `nth-child(__)`)

display the names of each meteorite!

make each meteorite render a different size based on it's actual size
