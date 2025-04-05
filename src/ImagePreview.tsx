import React, { useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { ImagePreviewProps } from './types';

const { height, width } = Dimensions.get('window');

const ImagePreview = ({
  index,
  isSelected,
  item,
  renderCustomImage,
  resizeMode,
}: ImagePreviewProps) => {
  const [status, setStatus] = useState<AVPlaybackStatus>({} as AVPlaybackStatus);
  const videoRef = useRef(null);

  // Render video player if media is a video
  const renderVideo = () => (
    <View style={styles.containerStyle}>
      <Video
        ref={videoRef}
        source={{ uri: item.url }}
        style={styles.image}
        resizeMode={ResizeMode.CONTAIN}
        useNativeControls
        shouldPlay={true}
        isLooping={false}
        isMuted={false}
        volume={1.0}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );

  // Render image viewer if media is an image or unspecified
  const renderImage = () => (
    <Image
      resizeMode={resizeMode}
      source={{ uri: item.url }}
      style={styles.image}
    />
  );

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => { }}>
        <View style={styles.containerStyle}>
          {renderCustomImage ? (
            renderCustomImage(item, index, isSelected)
          ) : item.kind === 'vid' ? (
            renderVideo()
          ) : (
            renderImage()
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    height,
    width,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ImagePreview;
