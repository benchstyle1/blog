<template>
  <div ref="location" style="width: 500px; height: 500px"></div>
</template>

<script>
import {Circle, Fill, Style} from 'ol/style';
import {Feature, Map, Overlay, View} from 'ol/index';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Point} from 'ol/geom';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {useGeographic} from 'ol/proj';
import "ol/ol.css";

export default {
  name: "Location",
  props: {
    geo: {
      type: Object,
    },
  },
  mounted() {
    useGeographic();
    let coordinates = [this.geo.lng, this.geo.lat];
    let point = new Point(coordinates);
    new Map({
      target: this.$refs["location"],
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [new Feature(point)],
          }),
          style: new Style({
            image: new Circle({
              radius: 6,
              fill: new Fill({ color: "red" }),
            }),
          }),
        }),
      ],

      view: new View({
        zoom: 4,
        center: coordinates,
        constrainResolution: true,
      }),
    });
  },
};
</script>

