import React from 'react';
import { View, Text } from 'react-native';
import { FabriceSliceState, FabriceSliceStatusEnum } from '../core/slices';

type ResourceRendererType = {
  resource: FabriceSliceState<any>;
  renderInit?: () => void;
  children: any;
  renderLastState?: boolean;
  renderLoading?: (lastState: any) => void;
  renderFailed?: (lastState: any) => void;
};
export const ResourceRenderer = (props: ResourceRendererType) => {
  const {
    resource,
    children,
    renderInit = () => <View />,
    renderLoading = () => {
      return <View />;
    },
    renderFailed = (reason: any) => {
      if (reason.error && reason.error.message) {
        reason = reason.error.message;
      }
      return (
        <View>
          <Text>{reason.toString() || 'Unknown error happened'}</Text>
        </View>
      );
    },
  } = props;

  switch (resource.status) {
    case FabriceSliceStatusEnum.INIT:
      return renderInit;
    case FabriceSliceStatusEnum.SUCCESS:
      return children(resource.data);
    case FabriceSliceStatusEnum.LOADING:
      return renderLoading(resource.data);
    case FabriceSliceStatusEnum.FAILURE:
      return renderFailed(resource.error);
    default:
      return renderInit;
  }
};
