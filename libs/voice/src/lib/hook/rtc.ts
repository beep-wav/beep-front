import { useState, useCallback } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseRtc {
  mediaStream: MediaStream | null;
  enable: () => Promise<void>;
  disable: () => void;
}

export function useRtc(): UseRtc {
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  
  return {
    mediaStream,
    enable: useCallback(async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMediaStream(stream);
    }, []),
    disable: useCallback(() => {
      mediaStream?.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }, [mediaStream]),
  };
};

export default useRtc;
