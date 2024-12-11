var wms_layers = [];

var lyr_ZonadeinteresMapaMahates_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zona de interes Mapa Mahates",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ZonadeinteresMapaMahates_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8369933.721494, 1145654.601956, -8369553.327846, 1145975.876341]
                            })
                        });
var format_ArroyoGrande_1 = new ol.format.GeoJSON();
var features_ArroyoGrande_1 = format_ArroyoGrande_1.readFeatures(json_ArroyoGrande_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArroyoGrande_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArroyoGrande_1.addFeatures(features_ArroyoGrande_1);
var lyr_ArroyoGrande_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArroyoGrande_1, 
                style: style_ArroyoGrande_1,
                popuplayertitle: "Arroyo Grande",
                interactive: true,
                title: '<img src="styles/legend/ArroyoGrande_1.png" /> Arroyo Grande'
            });
var format_ZonadeInfluencia_2 = new ol.format.GeoJSON();
var features_ZonadeInfluencia_2 = format_ZonadeInfluencia_2.readFeatures(json_ZonadeInfluencia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonadeInfluencia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonadeInfluencia_2.addFeatures(features_ZonadeInfluencia_2);
var lyr_ZonadeInfluencia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonadeInfluencia_2, 
                style: style_ZonadeInfluencia_2,
                popuplayertitle: "Zona de Influencia",
                interactive: true,
                title: '<img src="styles/legend/ZonadeInfluencia_2.png" /> Zona de Influencia'
            });
var format_CasasEncuestadas_3 = new ol.format.GeoJSON();
var features_CasasEncuestadas_3 = format_CasasEncuestadas_3.readFeatures(json_CasasEncuestadas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasasEncuestadas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasasEncuestadas_3.addFeatures(features_CasasEncuestadas_3);
var lyr_CasasEncuestadas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CasasEncuestadas_3, 
                style: style_CasasEncuestadas_3,
                popuplayertitle: "Casas Encuestadas",
                interactive: true,
                title: '<img src="styles/legend/CasasEncuestadas_3.png" /> Casas Encuestadas'
            });

lyr_ZonadeinteresMapaMahates_0.setVisible(true);lyr_ArroyoGrande_1.setVisible(true);lyr_ZonadeInfluencia_2.setVisible(true);lyr_CasasEncuestadas_3.setVisible(true);
var layersList = [lyr_ZonadeinteresMapaMahates_0,lyr_ArroyoGrande_1,lyr_ZonadeInfluencia_2,lyr_CasasEncuestadas_3];
lyr_ArroyoGrande_1.set('fieldAliases', {'fid': 'fid', });
lyr_ZonadeInfluencia_2.set('fieldAliases', {'fid': 'fid', });
lyr_CasasEncuestadas_3.set('fieldAliases', {'fid': 'fid', 'Numero de personas en la vivienda': 'Numero de personas en la vivienda', 'Tiempo de residencia (años)': 'Tiempo de residencia (años)', 'Afectado por inundaciones': 'Afectado por inundaciones', 'Temporada de inundación': 'Temporada de inundación', 'Ha evacuado debido a inundaciones': 'Ha evacuado debido a inundaciones', 'Recibido ayuda/asistencia por parte del estado': 'Recibido ayuda/asistencia por parte del estado', 'Altura registrada en la zona (cm)': 'Altura registrada en la zona (cm)', 'Medidas tomadas para proteger su hogar': 'Medidas tomadas para proteger su hogar', 'Problemas que presenta su hogar': 'Problemas que presenta su hogar', 'Nivel de satistacción con la respuesta del gobierno': 'Nivel de satistacción con la respuesta del gobierno', 'Informado acerca de planes de emergencia': 'Informado acerca de planes de emergencia', 'Estrato': 'Estrato', });
lyr_ArroyoGrande_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_ZonadeInfluencia_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_CasasEncuestadas_3.set('fieldImages', {'fid': '', 'Numero de personas en la vivienda': '', 'Tiempo de residencia (años)': '', 'Afectado por inundaciones': '', 'Temporada de inundación': '', 'Ha evacuado debido a inundaciones': '', 'Recibido ayuda/asistencia por parte del estado': '', 'Altura registrada en la zona (cm)': '', 'Medidas tomadas para proteger su hogar': '', 'Problemas que presenta su hogar': '', 'Nivel de satistacción con la respuesta del gobierno': '', 'Informado acerca de planes de emergencia': '', 'Estrato': '', });
lyr_ArroyoGrande_1.set('fieldLabels', {'fid': 'no label', });
lyr_ZonadeInfluencia_2.set('fieldLabels', {'fid': 'no label', });
lyr_CasasEncuestadas_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Numero de personas en la vivienda': 'inline label - always visible', 'Tiempo de residencia (años)': 'inline label - always visible', 'Afectado por inundaciones': 'inline label - always visible', 'Temporada de inundación': 'inline label - always visible', 'Ha evacuado debido a inundaciones': 'inline label - always visible', 'Recibido ayuda/asistencia por parte del estado': 'inline label - always visible', 'Altura registrada en la zona (cm)': 'inline label - always visible', 'Medidas tomadas para proteger su hogar': 'inline label - always visible', 'Problemas que presenta su hogar': 'inline label - always visible', 'Nivel de satistacción con la respuesta del gobierno': 'inline label - always visible', 'Informado acerca de planes de emergencia': 'inline label - always visible', 'Estrato': 'inline label - always visible', });
lyr_CasasEncuestadas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});