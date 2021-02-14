import React, { useState } from 'react';
import { View } from 'react-native';
import { Dimensions, ListRenderItemInfo } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from '../constants';

type CarouselProps = {
  data: any[];
  renderItem: (item: ListRenderItemInfo<any>) => React.ReactElement;
  itemWidth: number;
};

export const Carousel = ({ data, renderItem, itemWidth }: CarouselProps) => {
  const [sliderWidth, SetSliderWidth] = useState(SCREEN_WIDTH);

  const onLayoutChange = () => {
    const { width } = Dimensions.get('screen');
    SetSliderWidth(width);
  };

  return (
    <View onLayout={onLayoutChange}>
      <SnapCarousel
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        keyExtractor={(item, index) => index.toString()}
        itemWidth={itemWidth}
      />
    </View>
  );
};
