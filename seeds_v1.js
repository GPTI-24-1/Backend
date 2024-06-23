
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
      {
        comercio: 'ALIMENTOS PEDREGAL',
        direccion: 'VITACURA 7648',
        comuna: 'VITACURA',
        ciudad: 'VITACURA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'DOMINGO SANTA MARIA 3897',
        comuna: 'RENCA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'TENIENTE CRUZ 570',
        comuna: 'PUDAHUEL',
        ciudad: 'PUDAHUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: '21 DE MAYO 1081',
        comuna: 'TALAGANTE',
        ciudad: 'TALAGANTE',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'LAS CONDES 11097',
        comuna: 'LAS CONDES',
        ciudad: 'LAS CONDES',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SAN PABLO 5660',
        comuna: 'QUINTA NORMAL',
        ciudad: 'QUINTA NORMAL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'PAJARITOS 5100',
        comuna: 'MAIPU',
        ciudad: 'MAIPU',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SAN MARTIN 30',
        comuna: 'QUILICURA',
        ciudad: 'QUILICURA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'PAJARITOS 1637',
        comuna: 'MAIPU',
        ciudad: 'MAIPU',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'CONCHA Y TORO 3088',
        comuna: 'PUENTE ALTO',
        ciudad: 'PUENTE ALTO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'JOSE MIGUEL CARRERA 13059',
        comuna: 'EL BOSQUE',
        ciudad: 'EL BOSQUE',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'INDEPENDENCIA 4154',
        comuna: 'INDEPENDENCIA',
        ciudad: 'INDEPENDENCIA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'JJ PEREZ 6658',
        comuna: 'CERRO NAVIA',
        ciudad: 'CERRO NAVIA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SANTA ROSA 9267',
        comuna: 'SAN RAMON',
        ciudad: 'SAN RAMON',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SANTA ROSA 13218',
        comuna: 'LA PINTANA',
        ciudad: 'LA PINTANA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SANTA ROSA 5780',
        comuna: 'SAN JOAQUIN',
        ciudad: 'SAN JOAQUIN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'RECOLETA 1750',
        comuna: 'RECOLETA',
        ciudad: 'RECOLETA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'CAUPOLOICAN 1340',
        comuna: 'RENCA',
        ciudad: 'RENCA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'SAN PABLO 8685 LOCAL SAN PABLO',
        comuna: 'PUDAHUEL',
        ciudad: 'PUDAHUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ALVI',
        direccion: 'EYZAGUIRRE 2909',
        comuna: 'PUENTE ALTO',
        ciudad: 'PUENTE ALTO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'APPIO GOURMET',
        direccion: 'MONTEVIDEO 527, LOCAL 527, RECOLETA',
        comuna: 'RECOLETA',
        ciudad: 'RECOLETA',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'BENAT',
        direccion: 'TOBALABA 1445 PISO 1',
        comuna: 'PROVIDENCIA',
        ciudad: 'PROVIDENCIA',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'BERRY NATURAL SPA',
        direccion: 'AV PEDRO FONTOAVA 7855, LOCAL FV 11',
        comuna: 'HUECHURABA',
        ciudad: 'HUECHURABA',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'CANASTA RAICES SANAS',
        direccion: 'CONDELL 1137',
        comuna: 'PROVIDENCIA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'CHILE SIN GLUTEN',
        direccion: 'LO OVALLE 494',
        comuna: 'QUILICURA',
        ciudad: 'QUILICURA',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'Comercial Piwën SpA',
        direccion: 'SERAFIN ZAMORA 49',
        comuna: 'LA FLORIDA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'Comercial Piwën SpA',
        direccion: 'LARRAIN 5862 MP 1511',
        comuna: 'LA REINA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'Comercial Piwën SpA',
        direccion: 'CONDELL 1368',
        comuna: 'PROVIDENCIA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'Comercial Piwën SpA',
        direccion: 'CONDELL 1368',
        comuna: 'PROVIDENCIA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'CONFITERIA SAZIE',
        direccion: 'SAZIE 2253',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'CUGAT',
        direccion: 'MAIPU 806',
        comuna: 'BUIN',
        ciudad: 'BUIN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'DULCE POLA',
        direccion: 'DEL VALLE SUR 512 LOC 102',
        comuna: 'HUECHURABA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'Ecotienda PEWEN',
        direccion: 'SUCRE 431 LOC 2',
        comuna: 'NUÑOA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'EL BODEGUERO',
        direccion: 'IRARRAZABAL 1816',
        comuna: 'NUÑOA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'BAJOS DE SAN AGUSTIN 0 LOC 5',
        comuna: 'CALERA DE TANGO',
        ciudad: 'CALERA DE TANGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'LOS BAJOS DE SAN AGUSTIN 0 LOC 5',
        comuna: 'MELIPILLA',
        ciudad: 'CALERA DE TANGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'SANTA ROSA 79 LOC 81',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'VICUÑA MACKENA 3011',
        comuna: 'SAN JOAQUIN',
        ciudad: 'SAN JOAQUIN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'GRAN AVENIDA 6279',
        comuna: 'SAN MIGUEL',
        ciudad: 'SAN MIGUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'ELIODORO YAÑEZ 1103',
        comuna: 'PROVIDENCIA',
        ciudad: 'PROVIDENCIA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'MERCED 711 LOC 40',
        comuna: 'MELIPILLA',
        ciudad: 'MELIPILLA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'LAS PERDICES 2990 LOC 40',
        comuna: 'PEÑALOLEN',
        ciudad: 'PEÑALOLEN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'MIGUEL CAMPINO 245',
        comuna: 'PAINE',
        ciudad: 'PAINE',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'LOS ESTUDIANTES 8145',
        comuna: 'CERRILLOS',
        ciudad: 'CERRILLOS',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'GERONIMO DE ALDERETE 1622',
        comuna: 'LA FLORIDA',
        ciudad: 'LA FLORIDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'SANTA ROSA 905',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'QUIAPO 3055',
        comuna: 'PEDRO AGUIRRE CERDA',
        ciudad: 'PEDRO AGUIRRE CERDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'SAN JUAN 7209',
        comuna: 'CERRILLOS',
        ciudad: 'CERRILLOS',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'EL AGUILUCHO 3420',
        comuna: 'PROVIDENCIA',
        ciudad: 'PROVIDENCIA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'SAN DIEGO 936',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'GRAN AVENIDA 4293',
        comuna: 'LA CISTERNA',
        ciudad: 'LA CISTERNA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'PORTUGAL 472',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'GRAN AVENIDA 5783',
        comuna: 'LA CISTERNA',
        ciudad: 'LA CISTERNA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'DIEGO PORTALES 4290',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'GRAN AVENIDA 8101',
        comuna: 'LA CISTERNA',
        ciudad: 'LA CISTERNA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'ERBI',
        direccion: 'AMBROSIO O\'HIGGINS 1595',
        comuna: 'CURACAVI',
        ciudad: 'CURACAVI',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'FLORIDA NATURALS - ASUR',
        direccion: 'EL ROBLE 970',
        comuna: 'LAMPA',
        ciudad: 'LAMPA',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'FRESH EXPRESS',
        direccion: 'GENERAL JOFRE 214 LOC 6',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'PIE ANDINO 4770 LOCAL J958',
        comuna: 'LA DEHESA',
        ciudad: 'LA DEHESA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'SANCHEZ FONTECILLA 12000',
        comuna: 'PEÑALOLEN',
        ciudad: 'PEÑALOLEN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'JOSE PEDRO ALESSANDRI 1166',
        comuna: 'NUÑOA',
        ciudad: 'NUÑOA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'AMERICO VESPUCIO 1001',
        comuna: 'MAIPU',
        ciudad: 'MAIPU',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'VICUÑA MACKENNA 6100',
        comuna: 'LA FLORIDA',
        ciudad: 'LA FLORIDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'JUMBO - \'Mundo Bionatura\'',
        direccion: 'EL LLANO SUBERCASEAUX 3519',
        comuna: 'SAN MIGUEL',
        ciudad: 'SAN MIGUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'SAN MARTIN 460',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'GABRIELA ORIENTE 0651',
        comuna: 'PUENTE ALTO',
        ciudad: 'PUENTE ALTO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'MARATHON 3123',
        comuna: 'MACUL',
        ciudad: 'MACUL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'SANTA ROSA 7592',
        comuna: 'LA GRANJA',
        ciudad: 'LA GRANJA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'ROJAS MAGALLANES 1856',
        comuna: 'LA FLORIDA',
        ciudad: 'LA FLORIDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'CAMILO HENRIQUEZ 5239',
        comuna: 'PUENTE ALTO',
        ciudad: 'PUENTE ALTO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'AMERICO VESPUCIO 1601',
        comuna: 'CERRILLOS',
        ciudad: 'CERRILLOS',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'GLADYS MARIN 6664',
        comuna: 'ESTACION CENTRAL',
        ciudad: 'ESTACION CENTRAL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'VICUÑA MACKENNA 7320',
        comuna: 'LA FLORIDA',
        ciudad: 'LA FLORIDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'BULNES 550',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'EL SALTO 2506',
        comuna: 'RECOLETA',
        ciudad: 'RECOLETA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: '2 NORTE 1373',
        comuna: 'MAIPU',
        ciudad: 'MAIPU',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'LLICO 456',
        comuna: 'SAN JOAQUIN',
        ciudad: 'SAN JOAQUIN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'SAN PABLO 8537',
        comuna: 'PUDAHUEL',
        ciudad: 'PUDAHUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'CARRETERA GENERAL SAN MARTIN 381',
        comuna: 'COLINA',
        ciudad: 'COLINA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'SAN JOSE DE LA ESTRELLA 1392',
        comuna: 'LA FLORIDA',
        ciudad: 'LA FLORIDA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'SAN PABLO 6702',
        comuna: 'LO PRADO',
        ciudad: 'LO PRADO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: '21 DE MAYO 4287',
        comuna: 'PEÑAFLOR',
        ciudad: 'PEÑAFLOR',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'MANUEL RODRIGUEZ 312',
        comuna: 'BUIN',
        ciudad: 'BUIN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'GRAN AVENIDA 9150',
        comuna: 'LA CISTERNA',
        ciudad: 'LA CISTERNA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'PORTALES 2448 ESQUINA GRAL URRUTIA',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'MAYORISTA 10',
        direccion: 'GLADYS MARIN 6480 PISO ESTACION CENTRAL',
        comuna: 'ESTACION CENTRAL',
        ciudad: 'ESTACION CENTRAL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'NATURAL SELF',
        direccion: 'PASAJE TEJA FLAMENCA 4760',
        comuna: 'PEÑALOLEN',
        ciudad: 'PEÑALOLEN',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'NUTTYNUTS HUERFANOS',
        direccion: 'HUERFANOS 801',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PASAS Y PERAS',
        direccion: 'PORTUGAL 56 LOC 7',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PIWËN FRUTOS SECOS',
        direccion: 'APOQUINDO 4411 LOC S8A',
        comuna: 'LAS CONDES',
        ciudad: 'LAS CONDES',
        tipo_establecimiento: 'PUNTO NATURAL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PLANTA MAESTRA',
        direccion: 'IRARRAZAVAL 3661 LOC 1',
        comuna: 'NUÑOA',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PLANTA MAESTRA',
        direccion: 'MANUEL MONTT 187 LOC 3',
        comuna: 'PROVIDENCIA',
        ciudad: 'PROVIDENCIA',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PLANTA MAESTRA',
        direccion: 'MERCED 295 - C',
        comuna: 'SANTIAGO',
        ciudad: 'SANTIAGO',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'PLANTA MAESTRA',
        direccion: 'HOLANDA 069',
        comuna: 'PROVIDENCIA',
        ciudad: 'PROVIDENCIA',
        tipo_establecimiento: 'PUNTO VERDE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'S10',
        direccion: 'PORTALES ORIENTE 1701',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'S10',
        direccion: 'DIAGONAL TENIENTE CRUZ 530',
        comuna: 'PUDAHUEL',
        ciudad: 'PUDAHUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'S10 Gran Avenida',
        direccion: 'GRAN AVENIDA 6060',
        comuna: 'SAN MIGUEL',
        ciudad: 'SAN MIGUEL',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'VIRGINIA SUBERCASEAUX 447 LOCAL 6',
        comuna: 'PIRQUE',
        ciudad: 'PIRQUE',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'ORIENTE AUTOPISTA LOS LIBERTADORES 22909 LOCAL 14',
        comuna: 'COLINA',
        ciudad: 'COLINA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'VICUÑA MACKENNA 202',
        comuna: 'MELIPILLA',
        ciudad: 'MELIPILLA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'EL GABINO 5830 LOCAL 2',
        comuna: 'LO BARNECHEA',
        ciudad: 'LO BARNECHEA',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'CONSISTORIAL 2100',
        comuna: 'PEÑALOLEN',
        ciudad: 'PEÑALOLEN',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'ALMIRANTE RIVERO 2105',
        comuna: 'SAN BERNARDO',
        ciudad: 'SAN BERNARDO',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comercio: 'SANTA ISABEL - \'Libres de\'',
        direccion: 'LIBERTADOR BERNARDO O\'HIGGINS 2001 LOCAL COMERCIAL 100',
        comuna: 'TALAGANTE',
        ciudad: 'TALAGANTE',
        tipo_establecimiento: 'SUPERMERCADOS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};
