import { useState, useCallback } from 'react';
import { WebSocketConnectionPayload } from 'vite/types/customEvent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseSignalingChannel {
  send: (message: string) => void;
}

export interface WebSocketMessage {
  type: string;
  content: string;
}

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
    },
  ],
};

const sendOffer = (peerConnection: RTCPeerConnection, ws: WebSocket) => {
  let message: WebSocketMessage;
  if (ws.readyState === WebSocket.OPEN) {
    peerConnection.createOffer().then((offer) => {
      peerConnection.setLocalDescription(offer);
      message = {
        type: 'offer',
        content: JSON.stringify(offer),
      };
      ws.send(JSON.stringify(message));
    });
  } else {
    throw new Error('WebSocket is not open, cant send peer offer'); // i feel like this will blow up on my face
  }
};

const handleAnswer = (
  message: WebSocketMessage,
  peerConnection: RTCPeerConnection,
  setMessagesState: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  if (message.type === 'offer') {
    const answer = JSON.parse(message.content);
    peerConnection.setRemoteDescription(answer);
  } else {
    setMessagesState((prevState) => [...prevState, message.content]);
  }
};

export function useSignalingChannel(
  setMessagesState: React.Dispatch<React.SetStateAction<string[]>>,
): UseSignalingChannel {
  const ws = new WebSocket('ws://localhost:8080/ws');
  const peerConnection = new RTCPeerConnection(configuration);

  ws.addEventListener('open', () => {
    sendOffer(peerConnection, ws);
  });

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data) as WebSocketMessage;
    if (message.type === 'answer') {
      handleAnswer(message, peerConnection, setMessagesState);
    }
  });
  const send = useCallback((message: string) => {
    ws.send(message);
  }, []);
  return { send };
}

export default useSignalingChannel;
