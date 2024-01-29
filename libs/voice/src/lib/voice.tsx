import { useEffect, useRef } from 'react';
import useRtc from './hook/rtc';
import styles from './voice.module.scss';
import { Video } from 'lucide-react';

/* eslint-disable-next-line */
export interface VoiceProps {}

export function Voice(props: VoiceProps) {
  const { mediaStream, enable, disable } = useRtc();
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (mediaStream && audioPlayer.current) {
      audioPlayer.current.srcObject = mediaStream;
    }
  }, [mediaStream, audioPlayer]);

  return (
    <div>
      {mediaStream && <audio autoPlay controls ref={audioPlayer} />}
      {!mediaStream ? (
        <button className={styles.button} onClick={enable}>
          Start
        </button>
      ) : (
        <button className={styles.button} onClick={disable}>
          Stop
        </button>
      )}
    </div>
  );
}

export default Voice;
