import { io } from 'socket.io-client';

const url = (process.env.NODE_ENV === 'development') ? 'localhost:8080' : window.location.origin;

export default io(url);