var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: "World Map",
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BelgaviBoundary_2 = new ol.format.GeoJSON();
var features_BelgaviBoundary_2 = format_BelgaviBoundary_2.readFeatures(json_BelgaviBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviBoundary_2.addFeatures(features_BelgaviBoundary_2);
var lyr_BelgaviBoundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviBoundary_2, 
                style: style_BelgaviBoundary_2,
                popuplayertitle: "Belgavi Boundary",
                interactive: true,
                title: '<img src="styles/legend/BelgaviBoundary_2.png" /> Belgavi Boundary'
            });
var format_BelgaviRailwayStn_3 = new ol.format.GeoJSON();
var features_BelgaviRailwayStn_3 = format_BelgaviRailwayStn_3.readFeatures(json_BelgaviRailwayStn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRailwayStn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRailwayStn_3.addFeatures(features_BelgaviRailwayStn_3);
var lyr_BelgaviRailwayStn_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRailwayStn_3, 
                style: style_BelgaviRailwayStn_3,
                popuplayertitle: "Belgavi Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/BelgaviRailwayStn_3.png" /> Belgavi Railway Stn'
            });
var format_BelgaviIndustries_4 = new ol.format.GeoJSON();
var features_BelgaviIndustries_4 = format_BelgaviIndustries_4.readFeatures(json_BelgaviIndustries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviIndustries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviIndustries_4.addFeatures(features_BelgaviIndustries_4);
var lyr_BelgaviIndustries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviIndustries_4, 
                style: style_BelgaviIndustries_4,
                popuplayertitle: "Belgavi Industries",
                interactive: true,
                title: '<img src="styles/legend/BelgaviIndustries_4.png" /> Belgavi Industries'
            });
var format_BelgaviOffice_5 = new ol.format.GeoJSON();
var features_BelgaviOffice_5 = format_BelgaviOffice_5.readFeatures(json_BelgaviOffice_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOffice_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOffice_5.addFeatures(features_BelgaviOffice_5);
var lyr_BelgaviOffice_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOffice_5, 
                style: style_BelgaviOffice_5,
                popuplayertitle: "Belgavi Office",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOffice_5.png" /> Belgavi Office'
            });
var format_BelgaviPSU_6 = new ol.format.GeoJSON();
var features_BelgaviPSU_6 = format_BelgaviPSU_6.readFeatures(json_BelgaviPSU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviPSU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviPSU_6.addFeatures(features_BelgaviPSU_6);
var lyr_BelgaviPSU_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviPSU_6, 
                style: style_BelgaviPSU_6,
                popuplayertitle: "Belgavi PSU",
                interactive: true,
                title: '<img src="styles/legend/BelgaviPSU_6.png" /> Belgavi PSU'
            });
var format_Education_7 = new ol.format.GeoJSON();
var features_Education_7 = format_Education_7.readFeatures(json_Education_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_7.addFeatures(features_Education_7);
var lyr_Education_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_7, 
                style: style_Education_7,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_7.png" /> Education'
            });
var format_Temple_8 = new ol.format.GeoJSON();
var features_Temple_8 = format_Temple_8.readFeatures(json_Temple_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temple_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temple_8.addFeatures(features_Temple_8);
var lyr_Temple_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Temple_8, 
                style: style_Temple_8,
                popuplayertitle: "Temple",
                interactive: true,
                title: '<img src="styles/legend/Temple_8.png" /> Temple'
            });
var format_BelgaviRWI_9 = new ol.format.GeoJSON();
var features_BelgaviRWI_9 = format_BelgaviRWI_9.readFeatures(json_BelgaviRWI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviRWI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviRWI_9.addFeatures(features_BelgaviRWI_9);
var lyr_BelgaviRWI_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviRWI_9, 
                style: style_BelgaviRWI_9,
                popuplayertitle: "Belgavi RWI",
                interactive: true,
    title: 'Belgavi RWI<br />\
    <img src="styles/legend/BelgaviRWI_9_0.png" /> -0.18 - 0.175<br />\
    <img src="styles/legend/BelgaviRWI_9_1.png" /> 0.175 - 0.225<br />\
    <img src="styles/legend/BelgaviRWI_9_2.png" /> 0.225 - 0.251<br />\
    <img src="styles/legend/BelgaviRWI_9_3.png" /> 0.251 - 0.367<br />\
    <img src="styles/legend/BelgaviRWI_9_4.png" /> 0.367 - 0.519<br />\
    <img src="styles/legend/BelgaviRWI_9_5.png" /> 0.519 - 0.582<br />\
    <img src="styles/legend/BelgaviRWI_9_6.png" /> 0.582 - 0.671<br />\
    <img src="styles/legend/BelgaviRWI_9_7.png" /> 0.671 - 0.774<br />\
    <img src="styles/legend/BelgaviRWI_9_8.png" /> 0.774 - 0.837<br />\
    <img src="styles/legend/BelgaviRWI_9_9.png" /> 0.837 - 0.89<br />\
    <img src="styles/legend/BelgaviRWI_9_10.png" /> 0.89 - 0.972<br />\
    <img src="styles/legend/BelgaviRWI_9_11.png" /> 0.972 - 1.354<br />\
    <img src="styles/legend/BelgaviRWI_9_12.png" /> 1.354 - 1.399<br />\
    <img src="styles/legend/BelgaviRWI_9_13.png" /> 1.399 - 1.478<br />\
    <img src="styles/legend/BelgaviRWI_9_14.png" /> 1.478 - 1.593<br />'
        });
