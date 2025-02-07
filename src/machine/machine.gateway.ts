import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({cors: true, path: 'web-socket-service/api/machine'})
export class MachineGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private connectedClients: Set<WebSocket> = new Set<WebSocket>();
  private readonly logger = new Logger(MachineGateway.name);

  handleConnection(client: WebSocket) {
    if (!this.connectedClients.has(client)) {
      this.logger.log('Cliente conectado.');
      this.connectedClients.add(client);
    }
  }

  handleDisconnect(client: WebSocket) {
    this.logger.log('Cliente desconectado.');
    this.connectedClients.delete(client);
  }

  public broadcastMessage(payload: any) {
    console.log('payload', payload);

    this.connectedClients.forEach(wsClient => {
      if (wsClient.readyState === WebSocket.OPEN) {
        wsClient.send(JSON.stringify(payload));
      }
    });
  }
}
