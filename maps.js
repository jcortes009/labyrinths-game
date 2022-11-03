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
  //💣🌳🐒🦧🦊🐶👨‍🚀🎁🎇🌚🌑🏆
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XYXXXXXXX
    -XXXXXXXXX
    -XXXXXYXXX
    -XXXXXXXXX
    -XXXYXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXYXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXY---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XYXX
    XXXYX-XXXX
    XX----XXXX
    XX-XXXXXYX
    XX-----XXX
    XXXXXX-XYX
    XX-----XXX
    YX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
    O-----XXXX
    XXXXX-XXXX
    XX----XXXX
    X--XXXXXX
    XX-----XXX
    XXXXXX-XXX
    XXXXXX---X
    XXXXXXX-X
    -XXX-----X
    -I---XXXXX
  `);
  maps.push(`
    I--------X
    -XXXX-XX-X
    XX----XX-X
    -XX-XXXX-X
    -X---X---X
    -XXXXX-XXX
    -X-----XXX
    -X-XXXXXXX
    ---X---XXX
    XOXXXXXXXX
  `);