var format_Belgavistats_10 = new ol.format.GeoJSON();
var features_Belgavistats_10 = format_Belgavistats_10.readFeatures(json_Belgavistats_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Belgavistats_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Belgavistats_10.addFeatures(features_Belgavistats_10);
var lyr_Belgavistats_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Belgavistats_10, 
                style: style_Belgavistats_10,
                popuplayertitle: "Belgavi stats",
                interactive: true,
                title: '<img src="styles/legend/Belgavistats_10.png" /> Belgavi stats'
            });
var format_BelgaviOverallPOI_11 = new ol.format.GeoJSON();
var features_BelgaviOverallPOI_11 = format_BelgaviOverallPOI_11.readFeatures(json_BelgaviOverallPOI_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviOverallPOI_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviOverallPOI_11.addFeatures(features_BelgaviOverallPOI_11);
var lyr_BelgaviOverallPOI_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviOverallPOI_11, 
                style: style_BelgaviOverallPOI_11,
                popuplayertitle: "Belgavi Overall POI",
                interactive: true,
                title: '<img src="styles/legend/BelgaviOverallPOI_11.png" /> Belgavi Overall POI'
            });
var format_BelgaviStopPopCoverage_12 = new ol.format.GeoJSON();
var features_BelgaviStopPopCoverage_12 = format_BelgaviStopPopCoverage_12.readFeatures(json_BelgaviStopPopCoverage_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BelgaviStopPopCoverage_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BelgaviStopPopCoverage_12.addFeatures(features_BelgaviStopPopCoverage_12);
var lyr_BelgaviStopPopCoverage_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BelgaviStopPopCoverage_12, 
                style: style_BelgaviStopPopCoverage_12,
                popuplayertitle: "Belgavi Stop Pop Coverage",
                interactive: true,
                title: '<img src="styles/legend/BelgaviStopPopCoverage_12.png" /> Belgavi Stop Pop Coverage'
            });
var format_KDWCBTRouteMtrs_13 = new ol.format.GeoJSON();
var features_KDWCBTRouteMtrs_13 = format_KDWCBTRouteMtrs_13.readFeatures(json_KDWCBTRouteMtrs_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDWCBTRouteMtrs_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDWCBTRouteMtrs_13.addFeatures(features_KDWCBTRouteMtrs_13);
var lyr_KDWCBTRouteMtrs_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDWCBTRouteMtrs_13, 
                style: style_KDWCBTRouteMtrs_13,
                popuplayertitle: "KDW CBT Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/KDWCBTRouteMtrs_13.png" /> KDW CBT Route Mtrs'
            });
var format_KDWCBTStops_14 = new ol.format.GeoJSON();
var features_KDWCBTStops_14 = format_KDWCBTStops_14.readFeatures(json_KDWCBTStops_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KDWCBTStops_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KDWCBTStops_14.addFeatures(features_KDWCBTStops_14);
var lyr_KDWCBTStops_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KDWCBTStops_14, 
                style: style_KDWCBTStops_14,
                popuplayertitle: "KDW CBT Stops",
                interactive: true,
    title: 'KDW CBT Stops<br />\
    <img src="styles/legend/KDWCBTStops_14_0.png" /> ASHOKA PLANT 2<br />\
    <img src="styles/legend/KDWCBTStops_14_1.png" /> CBT<br />\
    <img src="styles/legend/KDWCBTStops_14_2.png" /> COLLEGE ROAD<br />\
    <img src="styles/legend/KDWCBTStops_14_3.png" /> COURT<br />\
    <img src="styles/legend/KDWCBTStops_14_4.png" /> DSC<br />\
    <img src="styles/legend/KDWCBTStops_14_5.png" /> FISH MARKET<br />\
    <img src="styles/legend/KDWCBTStops_14_6.png" /> Kadarwadi<br />\
    <img src="styles/legend/KDWCBTStops_14_7.png" /> KHADARWADI CROSS<br />\
    <img src="styles/legend/KDWCBTStops_14_8.png" /> KHADARWADI-2 STOP<br />\
    <img src="styles/legend/KDWCBTStops_14_9.png" /> Majgaon cross 1<br />\
    <img src="styles/legend/KDWCBTStops_14_10.png" /> RAILWAY STATION<br />\
    <img src="styles/legend/KDWCBTStops_14_11.png" /> Rpd cross 1<br />\
    <img src="styles/legend/KDWCBTStops_14_12.png" /> RTO<br />\
    <img src="styles/legend/KDWCBTStops_14_13.png" /> Sardar Ground b/s<br />\
    <img src="styles/legend/KDWCBTStops_14_14.png" /> UDYAMBAGH<br />\
    <img src="styles/legend/KDWCBTStops_14_15.png" /> Udyambagh 1<br />\
    <img src="styles/legend/KDWCBTStops_14_16.png" /> <br />'
        });
