import pandas as pd

# Leer el archivo CSV
csv_file = 'region_metropolitana_santiago_extended_v4.csv'  # Cambia esto al nombre de tu archivo
df = pd.read_csv(csv_file)

# Función para escapar comillas simples en los valores de texto
def escape_quotes(value):
    return value.replace("'", "\\'")

# Generar el contenido del archivo seeds.js
seed_content = """
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shops', [
"""

# Iterar sobre las filas del DataFrame y agregar cada registro al contenido del seed
for index, row in df.iterrows():
    comercio = escape_quotes(row['COMERCIO'])
    direccion = escape_quotes(row['DIRECCIÓN'])
    comuna = escape_quotes(row['COMUNA'])
    ciudad = escape_quotes(row['CIUDAD'])
    tipo_establecimiento = escape_quotes(row['TIPO DE ESTABLECIMIENTO'])
    
    seed_content += f"""\
      {{
        comercio: '{comercio}',
        direccion: '{direccion}',
        comuna: '{comuna}',
        ciudad: '{ciudad}',
        tipo_establecimiento: '{tipo_establecimiento}',
        createdAt: new Date(),
        updatedAt: new Date()
      }}"""
    # Añadir una coma si no es la última fila
    if index != len(df) - 1:
        seed_content += ",\n"

# Cerrar la lista y el módulo.exports
seed_content += """
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shops', null, {});
  }
};
"""

# Escribir el contenido en el archivo seeds.js
with open('seeds_v1.js', 'w') as file:
    file.write(seed_content)

print("Archivo seeds.js generado con éxito.")
