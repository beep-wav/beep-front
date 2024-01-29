import { useState, useCallback } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseSignalingChannel {
  send: (message: string) => void;
}

const configuration = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302',
    },
  ],
};

export function useSignalingChannel(setMessagesState: React.Dispatch<React.SetStateAction<string[]>>): UseSignalingChannel {
  const ws = new WebSocket("ws://localhost:8080");
  const rtcPeerConnection = new RTCPeerConnection(configuration);
  ws.onmessage = ((event) => {
    if (event.data === "offer") {
      rtcPeerConnection.createOffer().then((offer) => {
        rtcPeerConnection.setLocalDescription(offer);
        ws.send(JSON.stringify({
          offer: offer
        }
        ));
      });
    }
    setMessagesState((messages: string[]) => { return [...messages, event.data] });
  });
  const send = useCallback((message: string) => {
    ws.send(message);
  }, []);
  return { send };
}

export default useSignalingChannel;