var format_CBTKDWStopPop_15 = new ol.format.GeoJSON();
var features_CBTKDWStopPop_15 = format_CBTKDWStopPop_15.readFeatures(json_CBTKDWStopPop_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWStopPop_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWStopPop_15.addFeatures(features_CBTKDWStopPop_15);
var lyr_CBTKDWStopPop_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWStopPop_15, 
                style: style_CBTKDWStopPop_15,
                popuplayertitle: "CBT KDW Stop Pop",
                interactive: true,
    title: 'CBT KDW Stop Pop<br />\
    <img src="styles/legend/CBTKDWStopPop_15_0.png" /> 10 min<br />'
        });
var format_CBTKDWSuggestedStops_16 = new ol.format.GeoJSON();
var features_CBTKDWSuggestedStops_16 = format_CBTKDWSuggestedStops_16.readFeatures(json_CBTKDWSuggestedStops_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWSuggestedStops_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWSuggestedStops_16.addFeatures(features_CBTKDWSuggestedStops_16);
var lyr_CBTKDWSuggestedStops_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWSuggestedStops_16, 
                style: style_CBTKDWSuggestedStops_16,
                popuplayertitle: "CBT KDW Suggested Stops",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWSuggestedStops_16.png" /> CBT KDW Suggested Stops'
            });
var format_CBTKDWSuggestedStopPop_17 = new ol.format.GeoJSON();
var features_CBTKDWSuggestedStopPop_17 = format_CBTKDWSuggestedStopPop_17.readFeatures(json_CBTKDWSuggestedStopPop_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWSuggestedStopPop_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWSuggestedStopPop_17.addFeatures(features_CBTKDWSuggestedStopPop_17);
var lyr_CBTKDWSuggestedStopPop_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWSuggestedStopPop_17, 
                style: style_CBTKDWSuggestedStopPop_17,
                popuplayertitle: "CBT KDW Suggested Stop Pop",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWSuggestedStopPop_17.png" /> CBT KDW Suggested Stop Pop'
            });
var format_CBTKDWRtPop1000Mtrs_18 = new ol.format.GeoJSON();
var features_CBTKDWRtPop1000Mtrs_18 = format_CBTKDWRtPop1000Mtrs_18.readFeatures(json_CBTKDWRtPop1000Mtrs_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRtPop1000Mtrs_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRtPop1000Mtrs_18.addFeatures(features_CBTKDWRtPop1000Mtrs_18);
var lyr_CBTKDWRtPop1000Mtrs_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRtPop1000Mtrs_18, 
                style: style_CBTKDWRtPop1000Mtrs_18,
                popuplayertitle: "CBT KDW Rt Pop 1000 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWRtPop1000Mtrs_18.png" /> CBT KDW Rt Pop 1000 Mtrs'
            });
var format_CBTKDWRtPop500Mtrs_19 = new ol.format.GeoJSON();
var features_CBTKDWRtPop500Mtrs_19 = format_CBTKDWRtPop500Mtrs_19.readFeatures(json_CBTKDWRtPop500Mtrs_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRtPop500Mtrs_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRtPop500Mtrs_19.addFeatures(features_CBTKDWRtPop500Mtrs_19);
var lyr_CBTKDWRtPop500Mtrs_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRtPop500Mtrs_19, 
                style: style_CBTKDWRtPop500Mtrs_19,
                popuplayertitle: "CBT KDW Rt Pop 500 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWRtPop500Mtrs_19.png" /> CBT KDW Rt Pop 500 Mtrs'
            });
var format_CBTKDWRtPop250Mtrs_20 = new ol.format.GeoJSON();
var features_CBTKDWRtPop250Mtrs_20 = format_CBTKDWRtPop250Mtrs_20.readFeatures(json_CBTKDWRtPop250Mtrs_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRtPop250Mtrs_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRtPop250Mtrs_20.addFeatures(features_CBTKDWRtPop250Mtrs_20);
var lyr_CBTKDWRtPop250Mtrs_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRtPop250Mtrs_20, 
                style: style_CBTKDWRtPop250Mtrs_20,
                popuplayertitle: "CBT KDW Rt Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWRtPop250Mtrs_20.png" /> CBT KDW Rt Pop 250 Mtrs'
            });
