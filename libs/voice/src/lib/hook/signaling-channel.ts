import { send } from 'process';
import { useState, useCallback, useEffect } from 'react';
import { WebSocketConnectionPayload } from 'vite/types/customEvent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseSignalingChannel {
  join: () => void;
  leave: () => void;
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

const sendOffer = (voiceSocket: VoiceSocket) => {
  let message: WebSocketMessage;
  if (voiceSocket.ws.readyState === WebSocket.OPEN) {
    voiceSocket.peerConnection.createOffer().then((offer) => {
      if (voiceSocket.peerConnection.signalingState !== 'have-remote-offer') {
        voiceSocket.peerConnection.setLocalDescription(offer);
      }
      message = {
        type: 'offer',
        content: JSON.stringify(offer),
      };
      if (voiceSocket.peerConnection.signalingState !== 'have-remote-offer') {
        voiceSocket.ws.send(JSON.stringify(message));
      }
      console.log(voiceSocket.peerConnection.signalingState);
    });
  } else {
    throw new Error('WebSocket is not open, cant send peer offer'); // i feel like this will blow up on my face
  }

  console.log('peerState', voiceSocket.peerConnection.signalingState);
};

const handleAnswer = (
  message: WebSocketMessage,
  voiceSocket: VoiceSocket,
  setMessagesState: React.Dispatch<React.SetStateAction<string[]>>,
) => {
  console.log('message', message.type);
  if (message.type === 'offer') {
    if (voiceSocket.peerConnection.signalingState !== 'have-remote-offer') {
      const answer = JSON.parse(message.content);
      console.log('answer', answer);
      voiceSocket.peerConnection.setRemoteDescription(answer);
      sendOffer(voiceSocket);
    }
  } else if (message.type === 'candidate') {
    const candidate = JSON.parse(message.content);
    console.log('candidate', candidate);
    voiceSocket.peerConnection
      .addIceCandidate(candidate)
      .catch((e) => console.log(e));
  } else {
    setMessagesState((prevState) => [...prevState, message.content]);
  }
  console.log('peerState', voiceSocket.peerConnection.signalingState);
};

interface VoiceSocket {
  ws: WebSocket;
  peerConnection: RTCPeerConnection;
}

export function useSignalingChannel(
  setMessagesState: React.Dispatch<React.SetStateAction<string[]>>,
): UseSignalingChannel {
  const [voiceSocket, setVoiceSocket] = useState<VoiceSocket | null>(null);

  useEffect(() => {
    if (voiceSocket) {
      voiceSocket.ws.onopen = () => {
        console.log('connected');
        try {
          sendOffer(voiceSocket);
        } catch (e) {
          console.log(e);
        }
      };
      voiceSocket.ws.addEventListener('message', (event) => {
        console.log('message', event.data);
        const message = JSON.parse(event.data) as WebSocketMessage;
        handleAnswer(message, voiceSocket, setMessagesState);
      });

      voiceSocket.ws.onclose = () => {
        console.log('disconnected');
      };

      voiceSocket.peerConnection.onicecandidate = (event) => {
        console.log(event);
        if (event.candidate) {
          console.log('sending candidate');
          voiceSocket.ws.send(
            JSON.stringify({
              type: 'candidate',
              content: JSON.stringify(event.candidate),
            }),
          );
        }
      };

      voiceSocket.peerConnection.addEventListener(
        'connectionstatechange',
        (event) => {
          console.log('connectionstatechange', event);
        },
      );

      voiceSocket.peerConnection.addEventListener(
        'signalingstatechange',
        () => {
          console.log(
            'signalingstatechange',
            voiceSocket.peerConnection.signalingState,
          );
        },
      );
    }
  }, [voiceSocket]);

  return {
    join: useCallback(() => {
      setVoiceSocket({
        ws: new WebSocket('ws://localhost:8080/ws'),
        peerConnection: new RTCPeerConnection(configuration),
      });
    }, []),
    leave: useCallback(() => {
      voiceSocket?.ws.close();
      voiceSocket?.peerConnection.close();
      setVoiceSocket(null);
    }, []),
  };
}

export default useSignalingChannel;
