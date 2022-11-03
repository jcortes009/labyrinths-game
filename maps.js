/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🌍',
    'X': '🪐',
    'Y': '🛸',
    'I': '🌌 ',
    'PLAYER': ' 👨‍🚀 ',
    'GAME_OVER': '😐',
    'WIN': '🚀',
    'HEART': '❤',
  };

  
  const maps = [];
  maps.push(`
    IXXYXXXXXX
    -XXXXXYXXX
    -XXXXXXXXX
    -XYXXXXXYX
    -XXXXXXXXX
    -XXXXXYXXX
    -XXXXXXXXX
    -XXXYXXXXX
    -XYXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXYXXX
    XX----XXXX
    X--XX-XXXX
    X-XYX--XXX
    X-XYXX-XXX
    XX--XX--XX
    XX--XYX-XX
    XXXY---IXX
    XYXXXXXXXX
    `);
  maps.push(`
    I-----XYXX
    XXXYX-XXXX
    YX----XXXX
    XX-XXXXXYX
    XX-----XXX
    XYXXXX-XYX
    XX-----XXX
    YX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
    O-----XXYX
    XXXXX-XXXX
    YX----XXXX
    X--XXXYXX
    XX-----XXX
    XYXXXX-XXX
    XXYXXX---X
    XXXYYXX-X
    -XXX-----X
    -I---XXXXY
  `);
  maps.push(`
    I--------X
    XYXXX-XX-X
    XX----XY-X
    -XX-XXXX-X
    -Y---X---Y
    -XXXXX-XXX
    -Y-----XXX
    -X-XXXXXXX
    Y--Y---XXX
    XOXXXXXXXX
  `);