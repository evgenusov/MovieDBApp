import React from 'react';
import { View, Text } from 'react-native';
import { FabriceSliceState, FabriceSliceStatusEnum } from '../core/slices';
import { Loader } from './Loader';

type ResourceRendererType = {
  resource: FabriceSliceState<any>;
  renderInit?: () => React.ReactElement;
  children: (state: any) => React.ReactElement;
  renderLastState?: boolean;
  renderLoading?: (lastState: any) => React.ReactElement;
  renderFailed?: (lastState: any) => React.ReactElement;
};
export const ResourceRenderer = (
  props: ResourceRendererType,
): React.ReactElement => {
  const {
    resource,
    children,
    renderInit = () => <View />,
    renderLoading = () => {
      return <Loader />;
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
      return renderInit();
    case FabriceSliceStatusEnum.SUCCESS:
      return children(resource.data);
    case FabriceSliceStatusEnum.LOADING:
      return renderLoading(resource.data);
    case FabriceSliceStatusEnum.FAILURE:
      return renderFailed(resource.error);
    default:
      return renderInit();
  }
};
