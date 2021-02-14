import { useNavigation } from '@react-navigation/native';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

export const VideoPlayerScreen = ({ route }: any) => {
  const playerRef = useRef<Video | null>();
  const navigation = useNavigation();
  const [headerShown, SetHeaderShown] = useState(false);

  const { movie } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: movie.title,
      headerShown: headerShown,
    });
  }, [headerShown, movie.title, navigation]);

  useEffect(() => {
    playerRef.current?.presentFullscreenPlayer();
  }, []);

  const onDissmiss = () => {
    navigation.goBack();
  };

  const onTouchPlayer = useCallback(() => {
    SetHeaderShown(true);
    setTimeout(() => {
      SetHeaderShown(false);
    }, 3000);
  }, []);

  return (
    <Video
      onTouchStart={onTouchPlayer}
      onFullscreenPlayerWillDismiss={onDissmiss}
      onFullscreenPlayerDidDismiss={onDissmiss}
      ref={(p) => {
        playerRef.current = p;
      }}
      controls={true}
      fullscreen={false}
      style={styles.backgroundVideo}
      resizeMode="contain"
      source={{
        uri:
          'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
      }}
    />
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    width: '100%',
  },
});
