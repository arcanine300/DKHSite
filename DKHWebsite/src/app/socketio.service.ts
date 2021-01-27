import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
}

export const environment = {
  production: false,
  SOCKET_ENDPOINT: 'http://localhost:5000'
};