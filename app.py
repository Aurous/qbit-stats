from dotenv import dotenv_values
from flask_apscheduler import APScheduler
from flask import Flask, render_template
from flask_cors import CORS
from flask_socketio import SocketIO
from flaskwebgui import FlaskUI
import qbittorrentapi

env = dotenv_values()

scheduler = APScheduler()
app = Flask(__name__, static_url_path='', static_folder='build', template_folder='build')
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
scheduler.init_app(app)
client = qbittorrentapi.Client(host=env['qbit'])

torrent_names = {}
def add_torrent_names(torrents):
    for index in torrents:
        if index not in torrent_names:
            torrent_names[index] = torrents[index]['name']
        else:
            torrents[index]['name'] = torrent_names[index]
    return torrents

@app.route("/")
def main():
    return render_template("index.html", async_mode=socketio.async_mode)

@scheduler.task('interval', id='send_data', seconds=3, max_instances=1)
def send_data():
        maindata = client.sync.maindata.delta()
        rid = maindata['rid']
        server_state = maindata['server_state'] if 'server_state' in maindata else {}
        torrents = maindata['torrents'] if 'torrents' in  maindata else {}
        
        data = {
            "rid": rid,
            "server_state": server_state,
            "torrents": add_torrent_names(torrents) # generate cache of torrents with names
        }
        socketio.emit('data', data)

if __name__ == "__main__":
    scheduler.start()
    config = {
        "app": app,
        "socketio": socketio,
        "server": "flask_socketio",
        "width": 800,
        "height": 480,
    }
    FlaskUI(**config).run()

    # config = {
    #     "host": "localhost",
    #     "port": 8080,
    #     "debug": True
    # }
    # socketio.run(app, **config)