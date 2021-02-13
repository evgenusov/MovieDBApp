import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import Video from 'react-native-video';

export const VideoPlayerScreen = () => {
  const playerRef = useRef<Video | null>();
  const navigation = useNavigation();

  const onDissmiss = () => {
    navigation.goBack();
  };

  return (
    <Video
      onFullscreenPlayerWillDismiss={onDissmiss}
      onFullscreenPlayerDidDismiss={onDissmiss}
      ref={(p) => {
        playerRef.current = p;
      }}
      controls={true}
      fullscreen={false}
      style={{
        width: '100%',
        flex: 1,
      }}
      source={{
        uri:
          'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
      }}
    />
  );
};
