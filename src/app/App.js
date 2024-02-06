import React, { useState, useEffect } from 'react';
import Container from './container';
import socket from './socket';

export default function App() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [serverState, setServerState] = useState('server_state');
    const [torrents, setTorrents] = useState('torrent');

    useEffect(() => {
        const onConnect = () => setIsConnected(true);    
        const onDisconnect = () => setIsConnected(false);

        const onData = ({ server_state, torrents }) => {
            setServerState(server_state);
            setTorrents(torrents);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('data', (x) => onData(x));

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('data', (data) => onData(data));
          };
      }, []);

    return (
        <div>
            { !isConnected && <h1>Connection Error</h1> }
            { isConnected && <Container serverState={serverState} torrents={torrents} /> }
        </div>
    );
};