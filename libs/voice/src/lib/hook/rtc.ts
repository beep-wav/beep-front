import { useState, useCallback } from 'react';
import useSignalingChannel from './signaling-channel';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseRtc {
  mediaStream: MediaStream | null;
  enable: () => Promise<void>;
  disable: () => void;
}

export function useRtc(): UseRtc {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const { join, leave } = useSignalingChannel(setMessages);

  return {
    mediaStream,
    enable: useCallback(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMediaStream(stream);
      join();
    }, []),
    disable: useCallback(() => {
      mediaStream?.getTracks().forEach((track) => track.stop());
      setMediaStream(null);
      leave();
    }, [mediaStream]),
  };
}

export default useRtc;
