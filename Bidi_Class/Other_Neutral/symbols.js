module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,220,75,146,43,187,146,157,225,177,232,54,244,178,106,108,2,112,128,48,61,157,73,248,36,170,74,170,73,168,165,199,216,197,178,195,47,205,112,27,220,230,113,50,51,98,121,144,88,254,187,31,6,254,241,111,255,230,111,255,240,183,127,250,219,231,159,127,251,121,253,187,207,235,223,127,94,255,225,243,250,143,159,215,127,250,188,254,243,231,245,95,62,175,255,250,121,253,183,207,235,191,127,94,255,248,175,127,244,79,159,127,254,249,243,250,31,159,215,255,252,188,254,229,243,250,223,159,215,255,249,188,254,239,231,245,255,254,245,151,254,215,159,63,249,16,76,193,18,60,5,91,240,18,252,8,142,160,190,193,107,8,156,240,229,132,47,39,124,57,207,203,121,94,111,129,19,190,156,240,237,207,235,27,180,215,22,228,55,248,105,130,46,24,130,16,76,129,243,252,60,5,78,248,243,123,194,151,224,71,240,22,28,193,87,97,123,187,250,219,213,223,174,254,118,245,183,171,75,167,189,93,253,237,234,111,87,127,187,250,219,213,223,174,254,118,245,183,171,31,151,56,46,113,92,226,184,196,113,137,227,18,199,37,142,75,28,151,56,206,92,127,4,15,129,76,75,166,37,211,34,163,200,248,125,191,138,140,34,163,200,40,50,138,140,34,163,100,90,95,61,125,13,65,8,190,191,211,159,126,244,244,163,231,247,234,157,158,120,126,47,58,255,28,193,247,204,211,253,121,201,235,37,175,151,188,94,206,243,146,215,75,94,47,233,84,255,13,94,130,31,193,95,121,61,250,254,35,120,8,154,160,11,134,32,4,83,176,4,79,193,95,226,31,115,191,4,127,93,244,177,190,239,224,39,120,8,154,160,11,134,32,4,83,176,4,79,193,247,90,207,63,127,4,15,65,19,116,193,16,132,96,10,150,224,41,248,61,243,95,247,240,177,199,31,193,16,124,207,179,191,171,224,19,212,55,56,126,249,60,4,77,208,5,206,115,156,231,187,100,62,193,18,60,5,91,64,207,119,201,124,130,31,193,91,64,207,161,199,157,223,238,252,118,231,183,59,191,221,249,237,206,111,119,126,187,243,219,157,223,238,252,46,122,138,158,162,167,232,41,122,190,107,231,81,95,131,253,4,254,203,207,31,193,67,224,119,190,22,247,9,252,242,219,143,220,249,114,231,203,77,40,55,161,220,132,162,167,190,122,218,159,199,31,193,67,208,4,93,48,4,33,152,130,37,120,10,182,32,5,47,193,143,224,45,248,149,81,223,160,209,211,232,105,244,52,122,26,61,141,158,70,79,163,167,251,81,247,163,254,251,35,82,59,169,157,212,78,106,39,181,147,218,73,237,164,14,82,7,169,131,212,65,234,32,99,144,49,200,24,100,12,50,6,25,131,140,65,198,32,99,144,49,200,8,50,130,140,32,35,200,8,119,44,232,9,122,130,158,160,39,232,9,122,130,158,160,39,232,9,122,150,31,45,63,90,126,244,244,163,167,31,61,191,63,122,124,93,235,19,60,4,93,48,4,33,152,130,167,224,43,245,225,35,250,240,201,124,248,100,62,124,50,31,62,108,15,31,182,135,15,219,195,135,237,225,195,246,240,97,123,248,140,61,124,180,30,205,69,187,95,246,249,121,248,252,60,124,54,30,62,27,15,159,141,135,207,198,99,208,236,125,127,140,223,63,255,222,177,135,119,240,225,29,124,120,7,31,222,193,135,119,240,225,29,124,120,7,31,222,193,135,119,240,17,191,103,126,11,220,150,112,91,54,241,155,248,77,252,166,103,211,179,233,217,244,108,122,54,61,155,158,77,207,166,103,211,179,233,217,244,108,122,146,158,164,39,233,73,122,146,158,164,39,233,73,122,146,158,164,39,233,73,122,146,158,164,39,233,73,122,94,244,188,232,121,209,243,162,231,69,207,139,158,23,61,47,122,94,244,188,232,121,209,243,162,231,69,207,139,158,23,61,47,122,126,232,249,161,231,135,158,31,122,126,232,249,161,231,135,158,31,122,126,232,249,161,231,135,158,31,122,126,232,249,161,231,135,158,31,122,222,244,188,233,121,211,243,166,231,77,207,155,158,55,61,111,122,222,244,188,233,121,211,243,166,231,77,207,155,158,55,61,111,122,14,61,135,158,67,207,161,231,208,115,232,57,244,28,122,14,61,135,158,67,207,161,231,208,115,232,57,244,28,122,138,158,162,167,232,41,122,138,158,162,167,232,41,122,138,158,162,167,232,41,122,138,158,162,71,233,127,124,81,164,53,38,220,152,112,251,162,227,39,232,130,33,8,193,20,44,193,83,176,5,41,120,9,126,4,111,193,17,208,131,73,26,38,105,236,189,33,144,198,231,27,159,111,124,190,33,144,134,64,26,2,105,8,164,33,144,166,40,52,69,161,41,10,77,81,104,138,66,83,20,26,2,105,170,67,67,32,77,153,104,141,30,245,162,53,122,26,61,141,158,70,79,163,167,209,211,233,233,244,168,59,173,211,211,233,129,61,13,246,52,216,211,96,79,131,61,77,217,106,202,86,131,61,13,246,52,216,211,96,79,83,218,154,210,214,148,182,166,180,53,165,173,225,159,134,127,26,254,105,248,167,225,159,166,14,54,117,176,169,131,13,255,52,252,211,240,79,195,63,13,255,52,252,211,84,207,166,122,54,213,179,169,158,77,245,108,170,103,83,61,155,234,217,84,207,166,122,54,213,179,169,158,77,245,108,147,158,73,207,164,103,210,51,233,153,244,76,122,38,61,147,158,73,207,164,103,210,51,233,153,244,76,122,38,61,139,158,69,207,162,103,209,179,232,89,244,44,122,22,61,139,158,69,207,162,103,209,3,2,27,8,108,32,176,45,122,158,244,60,233,121,210,243,164,231,73,207,147,158,39,61,79,122,158,244,60,233,121,210,243,164,7,121,54,228,217,144,103,123,210,131,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,26,218,105,104,167,161,157,134,118,76,11,155,105,225,39,160,7,237,52,180,211,208,78,67,59,13,237,52,180,99,216,216,12,27,155,97,99,51,108,108,134,141,205,176,177,25,54,54,195,198,102,216,216,12,27,155,97,99,51,108,108,134,141,205,176,241,227,220,244,160,29,227,199,102,252,216,140,31,155,241,99,51,126,108,198,143,205,248,177,25,63,54,227,199,102,252,216,140,31,155,241,99,51,126,108,198,143,159,2,66,15,218,105,104,167,161,157,134,118,204,42,155,89,101,51,171,108,102,149,205,172,178,153,85,54,179,202,102,86,217,204,42,63,1,61,104,199,208,178,25,90,54,67,203,102,104,217,12,45,155,161,101,51,180,108,134,150,205,208,178,25,90,54,67,203,102,104,217,12,45,155,161,101,51,180,108,134,150,159,114,250,71,240,16,52,65,23,12,65,8,166,96,9,158,130,45,72,193,75,240,35,120,11,142,128,30,180,211,209,78,55,129,233,38,48,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,241,79,199,63,29,255,116,252,211,149,164,174,36,117,37,201,140,250,19,184,132,146,212,149,164,174,36,117,37,201,64,187,25,104,127,2,41,43,73,93,73,234,74,82,87,146,186,146,212,149,164,174,36,117,37,169,43,73,38,210,205,68,186,153,72,55,19,233,102,34,221,12,162,155,65,116,51,136,110,6,209,159,128,12,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,168,171,68,93,37,234,42,81,87,137,186,74,212,85,162,174,18,117,149,104,112,209,193,69,7,23,29,92,116,112,209,193,69,7,23,29,92,116,112,209,193,69,7,23,29,127,126,175,245,35,120,11,142,224,155,251,224,162,131,139,14,46,58,184,232,224,162,131,139,14,46,58,184,232,224,162,131,139,14,46,58,184,232,224,162,131,139,14,46,58,184,232,224,162,131,139,14,46,58,184,232,224,162,131,139,14,46,58,52,89,67,147,53,52,89,67,147,53,52,89,67,147,53,198,239,159,75,71,147,53,52,89,67,147,53,244,41,67,159,50,244,41,67,159,50,244,41,67,159,50,244,41,67,159,50,244,41,67,159,50,230,239,37,220,49,125,202,208,167,12,125,202,208,167,12,125,202,208,167,12,125,202,208,167,12,125,202,208,167,12,125,202,208,167,12,125,202,208,167,12,125,202,80,20,134,162,48,20,133,161,40,12,69,97,40,10,67,81,24,138,194,80,20,134,162,48,20,133,161,40,12,69,97,160,166,129,154,6,106,26,168,105,160,166,129,154,6,106,26,168,105,160,166,129,154,6,106,26,168,105,160,166,129,154,6,106,26,168,105,160,166,129,154,6,106,26,168,105,160,166,129,154,194,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,176,222,195,122,15,235,61,172,247,64,77,129,154,2,53,5,106,10,212,20,168,41,80,83,160,166,64,77,129,154,2,53,5,106,10,212,20,168,41,80,83,152,26,133,169,81,152,26,133,169,81,152,26,133,169,81,152,26,133,169,81,152,26,133,169,81,48,180,96,104,193,208,130,161,5,67,11,134,22,12,45,24,90,48,180,96,104,193,208,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,184,113,112,227,224,198,193,141,131,27,7,55,14,110,28,220,56,184,113,112,227,224,198,193,141,131,27,7,55,14,110,28,220,56,184,113,112,227,224,198,193,141,131,27,7,55,14,110,28,220,56,184,113,112,227,224,198,193,141,131,27,7,55,14,110,28,220,56,184,113,112,227,224,198,193,141,131,27,7,55,14,110,28,220,56,32,122,64,116,223,66,249,4,244,64,244,128,232,1,209,3,162,7,68,15,136,30,16,61,32,122,64,244,48,53,10,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,3,171,7,86,15,172,30,88,61,176,122,96,245,192,234,129,213,195,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,194,212,40,76,141,2,255,4,254,9,252,19,248,39,240,79,224,159,192,63,129,127,2,255,4,254,9,252,19,248,39,240,79,224,159,192,63,129,127,2,255,4,254,9,252,19,248,39,240,79,224,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,241,5,185,230,11,114,109,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,153,248,103,226,159,137,127,38,254,241,237,217,230,219,179,109,130,156,9,114,38,200,153,32,103,130,156,9,114,38,200,153,32,103,130,156,9,114,38,200,153,32,103,98,155,137,109,38,182,153,216,102,98,155,245,231,55,104,130,46,24,130,41,88,130,167,96,11,126,4,111,193,17,124,175,190,56,255,226,252,139,243,47,206,191,56,255,226,252,139,243,47,206,191,56,255,226,252,139,243,47,206,191,56,255,226,252,139,243,47,206,191,56,255,226,252,139,243,47,206,191,56,255,226,252,139,243,47,206,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,134,191,24,254,98,248,139,225,47,62,191,216,251,98,239,139,189,47,246,190,120,248,98,221,139,117,47,214,189,88,247,98,221,139,117,47,214,189,24,245,98,212,139,81,47,70,189,24,245,98,212,139,81,47,70,189,24,245,98,212,139,81,47,70,189,24,245,154,191,87,151,41,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,220,120,113,227,197,141,23,55,94,220,120,233,70,151,110,116,233,70,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,23,163,94,140,122,49,234,197,168,151,110,116,113,236,197,177,23,199,94,191,70,173,9,93,154,208,165,9,93,154,208,165,9,93,154,208,165,9,93,154,208,165,9,93,154,208,165,9,93,154,208,165,9,93,122,207,165,247,92,122,207,165,247,92,122,207,165,247,92,122,207,165,85,92,90,197,165,85,92,90,197,165,85,92,90,197,245,254,253,115,89,104,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,113,105,21,151,86,209,243,50,205,243,50,205,243,50,205,243,50,205,243,50,205,243,50,205,243,50,205,243,50,205,243,50,205,243,50,159,192,181,234,247,90,114,215,6,46,109,224,210,6,110,109,224,86,241,183,138,191,85,252,173,226,111,109,224,86,250,183,210,191,149,254,173,244,111,109,224,214,6,110,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,48,176,193,192,6,3,27,12,108,109,224,70,5,27,21,108,84,176,81,193,70,5,27,21,108,84,176,81,193,70,5,27,21,108,84,176,81,193,70,5,27,21,108,84,176,81,193,70,5,27,21,108,84,176,81,193,70,5,27,21,108,84,224,17,170,79,64,15,42,216,168,192,211,85,205,211,85,159,128,30,84,176,81,193,70,5,27,21,108,84,176,181,129,27,30,108,109,224,198,9,27,39,108,156,176,113,194,214,6,110,109,224,214,6,110,8,177,181,129,27,75,108,44,177,177,196,198,18,27,75,108,44,177,177,196,214,6,110,109,224,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,70,23,27,93,108,116,177,209,197,214,6,110,109,224,214,6,110,224,177,129,199,6,30,27,120,108,224,177,129,199,6,30,27,120,108,224,177,129,199,6,30,27,120,108,224,177,129,199,6,30,27,120,108,224,177,129,199,6,30,27,120,108,224,177,129,199,6,30,27,120,108,173,226,70,32,27,129,108,4,178,17,200,70,32,27,129,108,4,178,17,200,70,32,27,129,108,4,178,17,200,70,32,27,129,108,99,240,13,69,54,20,217,80,100,67,145,13,69,54,20,217,80,100,27,131,111,99,240,109,12,190,141,193,183,49,248,54,6,223,198,224,219,24,124,27,131,111,108,179,177,205,198,54,27,219,108,108,179,177,205,198,54,27,219,108,108,179,177,205,198,54,27,219,108,108,179,177,141,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,155,167,86,91,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,79,226,159,196,63,137,127,18,255,36,254,73,252,147,248,39,241,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,11,255,188,240,207,143,183,233,199,219,244,227,109,250,241,54,253,120,155,126,188,77,63,110,212,79,253,254,151,151,224,71,240,22,28,193,87,216,113,163,142,27,117,220,168,227,70,29,55,234,184,81,199,141,58,110,212,113,163,142,27,117,220,168,227,70,29,55,234,184,81,199,141,58,110,212,113,163,142,27,117,220,168,227,70,29,160,120,128,226,1,138,7,40,30,16,120,64,224,81,146,142,146,116,148,164,163,36,29,37,233,40,73,71,73,58,74,210,81,146,142,146,116,148,164,163,36,29,37,233,60,127,175,46,83,37,233,40,73,71,73,58,74,210,81,146,142,146,116,148,164,163,36,29,37,233,40,73,71,73,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,71,37,58,42,209,81,137,14,139,59,44,238,176,184,195,226,14,139,59,44,238,168,68,71,37,58,42,209,81,137,142,74,116,84,162,163,18,29,149,232,168,68,197,244,138,233,21,211,171,63,191,191,51,4,33,152,130,37,120,10,182,32,5,47,193,143,224,45,56,130,175,230,98,122,197,244,138,233,21,211,43,166,87,76,175,152,94,49,189,210,29,151,238,184,116,199,165,59,46,198,88,140,177,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,237,59,215,236,59,215,236,59,215,236,59,247,9,232,209,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,151,238,184,116,199,165,59,46,221,113,233,142,75,119,92,186,227,210,29,23,20,41,40,82,80,164,160,72,65,145,130,34,5,69,10,138,20,20,41,40,82,80,164,160,72,65,145,130,34,5,69,10,138,20,20,41,40,82,80,164,160,72,65,145,130,34,5,69,10,138,20,20,41,40,82,186,227,194,36,133,73,10,147,20,38,41,76,82,152,164,48,73,97,146,194,36,133,73,10,147,20,38,41,76,82,152,164,48,73,97,146,194,36,133,73,10,147,20,38,41,76,82,152,164,48,73,97,146,194,36,133,73,10,147,20,38,41,76,82,152,164,48,73,97,146,194,36,133,73,108,60,248,9,232,193,36,118,32,108,118,32,252,4,244,96,146,194,36,133,73,10,147,20,38,41,76,82,152,164,48,73,97,146,194,36,54,57,108,54,57,108,54,57,108,133,73,10,147,20,38,41,76,82,152,164,48,73,169,212,165,82,151,74,93,191,149,90,207,88,245,251,87,178,208,51,150,158,177,180,66,165,21,170,111,43,212,255,124,11,253,39,104,130,46,24,130,167,96,11,82,240,123,158,31,193,91,112,4,245,13,190,213,188,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,219,170,177,255,233,191,129,107,117,215,234,254,188,251,243,238,207,183,107,109,215,74,231,113,123,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,237,108,214,109,27,213,109,27,213,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,62,212,237,192,211,237,192,211,237,192,211,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,223,210,237,169,210,237,169,210,237,169,210,237,169,210,251,183,50,126,130,167,96,11,190,23,237,223,150,225,19,248,171,239,240,97,188,191,31,155,79,240,16,52,65,23,12,65,8,166,96,9,158,130,45,72,193,75,240,35,120,11,142,128,158,55,61,111,122,222,244,188,233,121,211,243,166,231,77,207,155,158,55,61,111,122,222,244,188,233,121,211,243,166,231,77,207,155,158,67,207,161,231,208,115,232,57,244,28,122,14,61,135,158,67,207,161,231,208,115,232,57,244,28,122,14,61,135,158,162,167,232,41,122,138,158,162,167,232,41,122,138,158,162,167,232,41,122,138,158,162,167,232,41,122,190,159,159,28,95,110,249,4,15,65,19,116,193,16,132,96,10,150,224,41,216,130,20,188,4,63,130,183,224,8,232,73,122,146,158,164,39,233,73,122,146,158,164,39,233,73,122,146,158,164,39,233,73,122,146,158,164,39,233,121,209,243,162,231,69,207,139,158,23,61,47,122,94,244,188,232,121,209,243,162,231,69,207,139,158,23,61,47,122,94,244,188,232,249,161,231,135,158,31,122,126,232,249,161,231,135,158,239,122,207,245,109,219,211,215,248,211,215,248,211,215,248,211,215,248,63,65,8,126,255,124,9,158,130,45,72,193,75,240,35,120,11,142,224,155,142,111,248,167,111,248,167,111,248,167,111,248,167,111,248,167,111,248,167,111,248,231,243,219,29,127,130,45,72,193,95,50,62,244,116,4,245,13,190,203,161,76,74,203,164,180,76,74,203,164,180,76,74,203,164,180,76,74,203,164,244,19,60,5,251,27,116,103,238,206,220,157,185,59,115,119,230,238,204,221,153,187,51,119,103,238,191,103,78,193,75,240,35,144,151,148,143,148,207,160,103,208,51,232,25,244,12,122,6,61,131,158,65,207,160,103,208,51,232,25,244,12,122,6,61,131,158,65,79,144,17,46,26,174,21,174,21,174,21,174,21,174,21,174,21,174,21,174,21,174,53,165,60,93,107,186,214,148,224,116,209,233,90,223,166,184,204,181,202,92,171,12,175,202,240,170,12,175,202,240,170,12,175,202,176,168,12,139,202,176,168,12,139,202,176,168,12,139,202,8,165,140,80,202,8,165,140,80,202,8,165,140,80,202,96,161,12,22,202,96,161,12,22,202,96,161,12,22,202,96,161,12,22,202,96,161,12,22,202,96,161,234,248,157,227,119,142,223,57,110,194,113,19,142,155,112,8,59,132,29,194,14,97,229,175,202,95,149,191,42,127,245,93,176,239,231,159,63,159,127,223,223,183,198,225,247,62,252,30,254,221,79,219,125,216,239,195,113,31,198,125,56,239,195,117,31,62,239,195,125,31,230,125,248,186,15,127,238,195,59,193,239,122,249,61,172,235,48,238,124,227,206,55,238,124,227,206,55,238,124,227,206,55,238,124,227,206,55,238,124,227,206,55,238,124,227,206,55,238,124,227,206,55,238,124,227,206,119,222,249,206,59,223,121,231,59,239,124,231,157,239,188,243,157,119,190,243,206,119,222,249,206,59,223,121,231,59,239,124,231,157,239,188,243,157,119,190,243,206,119,221,249,174,59,223,117,231,187,238,124,215,157,239,186,243,93,119,190,235,206,119,221,249,174,59,223,117,231,187,238,124,215,157,239,186,243,93,119,190,235,206,247,121,231,251,188,243,125,222,249,62,239,124,159,119,190,207,59,223,231,157,239,243,206,247,121,231,251,188,243,125,94,249,26,203,252,30,182,251,176,223,135,227,62,164,170,143,207,191,254,127,241,239,225,227,62,108,247,97,191,15,199,125,248,119,103,158,247,225,186,15,159,247,225,190,15,243,62,124,221,135,63,247,225,251,62,60,247,97,93,135,143,59,223,199,157,239,227,206,247,113,231,251,184,243,125,220,249,62,238,124,31,119,190,143,59,223,199,157,239,227,206,247,113,231,251,184,243,125,220,249,62,238,124,31,119,190,237,206,183,221,249,182,59,223,118,231,219,238,124,219,157,111,187,243,109,119,190,237,206,183,221,249,182,59,223,118,231,219,238,124,219,157,111,187,243,109,119,190,253,206,183,223,249,246,59,223,126,231,219,239,124,251,157,111,191,243,237,119,190,253,206,183,223,249,246,59,223,126,231,219,239,124,251,157,111,191,243,237,119,190,227,206,119,220,249,142,43,133,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,159,191,59,243,188,15,215,125,248,188,15,247,125,152,247,225,235,62,252,185,15,223,247,225,185,15,175,155,83,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,189,216,235,94,236,117,47,246,186,23,123,221,139,189,238,197,94,247,98,175,123,177,215,184,243,29,119,190,227,206,247,239,156,97,220,249,142,59,223,113,231,59,238,124,199,157,239,184,243,29,119,190,227,206,119,220,249,142,59,223,184,243,141,59,223,184,243,141,59,223,184,243,141,59,223,79,115,241,207,255,31,226,251,58,123,86,114,0,0])))