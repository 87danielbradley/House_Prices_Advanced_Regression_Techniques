#################################################
# Import Dependencies
#################################################

import numpy as np
import pandas as pd


import numpy as np
import pickle

from flask import Flask, jsonify, request, render_template

#################################################
# Database Setup
#################################################



#################################################
# Flask Setup
#################################################

app = Flask(__name__)
model = pickle.load(open('rf_model.pkl','rb'))

#################################################
# Flask Routes
#################################################

@app.route("/")
def home():
    """All available api routes"""
    return render_template('home.html')

@app.route('/predict', methods=['POST'])
def predict():
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = round(prediction[0],2)

    return render_template('index.html', prediction_text='Home Value Estimation $ {}'.format(output))


    
if __name__==  '__main__':
    app.run(debug=True)

