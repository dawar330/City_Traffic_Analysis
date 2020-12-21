import json
import pandas as pd
from flask import Flask
#jsonString = json.dumps
app = Flask(__name__)


@app.route("/api", methods=['GET'])
def api():
    data = pd.read_csv('congestion.csv')
    df1 = data.copy()
    df1['timestep'] = df1['timestep']/3600
    df1 = df1.groupby(['timestep']).mean()
    total_cars = int(df1['Lane_Number_Cars'].sum())
    avg_cars = int(df1['Lane_Number_Cars'].mean())
    df1['timestep'] = df1.index
    current_congestion = round(df1.iloc[3].congestion, 2)
    avg_congestion = round(df1['congestion'].mean(), 2)
    day_congestion_list = df1[['timestep', 'congestion']].values
    day_cars_list = df1['Lane_Number_Cars'].values
    df2 = data.copy()
    df2 = df2[df2['congestion'] > 70]
    df2 = df2.groupby(['lane']).mean()
    df2['lane'] = df2.index
    lane_vs_congestion = df2[['lane', 'congestion']].values
    return {
        'total_cars': total_cars,
        'avg_cars': avg_cars,
        'current_congestion': str(current_congestion)+'%',
        'avg_congestion': str(avg_congestion)+'%',
        'day_congestion': json.dumps(day_congestion_list.tolist()),
        'day_cars_list': json.dumps(day_cars_list.tolist()),
        'lane_vs_congestion': json.dumps(lane_vs_congestion.tolist())
    }
