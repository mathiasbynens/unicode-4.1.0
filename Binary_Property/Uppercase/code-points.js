module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,88,75,150,236,58,8,219,80,6,197,199,124,214,114,207,219,255,54,158,132,122,16,220,29,44,98,201,14,80,249,87,239,171,250,170,191,154,175,246,235,223,215,246,181,127,29,95,231,215,239,235,250,186,191,158,175,247,155,223,55,246,141,127,19,223,228,55,239,155,250,166,191,153,111,246,219,223,103,235,184,2,87,226,122,184,10,87,227,26,92,251,249,239,135,203,112,57,174,192,149,184,30,174,194,213,184,6,23,230,25,230,25,230,25,230,25,230,25,230,25,230,24,230,24,230,24,230,56,230,56,230,56,230,60,248,30,238,23,238,21,254,47,204,7,47,7,43,7,39,7,35,7,31,7,27,7,23,7,19,7,15,7,11,7,7,7,3,199,250,29,235,119,172,221,177,110,199,154,3,235,13,172,53,176,206,192,26,3,235,11,172,45,176,166,176,135,171,113,237,23,88,71,56,238,57,238,57,238,5,230,4,112,1,92,0,23,192,37,238,37,238,37,238,37,238,37,238,61,220,123,184,247,112,15,28,2,28,2,28,2,28,2,28,2,28,2,28,2,28,2,28,2,28,2,28,2,91,18,216,144,192,118,4,182,33,192,33,192,33,192,33,22,247,176,7,1,30,129,61,8,242,128,246,9,46,9,237,19,186,39,248,36,248,36,52,79,112,74,232,156,224,148,224,148,208,57,161,113,66,223,132,182,9,94,9,94,233,184,7,94,25,136,17,184,7,110,25,184,31,136,17,136,15,126,9,110,9,62,249,112,31,92,178,48,183,48,23,199,44,113,200,18,71,44,113,192,18,199,43,113,184,18,123,145,216,139,196,94,36,246,34,193,35,193,35,193,35,177,23,9,14,137,243,243,176,246,135,125,120,88,251,195,218,31,214,254,176,238,135,189,120,88,251,195,249,120,88,247,195,186,31,214,253,176,238,231,184,231,184,135,117,63,172,251,97,63,30,214,252,176,31,15,251,241,176,222,135,253,120,88,243,195,126,60,236,199,195,126,60,172,255,97,63,30,246,227,129,195,195,126,60,236,199,195,30,60,172,253,97,237,15,251,240,176,7,139,53,45,214,179,56,195,139,53,45,214,180,88,211,226,236,46,244,92,172,107,161,233,98,109,139,179,178,70,63,94,21,172,113,113,102,22,235,92,232,187,88,235,66,227,197,122,23,231,103,177,230,117,204,131,214,139,117,47,244,94,172,125,161,247,98,253,11,205,23,28,22,186,47,52,92,156,133,133,142,11,13,23,26,46,52,92,104,184,208,112,161,225,226,60,47,223,193,31,132,132,113,154,164,193,251,249,51,254,139,85,194,52,13,231,97,113,48,116,96,121,48,156,236,156,226,68,56,231,249,205,91,152,96,208,32,34,136,8,34,130,136,32,34,136,8,34,130,136,32,34,137,72,34,146,136,36,34,137,72,34,146,136,36,34,137,72,34,30,17,143,136,71,196,35,226,17,241,136,120,68,60,34,30,17,143,136,34,162,136,40,34,138,136,34,162,136,40,34,138,136,34,162,136,104,34,176,197,102,216,31,24,167,73,154,162,193,60,35,85,35,75,35,65,35,55,35,45,35,35,35,25,35,15,35,5,227,234,141,11,55,174,217,234,12,189,124,184,241,185,198,71,90,211,209,116,52,29,77,199,208,49,116,12,29,67,199,208,193,52,123,121,246,146,236,101,216,75,175,204,173,198,196,106,204,170,198,148,106,204,167,198,100,106,204,164,198,52,106,204,163,198,68,106,204,162,198,20,10,19,52,143,134,14,238,170,147,165,147,165,147,165,147,165,147,165,147,165,147,165,147,165,147,165,147,165,147,165,115,83,152,143,141,9,217,152,145,141,41,217,152,147,141,73,217,152,149,141,105,217,152,151,141,201,216,152,141,141,233,216,152,143,141,9,217,152,145,141,41,217,152,147,161,58,86,197,204,10,99,52,78,19,52,244,242,172,49,215,194,52,205,208,16,193,53,7,207,26,179,47,12,17,92,125,240,172,49,19,195,16,65,30,193,179,198,172,12,67,4,25,5,207,26,51,52,12,17,228,22,60,107,204,214,48,68,144,101,240,172,49,115,195,16,65,190,193,179,198,44,158,148,4,166,105,152,92,1,75,138,3,99,52,76,180,204,148,148,9,134,249,246,96,204,154,20,12,134,136,38,130,25,148,210,193,16,209,68,48,155,178,188,193,16,193,196,234,77,4,211,171,15,17,76,178,62,68,48,213,250,92,78,39,98,136,96,218,245,33,130,201,215,151,8,166,96,71,45,233,66,20,24,167,73,154,162,65,83,80,75,199,210,177,116,44,29,56,142,221,56,142,48,78,147,52,236,35,126,116,24,29,70,135,209,97,116,24,29,78,135,211,225,116,56,29,78,71,208,17,116,4,29,65,71,208,145,116,36,29,73,71,210,145,116,60,58,30,29,143,142,71,199,163,163,232,40,58,138,142,162,163,232,96,231,211,108,124,154,125,79,95,219,195,174,167,201,188,201,188,201,188,201,188,201,188,201,188,201,188,201,188,201,188,201,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,200,124,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,72,112,73,144,165,175,89,251,154,133,175,89,249,154,165,15,134,14,18,100,213,107,150,188,102,189,107,22,187,102,165,107,150,185,102,141,131,114,252,23,47,34,12,239,225,69,132,57,7,154,209,37,203,197,139,8,113,249,87,221,95,140,130,55,5,134,216,34,150,100,150,109,234,94,163,218,196,146,214,14,17,228,182,67,4,201,236,222,95,196,46,177,164,181,75,236,113,91,182,185,32,3,195,191,192,8,198,104,156,6,141,47,235,224,176,4,14,171,223,176,240,13,11,218,176,160,13,11,218,176,160,13,11,218,176,160,13,11,218,176,160,13,11,11,140,209,56,13,230,177,136,192,208,139,67,13,131,160,44,24,48,244,98,127,97,16,133,5,3,134,222,102,148,102,148,230,60,246,226,198,110,156,101,2,6,161,18,210,13,219,48,24,32,178,248,47,244,131,73,26,58,112,54,134,29,217,176,29,131,161,163,233,104,58,154,81,24,153,77,217,176,43,27,182,101,48,140,2,37,97,8,91,122,151,147,41,29,59,50,24,163,193,61,54,87,48,143,166,104,238,222,208,112,50,23,249,30,39,147,239,35,95,182,94,48,68,60,34,30,17,143,136,199,126,104,175,233,193,95,108,103,151,253,44,140,211,4,77,210,60,154,162,105,154,161,33,130,141,89,178,51,99,187,187,236,119,97,136,96,135,198,182,23,134,8,54,105,201,46,141,45,48,12,17,108,212,216,9,155,234,152,49,67,155,202,153,49,71,155,170,154,49,75,155,138,155,185,90,137,171,238,204,212,180,135,237,195,94,173,103,182,166,61,108,31,246,42,63,51,182,169,42,26,115,182,169,56,26,179,182,169,70,26,243,182,169,84,26,51,183,169,98,26,115,183,169,112,26,179,183,169,126,194,30,246,58,6,223,195,238,97,119,175,179,185,214,230,103,103,175,195,249,197,217,107,116,126,239,236,245,59,191,62,171,126,232,176,118,216,123,98,220,179,226,158,18,171,214,232,122,163,139,153,23,45,47,78,94,132,60,44,183,132,246,188,118,94,59,175,171,175,58,239,245,98,121,205,88,94,55,150,215,142,229,245,99,121,13,89,94,71,150,106,201,212,147,253,53,101,231,85,91,118,125,89,94,99,150,215,153,229,59,239,59,239,59,111,157,247,90,182,44,117,116,231,189,93,206,219,223,188,157,205,219,211,188,221,204,219,199,188,29,204,219,187,188,93,203,81,59,120,94,236,81,61,254,130,164,205,179,239,108,157,237,179,115,118,105,253,230,227,20,210,250,217,195,250,97,253,176,126,88,63,172,31,214,15,27,135,141,195,198,97,227,176,113,216,56,108,28,54,14,11,221,170,248,139,135,214,206,250,217,56,155,103,223,217,58,219,103,133,90,218,62,108,31,182,15,219,135,237,195,246,97,251,176,125,216,62,108,31,118,14,59,135,157,195,206,97,231,176,115,216,57,236,28,118,14,59,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,222,201,223,185,131,136,65,255,221,129,196,96,26,92,67,104,72,13,79,131,154,111,54,211,28,20,197,20,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,197,21,37,20,37,20,37,20,37,20,165,228,43,249,74,190,250,243,233,9,165,39,148,158,80,122,66,233,9,165,39,180,162,180,162,180,162,180,162,180,162,180,162,180,162,180,162,180,162,180,162,140,162,140,162,140,162,140,162,140,162,92,230,218,149,158,43,61,87,122,174,253,249,74,67,107,24,13,247,132,149,158,43,61,87,122,174,244,92,233,185,210,115,165,231,74,207,149,158,43,61,87,122,174,244,92,233,185,210,115,67,81,66,81,66,81,66,81,164,231,74,200,149,144,43,233,86,98,173,196,218,254,243,233,177,146,103,37,207,74,151,149,46,43,93,246,79,151,81,232,17,92,63,245,150,89,29,63,236,238,39,219,239,126,158,115,208,175,61,147,207,127,26,76,131,107,8,13,169,225,105,80,20,87,20,87,20,87,148,80,148,80,148,80,148,80,148,80,148,80,148,80,148,80,148,80,148,80,148,84,148,84,148,146,175,228,107,221,108,133,110,133,110,133,110,5,107,1,90,128,81,176,17,110,132,27,225,70,184,209,90,70,240,17,252,79,179,21,124,5,191,95,145,63,147,88,38,177,76,42,153,84,50,169,100,82,201,36,143,73,30,147,60,38,121,76,242,152,116,49,73,96,146,192,36,129,73,130,251,32,192,65,15,74,1,36,129,73,2,235,191,155,122,122,235,233,18,196,36,136,73,16,147,32,38,65,76,130,152,4,49,9,194,38,240,6,69,145,46,38,93,76,186,152,116,49,233,98,127,186,172,162,172,162,172,162,172,162,236,69,113,169,164,143,4,24,74,195,159,111,52,220,19,92,98,185,196,210,103,4,12,161,65,81,116,150,244,97,1,131,162,72,72,151,144,250,212,128,65,81,36,164,75,72,125,124,192,160,40,169,40,169,40,169,40,169,40,210,211,165,167,75,79,151,158,250,238,240,115,233,169,15,16,63,151,158,250,18,241,115,233,169,79,18,63,151,158,250,54,241,115,233,169,143,20,63,151,158,250,90,241,115,233,233,210,211,165,167,75,79,255,211,83,223,108,174,247,242,95,232,227,205,117,95,24,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,188,79,35,28,20,229,41,202,83,20,233,25,210,51,164,103,204,159,79,79,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,74,207,148,158,249,247,85,236,23,26,82,195,69,73,233,153,210,51,165,103,198,159,175,52,180,134,209,160,39,72,207,148,158,41,61,83,122,166,244,76,233,153,210,51,165,103,74,207,148,158,41,61,83,122,166,244,76,233,121,77,41,7,69,121,138,242,20,69,154,165,52,75,105,150,210,44,165,89,74,179,148,102,41,205,82,154,165,52,75,105,150,210,236,73,179,39,205,158,52,123,210,236,73,179,39,205,158,190,45,190,95,107,24,13,138,98,138,98,138,98,138,34,9,158,36,120,146,224,73,130,39,9,158,36,120,146,224,73,130,39,9,158,36,120,146,224,73,130,247,20,229,41,74,41,74,41,74,41,74,41,74,41,74,41,74,41,74,41,138,138,212,83,145,122,247,81,242,87,127,31,80,197,182,196,182,196,182,196,182,196,182,196,182,196,182,196,182,44,52,40,138,41,138,106,120,169,134,151,106,120,169,134,151,202,82,169,44,149,106,120,169,58,149,242,110,41,239,150,242,110,41,239,150,242,68,137,109,137,109,137,109,137,109,137,109,137,109,213,31,64,143,253,99,171,202,92,42,75,165,178,84,42,75,165,178,84,74,163,165,52,90,74,163,165,52,90,122,237,75,175,125,233,181,47,189,246,165,215,190,244,218,151,94,251,22,219,22,219,22,219,22,219,22,219,22,219,246,63,64,107,24,13,247,216,86,86,108,101,197,214,91,220,122,139,91,111,113,235,45,110,189,197,173,183,184,245,22,183,222,226,214,91,220,122,139,91,111,113,235,45,238,204,255,254,7,145,80,228,22,32,29,0,0])))