from flask import Flask
import pandas as pd
app = Flask(__name__)

@app.route("/api",methods=['GET'])
def api():
    data = pd.read_csv('congestion.csv')
    data['timestep']= data['timestep']/3600
    data = data.groupby(['timestep']).mean()  

    total_cars = int(data['Lane_Number_Cars'].sum())
    avg_cars   = int(data['Lane_Number_Cars'].mean())
    #current_congestion = float(data['congestion'].sum())
    current_congestion = round(data.iloc[3].congestion,2)
    avg_congestion = round(data['congestion'].mean(),2)
    day_congestion_list = list(data.congestion)
    return {
        'total_cars':total_cars,
        'avg_cars':avg_cars,
        'current_congestion':str(current_congestion)+'%',
        'avg_congestion':str(avg_congestion)+'%',
        'day_congestion':day_congestion_list
    }
    
