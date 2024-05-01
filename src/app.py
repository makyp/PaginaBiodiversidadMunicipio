from flask import Flask, render_template, request, redirect, url_for
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



if __name__ == '__main__':
    app.run(debug=True, port=5555)