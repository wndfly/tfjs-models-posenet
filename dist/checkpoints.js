"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobilenet_1 = require("./mobilenet");
var RESOURCES_DIR = 'resources/';
exports.checkpoints = {
    1.01: {
        url: RESOURCES_DIR + 'mobilenet_v1_101/',
        architecture: mobilenet_1.mobileNetArchitectures[100]
    },
    1.0: {
        url: RESOURCES_DIR + 'mobilenet_v1_100/',
        architecture: mobilenet_1.mobileNetArchitectures[100]
    },
    0.75: {
        url: RESOURCES_DIR + 'mobilenet_v1_075/',
        architecture: mobilenet_1.mobileNetArchitectures[75]
    },
    0.5: {
        url: RESOURCES_DIR + 'mobilenet_v1_050/',
        architecture: mobilenet_1.mobileNetArchitectures[50]
    }
};
//# sourceMappingURL=checkpoints.js.map