var format_CBTKDWRWI_21 = new ol.format.GeoJSON();
var features_CBTKDWRWI_21 = format_CBTKDWRWI_21.readFeatures(json_CBTKDWRWI_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRWI_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRWI_21.addFeatures(features_CBTKDWRWI_21);
var lyr_CBTKDWRWI_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRWI_21, 
                style: style_CBTKDWRWI_21,
                popuplayertitle: "CBT KDW RWI",
                interactive: true,
    title: 'CBT KDW RWI<br />\
    <img src="styles/legend/CBTKDWRWI_21_0.png" /> 0.647 - 0.7174<br />\
    <img src="styles/legend/CBTKDWRWI_21_1.png" /> 0.7174 - 0.7878<br />\
    <img src="styles/legend/CBTKDWRWI_21_2.png" /> 0.7878 - 0.8582<br />\
    <img src="styles/legend/CBTKDWRWI_21_3.png" /> 0.8582 - 0.9286<br />\
    <img src="styles/legend/CBTKDWRWI_21_4.png" /> 0.9286 - 0.999<br />\
    <img src="styles/legend/CBTKDWRWI_21_5.png" /> 0.999 - 1.092<br />\
    <img src="styles/legend/CBTKDWRWI_21_6.png" /> 1.092 - 1.185<br />\
    <img src="styles/legend/CBTKDWRWI_21_7.png" /> 1.185 - 1.278<br />\
    <img src="styles/legend/CBTKDWRWI_21_8.png" /> 1.278 - 1.371<br />\
    <img src="styles/legend/CBTKDWRWI_21_9.png" /> 1.371 - 1.464<br />\
    <img src="styles/legend/CBTKDWRWI_21_10.png" /> 1.464 - 1.4682<br />\
    <img src="styles/legend/CBTKDWRWI_21_11.png" /> 1.4682 - 1.4724<br />\
    <img src="styles/legend/CBTKDWRWI_21_12.png" /> 1.4724 - 1.4766<br />\
    <img src="styles/legend/CBTKDWRWI_21_13.png" /> 1.4766 - 1.4808<br />\
    <img src="styles/legend/CBTKDWRWI_21_14.png" /> 1.4808 - 1.485<br />'
        });
var format_CBTKDWStopPopDissolved_22 = new ol.format.GeoJSON();
var features_CBTKDWStopPopDissolved_22 = format_CBTKDWStopPopDissolved_22.readFeatures(json_CBTKDWStopPopDissolved_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWStopPopDissolved_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWStopPopDissolved_22.addFeatures(features_CBTKDWStopPopDissolved_22);
var lyr_CBTKDWStopPopDissolved_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWStopPopDissolved_22, 
                style: style_CBTKDWStopPopDissolved_22,
                popuplayertitle: "CBT KDW Stop Pop Dissolved",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWStopPopDissolved_22.png" /> CBT KDW Stop Pop Dissolved'
            });
var format_CBTKDWRouteMtrs_23 = new ol.format.GeoJSON();
var features_CBTKDWRouteMtrs_23 = format_CBTKDWRouteMtrs_23.readFeatures(json_CBTKDWRouteMtrs_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRouteMtrs_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRouteMtrs_23.addFeatures(features_CBTKDWRouteMtrs_23);
var lyr_CBTKDWRouteMtrs_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRouteMtrs_23, 
                style: style_CBTKDWRouteMtrs_23,
                popuplayertitle: "CBT KDW Route Mtrs",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWRouteMtrs_23.png" /> CBT KDW Route Mtrs'
            });
var format_CBTKDWStops_24 = new ol.format.GeoJSON();
var features_CBTKDWStops_24 = format_CBTKDWStops_24.readFeatures(json_CBTKDWStops_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWStops_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWStops_24.addFeatures(features_CBTKDWStops_24);
var lyr_CBTKDWStops_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWStops_24, 
                style: style_CBTKDWStops_24,
                popuplayertitle: "CBT KDW Stops",
                interactive: true,
    title: 'CBT KDW Stops<br />\
    <img src="styles/legend/CBTKDWStops_24_0.png" /> ANGOL NAKA<br />\
    <img src="styles/legend/CBTKDWStops_24_1.png" /> ASHOKA PLANT 3<br />\
    <img src="styles/legend/CBTKDWStops_24_2.png" /> BEMCO<br />\
    <img src="styles/legend/CBTKDWStops_24_3.png" /> CBT<br />\
    <img src="styles/legend/CBTKDWStops_24_4.png" /> Court 1<br />\
    <img src="styles/legend/CBTKDWStops_24_5.png" /> Dsc 1<br />\
    <img src="styles/legend/CBTKDWStops_24_6.png" /> GOAVES<br />\
    <img src="styles/legend/CBTKDWStops_24_7.png" /> Kadarwadi<br />\
    <img src="styles/legend/CBTKDWStops_24_8.png" /> KHADARWADI-2 STOP<br />\
    <img src="styles/legend/CBTKDWStops_24_9.png" /> KOTEKERE<br />\
    <img src="styles/legend/CBTKDWStops_24_10.png" /> MAJGAON CROSS<br />\
    <img src="styles/legend/CBTKDWStops_24_11.png" /> RLS COLLEGE<br />\
    <img src="styles/legend/CBTKDWStops_24_12.png" /> RPD CROSS<br />\
    <img src="styles/legend/CBTKDWStops_24_13.png" /> Rst 1<br />\
    <img src="styles/legend/CBTKDWStops_24_14.png" /> Udyambagh 2<br />\
    <img src="styles/legend/CBTKDWStops_24_15.png" /> UTSAV HOTEL<br />\
    <img src="styles/legend/CBTKDWStops_24_16.png" /> <br />'
        });
