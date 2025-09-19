import {
  useAudioRecorder,
  useAudioRecorderState,
  RecordingPresets,
  AudioModule,
  setAudioModeAsync,
} from "expo-audio";
import * as FileSystem from "expo-file-system";
import { useCallback } from "react";
import { Alert } from "react-native";

export function useRecorder() {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const state = useAudioRecorderState(recorder);

  const ensureReady = useCallback(async () => {
    const perm = await AudioModule.requestRecordingPermissionsAsync();
    if (!perm.granted) {
      Alert.alert("마이크 권한이 필요합니다.");
      console.log("[실패] 마이크 권한 없음");
      throw new Error("no-permission");
    }
    await setAudioModeAsync({
      playsInSilentMode: true,
      allowsRecording: true,
    });
    console.log("[성공] 마이크 권한 획득 및 오디오 모드 설정 완료");
  }, []);

  const start = useCallback(async () => {
    try {
      await ensureReady();
      await recorder.prepareToRecordAsync();
      recorder.record();
      console.log("[녹음중] 녹음 시작");
    } catch (e) {
      console.log("[실패] 녹음 시작 오류:", e);
    }
  }, [ensureReady, recorder]);

  const stop = useCallback(async () => {
    try {
      await recorder.stop();
      const uri = recorder.uri ?? null;
      if (uri) {
        const info = await FileSystem.getInfoAsync(uri); // 파일 정보
        //console.log("[녹음완료] 파일 경로:", uri);
        console.log("[파일정보]", info);
      } else {
        console.log("[실패] 녹음 파일 경로 없음");
      }
      return uri;
    } catch (e) {
      console.log("[실패] 녹음 정지 오류:", e);
      return null;
    }
  }, [recorder]);

  const toggle = useCallback(async () => {
    if (state.isRecording) {
      return await stop();
    } else {
      await start();
      return null;
    }
  }, [state.isRecording, start, stop]);

  return {
    isRecording: state.isRecording,
    uri: state.uri ?? null,
    start,
    stop,
    toggle,
  };
}
