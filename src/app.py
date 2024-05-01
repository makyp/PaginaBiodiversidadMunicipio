from flask import Flask, render_template, request, redirect, url_for
import requests
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/fauna')
def fauna():
    return render_template('fauna.html')

@app.route('/flora')
def flora():
    return render_template('flora.html')
def procesar_datos_climaticos(datos_climaticos):
    # Procesar y organizar datos climáticos
    # Por ejemplo, extraer temperaturas máximas y mínimas por región
    temperaturas_por_region = {}
    for region in datos_climaticos['regiones']:
        temperaturas_por_region[region['nombre']] = {
            'temperatura_maxima': region['temperatura_maxima'],
            'temperatura_minima': region['temperatura_minima']
        }
    return temperaturas_por_region

def procesar_datos_especies(datos_especies):
    # Procesar y organizar datos sobre especies
    # Por ejemplo, contar el número de especies por tipo (mamíferos, aves, reptiles, etc.)
    especies_por_tipo = {}
    for especie in datos_especies:
        tipo = especie['tipo']
        if tipo in especies_por_tipo:
            especies_por_tipo[tipo] += 1
        else:
            especies_por_tipo[tipo] = 1
    return especies_por_tipo



def obtener_datos_climaticos():
    response = requests.get('https://api.climate.org/datos-climaticos-colombia')
    datos_climaticos = response.json()
    return datos_climaticos

def obtener_datos_especies():
    response = requests.get('https://api.especiescolombia.org/datos-especies-colombia')
    datos_especies = response.json()
    return datos_especies

@app.route('/clima_especies')
def clima_especies():
    datos_climaticos = obtener_datos_climaticos()
    datos_procesados = procesar_datos_climaticos(datos_climaticos)
    datos_especies = obtener_datos_especies()
    datos_procesados = procesar_datos_especies(datos_especies)
    return render_template('clima_especies.html', datos=datos_procesados)


if __name__ == '__main__':
    app.run(debug=True, port=5555)