import { starkregenConstants } from "@cismet-dev/react-cismap-rainhazardmaps/constants";

const overridingBaseLayerConf = {};

const config = {
  animationSwitch: false,

  possibleModes: [starkregenConstants.SHOW_HEIGHTS],
  upperleftX: 780160.203, //take a depth3857.tif and run gdalinfo on it get the pixelsize and upperleftcorner info from there
  upperleftY: 6678245.042,
  pixelsize: 1.595781324768881,
  minAnimationZoom: 17,
  minFeatureInfoZoom: 19,
  rasterfariURL: "https://rain-rasterfari-wuppertal.cismet.de",
  modelWMS:
    "https://hochwasser-wuppertal.cismet.de/geoserver/wms?version=1.1.1",

  simulations: [
    {
      depthLayer: "wupp:HQ10-50",
      depthStyle: "wupp:depth",
      name: "HQ10-50",
      title: "10- bis 50-jähriges Hochwasser",
      icon: "bar-chart",
      subtitle:
        "Simulierte Wassertiefen für Überschwemmungsgebiete beim 10- bis 50-jährigen Hochwasser (hohe Wahrscheinlichkeit)",
    },
    {
      depthLayer: "wupp:HQ100",
      depthStyle: "wupp:depth",
      name: "HQ100",
      title: "100-jähriges Hochwasser",
      icon: "bar-chart",
      subtitle:
        "Simulierte Wassertiefen für Überschwemmungsgebiete beim 100-jährigen Hochwasser (mittlere Wahrscheinlichkeit)",
    },
    {
      depthLayer: "wupp:HQ500",
      depthStyle: "wupp:depth",
      name: "HQ500",
      title: "500-jähriges Hochwasser",
      icon: "bar-chart",
      subtitle:
        "Simulierte Wassertiefen für Überschwemmungsgebiete beim 500-jährigen Hochwasser (niedrige Wahrscheinlichkeit)",
    },
  ],
  backgrounds: [
    {
      layerkey: "hillshade|bplan_abkg@30|rvrGrundriss@20",
      src: "/hochwasser/images/rain-hazard-map-bg/topo.png",
      title: "Top. Karte",
    },
    {
      layerkey: "rvrGrundriss@100|trueOrtho2022@75|rvrSchriftNT@100",
      src: "/hochwasser/images/rain-hazard-map-bg/ortho.png",

      title: "Luftbildkarte",
    },
    {
      layerkey: "wupp-plan-live@40",
      src: "/hochwasser/images/rain-hazard-map-bg/citymap.png",
      title: "Stadtplan",
    },
  ],
  heightsLegend: [
    { title: "20 cm", lt: 0.1, bg: "#AFCFF9" },
    { title: "40 cm", lt: 0.3, bg: "#FED27B" },
    { title: "75 cm", lt: 0.5, bg: "#E9B279" },
    { title: "100 cm", lt: 1.0, bg: "#DD8C7B" },
  ],
};

const initialState = {
  displayMode: starkregenConstants.SHOW_HEIGHTS,
  modelLayerProblem: false,
  featureInfoModeActivated: false,
  currentFeatureInfoValue: undefined,
  currentFeatureInfoSelectedSimulation: undefined,
  currentFeatureInfoPosition: undefined,
  minifiedInfoBox: false,
  selectedSimulation: 0,
  backgroundLayer: undefined,
  selectedBackground: 0,
  animationEnabled: false,
};

export default { config, overridingBaseLayerConf, initialState };
