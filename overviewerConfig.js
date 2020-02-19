var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1582136890",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overviewer Render (normal)",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "world-normal",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1582136060,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -224,
                112,
                -32
            ],
            "minZoom": 0,
            "spawn": [
                -224,
                112,
                -32
            ],
            "north_direction": 0
        },
        {
            "name": "Overviewer Render (cave)",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "world-cave",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "last_rendertime": 1582136060,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -224,
                112,
                -32
            ],
            "minZoom": 0,
            "spawn": [
                -224,
                112,
                -32
            ],
            "north_direction": 0
        }
    ]
};
