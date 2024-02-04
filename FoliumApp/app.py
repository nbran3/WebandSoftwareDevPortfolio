import folium
import os
import pandas as pd
import json
import pypyodbc

counties = os.path.join('data', 'counties.geojson')


conn = pypyodbc.connect('Driver={SQL SERVER};'
                        'Server=DESKTOP-K4HURDS\SQLEXPRESS01;'
                        'Database=Projects;'
                        'Trusted_Connection=yes;')
query = """
SELECT GeoFips, GeoName, GDP2022
FROM Projects.dbo.counties
WHERE GDP2022 < 200000
"""

rpiResults = pd.read_sql(query, conn)


map = folium.Map(location=[46.879002,-103.789879], zoom_start=5.4, tiles=r'https://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', attr="I dont know what to put here lol.", tooltip= "Test")

folium.Choropleth(
    geo_data = counties,
    name = 'US County GDP 2022',
    data = rpiResults,
    columns = ['geofips' , 'gdp2022'],
    key_on = 'properties.GEOID',
    fill_color = 'RdYlGn',
    fill_opacity = 1,
    line_opacity = 1,
    nan_fill_color = '#f2efe9',
    line_color = 'white'
).add_to(map)


g = folium.GeoJson(
    counties,
    name='geojson'
).add_to(map)

folium.GeoJsonTooltip(fields=["NAME"]).add_to(g)


map.save('index.html')