var format_CBTKDWRoutePopMerged_25 = new ol.format.GeoJSON();
var features_CBTKDWRoutePopMerged_25 = format_CBTKDWRoutePopMerged_25.readFeatures(json_CBTKDWRoutePopMerged_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CBTKDWRoutePopMerged_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CBTKDWRoutePopMerged_25.addFeatures(features_CBTKDWRoutePopMerged_25);
var lyr_CBTKDWRoutePopMerged_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CBTKDWRoutePopMerged_25, 
                style: style_CBTKDWRoutePopMerged_25,
                popuplayertitle: "CBT KDW Route Pop Merged",
                interactive: true,
                title: '<img src="styles/legend/CBTKDWRoutePopMerged_25.png" /> CBT KDW Route Pop Merged'
            });

lyr_WorldMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BelgaviBoundary_2.setVisible(true);lyr_BelgaviRailwayStn_3.setVisible(true);lyr_BelgaviIndustries_4.setVisible(true);lyr_BelgaviOffice_5.setVisible(true);lyr_BelgaviPSU_6.setVisible(true);lyr_Education_7.setVisible(true);lyr_Temple_8.setVisible(true);lyr_BelgaviRWI_9.setVisible(true);lyr_Belgavistats_10.setVisible(true);lyr_BelgaviOverallPOI_11.setVisible(true);lyr_BelgaviStopPopCoverage_12.setVisible(true);lyr_KDWCBTRouteMtrs_13.setVisible(true);lyr_KDWCBTStops_14.setVisible(true);lyr_CBTKDWStopPop_15.setVisible(true);lyr_CBTKDWSuggestedStops_16.setVisible(true);lyr_CBTKDWSuggestedStopPop_17.setVisible(true);lyr_CBTKDWRtPop1000Mtrs_18.setVisible(true);lyr_CBTKDWRtPop500Mtrs_19.setVisible(true);lyr_CBTKDWRtPop250Mtrs_20.setVisible(true);lyr_CBTKDWRWI_21.setVisible(true);lyr_CBTKDWStopPopDissolved_22.setVisible(true);lyr_CBTKDWRouteMtrs_23.setVisible(true);lyr_CBTKDWStops_24.setVisible(true);lyr_CBTKDWRoutePopMerged_25.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_OpenStreetMap_1,lyr_BelgaviBoundary_2,lyr_BelgaviRailwayStn_3,lyr_BelgaviIndustries_4,lyr_BelgaviOffice_5,lyr_BelgaviPSU_6,lyr_Education_7,lyr_Temple_8,lyr_BelgaviRWI_9,lyr_Belgavistats_10,lyr_BelgaviOverallPOI_11,lyr_BelgaviStopPopCoverage_12,lyr_KDWCBTRouteMtrs_13,lyr_KDWCBTStops_14,lyr_CBTKDWStopPop_15,lyr_CBTKDWSuggestedStops_16,lyr_CBTKDWSuggestedStopPop_17,lyr_CBTKDWRtPop1000Mtrs_18,lyr_CBTKDWRtPop500Mtrs_19,lyr_CBTKDWRtPop250Mtrs_20,lyr_CBTKDWRWI_21,lyr_CBTKDWStopPopDissolved_22,lyr_CBTKDWRouteMtrs_23,lyr_CBTKDWStops_24,lyr_CBTKDWRoutePopMerged_25];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_BelgaviBoundary_2.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_BelgaviRailwayStn_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'shop': 'shop', 'aeroway': 'aeroway', 'railway': 'railway', 'self_servi': 'self_servi', 'operator': 'operator', 'fuel_diese': 'fuel_diese', 'fuel_Petro': 'fuel_Petro', 'brand_wiki': 'brand_wiki', 'brand': 'brand', 'building': 'building', 'name_kn': 'name_kn', 'name': 'name', 'public_tra': 'public_tra', 'highway': 'highway', 'taxi': 'taxi', 'traffic_si': 'traffic_si', 'official_n': 'official_n', 'addr_house': 'addr_house', 'alt_name': 'alt_name', 'shelter': 'shelter', 'bench': 'bench', 'check_date': 'check_date', 'supervised': 'supervised', 'opening_ho': 'opening_ho', 'voltage': 'voltage', 'frequency': 'frequency', 'electrifie': 'electrifie', 'maxheight': 'maxheight', 'brand_wi_1': 'brand_wi_1', 'wheelchair': 'wheelchair', 'flood_pron': 'flood_pron', 'access': 'access', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'name_en': 'name_en', 'local_ref': 'local_ref', 'surface': 'surface', 'crossing_m': 'crossing_m', 'bus': 'bus', 'crossing_b': 'crossing_b', 'wikidata': 'wikidata', 'network': 'network', 'internet_a': 'internet_a', 'website': 'website', 'phone': 'phone', 'designatio': 'designatio', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'exit_to': 'exit_to', 'ref': 'ref', 'payment_fa': 'payment_fa', 'payment_ca': 'payment_ca', 'currency_I': 'currency_I', 'junction': 'junction', 'traffic__1': 'traffic__1', 'button_ope': 'button_ope', 'traffic__2': 'traffic__2', 'loc_name': 'loc_name', 'crossing': 'crossing', 'traffic_ca': 'traffic_ca', 'barrier': 'barrier', 'name_mr': 'name_mr', 'traffic__3': 'traffic__3', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviIndustries_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', });
lyr_BelgaviOffice_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'office': 'office', 'level': 'level', 'wikidata': 'wikidata', 'name_kn': 'name_kn', 'name': 'name', 'landuse': 'landuse', 'government': 'government', 'wheelchair': 'wheelchair', 'website': 'website', 'smoking': 'smoking', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviPSU_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'phone': 'phone', 'name_kn': 'name_kn', 'name': 'name', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'police': 'police', 'operator_w': 'operator_w', 'operator': 'operator', 'addr_distr': 'addr_distr', 'type': 'type', 'building': 'building', 'layer': 'layer', 'path': 'path', });
lyr_Education_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'phone': 'phone', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_city': 'addr_city', 'barrier': 'barrier', 'name_etymo': 'name_etymo', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'name_ta': 'name_ta', 'name_hi': 'name_hi', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'website': 'website', 'email': 'email', 'alt_name': 'alt_name', 'type': 'type', 'layer': 'layer', 'path': 'path', });
lyr_Temple_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'religion': 'religion', 'amenity': 'amenity', 'check_date': 'check_date', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'descriptio': 'descriptio', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'name_kn': 'name_kn', 'name': 'name', 'start_date': 'start_date', 'historic': 'historic', 'building': 'building', 'landuse': 'landuse', 'layer': 'layer', 'path': 'path', });
lyr_BelgaviRWI_9.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_Belgavistats_10.set('fieldAliases', {'shapeName': 'shapeName', 'area': 'area', 'perimeter': 'perimeter', 'Area SqKm': 'Area SqKm', 'Peri KM': 'Peri KM', });
lyr_BelgaviOverallPOI_11.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', 'OverallPOI': 'OverallPOI', });
lyr_BelgaviStopPopCoverage_12.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'BelgaviPop': 'BelgaviPop', 'Coverage': 'Coverage', });
lyr_KDWCBTRouteMtrs_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_KDWCBTStops_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTKDWStopPop_15.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTKDWSuggestedStops_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_CBTKDWSuggestedStopPop_17.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_CBTKDWRtPop1000Mtrs_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTKDWRtPop500Mtrs_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTKDWRtPop250Mtrs_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTKDWRWI_21.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_CBTKDWStopPopDissolved_22.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Pax': 'Pax', 'Ridership%': 'Ridership%', });
lyr_CBTKDWRouteMtrs_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_CBTKDWStops_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_CBTKDWRoutePopMerged_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', 'layer': 'layer', 'Pax': 'Pax', 'Ridership': 'Ridership', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_BelgaviBoundary_2.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_BelgaviRailwayStn_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'shop': 'TextEdit', 'aeroway': 'TextEdit', 'railway': 'TextEdit', 'self_servi': 'TextEdit', 'operator': 'TextEdit', 'fuel_diese': 'TextEdit', 'fuel_Petro': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand': 'TextEdit', 'building': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'public_tra': 'TextEdit', 'highway': 'TextEdit', 'taxi': 'TextEdit', 'traffic_si': 'TextEdit', 'official_n': 'TextEdit', 'addr_house': 'TextEdit', 'alt_name': 'TextEdit', 'shelter': 'TextEdit', 'bench': 'TextEdit', 'check_date': 'TextEdit', 'supervised': 'TextEdit', 'opening_ho': 'TextEdit', 'voltage': 'TextEdit', 'frequency': 'TextEdit', 'electrifie': 'TextEdit', 'maxheight': 'TextEdit', 'brand_wi_1': 'TextEdit', 'wheelchair': 'TextEdit', 'flood_pron': 'TextEdit', 'access': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'name_en': 'TextEdit', 'local_ref': 'TextEdit', 'surface': 'TextEdit', 'crossing_m': 'TextEdit', 'bus': 'TextEdit', 'crossing_b': 'TextEdit', 'wikidata': 'TextEdit', 'network': 'TextEdit', 'internet_a': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'exit_to': 'TextEdit', 'ref': 'TextEdit', 'payment_fa': 'TextEdit', 'payment_ca': 'TextEdit', 'currency_I': 'TextEdit', 'junction': 'TextEdit', 'traffic__1': 'TextEdit', 'button_ope': 'TextEdit', 'traffic__2': 'TextEdit', 'loc_name': 'TextEdit', 'crossing': 'TextEdit', 'traffic_ca': 'TextEdit', 'barrier': 'TextEdit', 'name_mr': 'TextEdit', 'traffic__3': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviIndustries_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', });
lyr_BelgaviOffice_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'office': 'TextEdit', 'level': 'TextEdit', 'wikidata': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', 'government': 'TextEdit', 'wheelchair': 'TextEdit', 'website': 'TextEdit', 'smoking': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviPSU_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'phone': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'police': 'TextEdit', 'operator_w': 'TextEdit', 'operator': 'TextEdit', 'addr_distr': 'TextEdit', 'type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Education_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'phone': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', 'barrier': 'TextEdit', 'name_etymo': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'name_ta': 'TextEdit', 'name_hi': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'website': 'TextEdit', 'email': 'TextEdit', 'alt_name': 'TextEdit', 'type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Temple_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'religion': 'TextEdit', 'amenity': 'TextEdit', 'check_date': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'descriptio': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'name_kn': 'TextEdit', 'name': 'TextEdit', 'start_date': 'TextEdit', 'historic': 'TextEdit', 'building': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_BelgaviRWI_9.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_Belgavistats_10.set('fieldImages', {'shapeName': '', 'area': '', 'perimeter': '', 'Area SqKm': '', 'Peri KM': '', });
lyr_BelgaviOverallPOI_11.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', 'OverallPOI': 'Range', });
lyr_BelgaviStopPopCoverage_12.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'BelgaviPop': 'TextEdit', 'Coverage': 'TextEdit', });
lyr_KDWCBTRouteMtrs_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', });
lyr_KDWCBTStops_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTKDWStopPop_15.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTKDWSuggestedStops_16.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Drive Time': '', 'Bus Time': '', 'distance': '', 'angle': '', });
lyr_CBTKDWSuggestedStopPop_17.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_CBTKDWRtPop1000Mtrs_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTKDWRtPop500Mtrs_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTKDWRtPop250Mtrs_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_CBTKDWRWI_21.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', });
lyr_CBTKDWStopPopDissolved_22.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', 'Pax': 'TextEdit', 'Ridership%': 'TextEdit', });
lyr_CBTKDWRouteMtrs_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'Range', 'Bus Time': 'Range', });
lyr_CBTKDWStops_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CBTKDWRoutePopMerged_25.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'TextEdit', 'layer': 'TextEdit', 'Pax': 'Range', 'Ridership': 'TextEdit', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'hidden field', 'FIPS_10_': 'hidden field', 'ISO_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', });
lyr_BelgaviBoundary_2.set('fieldLabels', {'shapeName': 'header label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'hidden field', });
lyr_BelgaviRailwayStn_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'shop': 'hidden field', 'aeroway': 'hidden field', 'railway': 'hidden field', 'self_servi': 'hidden field', 'operator': 'hidden field', 'fuel_diese': 'hidden field', 'fuel_Petro': 'hidden field', 'brand_wiki': 'hidden field', 'brand': 'hidden field', 'building': 'hidden field', 'name_kn': 'hidden field', 'name': 'hidden field', 'public_tra': 'hidden field', 'highway': 'hidden field', 'taxi': 'hidden field', 'traffic_si': 'hidden field', 'official_n': 'hidden field', 'addr_house': 'hidden field', 'alt_name': 'hidden field', 'shelter': 'hidden field', 'bench': 'hidden field', 'check_date': 'hidden field', 'supervised': 'hidden field', 'opening_ho': 'hidden field', 'voltage': 'hidden field', 'frequency': 'hidden field', 'electrifie': 'hidden field', 'maxheight': 'hidden field', 'brand_wi_1': 'hidden field', 'wheelchair': 'hidden field', 'flood_pron': 'hidden field', 'access': 'hidden field', 'motor_vehi': 'hidden field', 'horse': 'hidden field', 'foot': 'hidden field', 'bicycle': 'hidden field', 'name_en': 'hidden field', 'local_ref': 'hidden field', 'surface': 'hidden field', 'crossing_m': 'hidden field', 'bus': 'hidden field', 'crossing_b': 'hidden field', 'wikidata': 'hidden field', 'network': 'hidden field', 'internet_a': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'designatio': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'exit_to': 'hidden field', 'ref': 'hidden field', 'payment_fa': 'hidden field', 'payment_ca': 'hidden field', 'currency_I': 'hidden field', 'junction': 'hidden field', 'traffic__1': 'hidden field', 'button_ope': 'hidden field', 'traffic__2': 'hidden field', 'loc_name': 'hidden field', 'crossing': 'hidden field', 'traffic_ca': 'hidden field', 'barrier': 'hidden field', 'name_mr': 'hidden field', 'traffic__3': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviIndustries_4.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'building': 'hidden field', 'name': 'header label - visible with data', });
lyr_BelgaviOffice_5.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'office': 'hidden field', 'level': 'hidden field', 'wikidata': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'landuse': 'hidden field', 'government': 'hidden field', 'wheelchair': 'hidden field', 'website': 'hidden field', 'smoking': 'hidden field', 'phone': 'hidden field', 'operator': 'hidden field', 'opening_ho': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviPSU_6.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'phone': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'police': 'hidden field', 'operator_w': 'hidden field', 'operator': 'hidden field', 'addr_distr': 'hidden field', 'type': 'hidden field', 'building': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Education_7.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'phone': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_house': 'hidden field', 'addr_city': 'hidden field', 'barrier': 'hidden field', 'name_etymo': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'name_ta': 'hidden field', 'name_hi': 'hidden field', 'wikipedia': 'hidden field', 'wikidata': 'hidden field', 'website': 'hidden field', 'email': 'hidden field', 'alt_name': 'hidden field', 'type': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Temple_8.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'religion': 'hidden field', 'amenity': 'hidden field', 'check_date': 'hidden field', 'addr_state': 'hidden field', 'addr_full': 'hidden field', 'descriptio': 'hidden field', 'addr_stree': 'hidden field', 'addr_postc': 'hidden field', 'addr_city': 'hidden field', 'name_kn': 'hidden field', 'name': 'header label - visible with data', 'start_date': 'hidden field', 'historic': 'hidden field', 'building': 'hidden field', 'landuse': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_BelgaviRWI_9.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'shapeName': 'inline label - visible with data', 'shapeISO': 'inline label - visible with data', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'header label - visible with data', });
lyr_Belgavistats_10.set('fieldLabels', {'shapeName': 'header label - visible with data', 'area': 'inline label - visible with data', 'perimeter': 'inline label - visible with data', 'Area SqKm': 'inline label - visible with data', 'Peri KM': 'inline label - visible with data', });
lyr_BelgaviOverallPOI_11.set('fieldLabels', {'shapeName': 'inline label - visible with data', 'shapeISO': 'hidden field', 'shapeID': 'hidden field', 'shapeGroup': 'hidden field', 'shapeType': 'inline label - visible with data', 'OverallPOI': 'header label - visible with data', });
lyr_BelgaviStopPopCoverage_12.set('fieldLabels', {'AA_MINS': 'hidden field', 'AA_MODE': 'hidden field', 'Pop': 'hidden field', 'BelgaviPop': 'hidden field', 'Coverage': 'hidden field', });
lyr_KDWCBTRouteMtrs_13.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'header label - visible with data', 'PREF': 'header label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', });
lyr_KDWCBTStops_14.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'inline label - visible with data', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'header label - visible with data', });
lyr_CBTKDWStopPop_15.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTKDWSuggestedStops_16.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'distance': 'inline label - visible with data', 'angle': 'hidden field', });
lyr_CBTKDWSuggestedStopPop_17.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_CBTKDWRtPop1000Mtrs_18.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTKDWRtPop500Mtrs_19.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTKDWRtPop250Mtrs_20.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_CBTKDWRWI_21.set('fieldLabels', {'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'rwi': 'header label - visible with data', 'error': 'hidden field', 'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', });
lyr_CBTKDWStopPopDissolved_22.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership%': 'header label - visible with data', });
lyr_CBTKDWRouteMtrs_23.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', });
lyr_CBTKDWStops_24.set('fieldLabels', {'Name': 'inline label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'header label - visible with data', 'path': 'hidden field', });
lyr_CBTKDWRoutePopMerged_25.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Pax': 'inline label - visible with data', 'Ridership': 'header label - visible with data', });
lyr_CBTKDWRoutePopMerged_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});