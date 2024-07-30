import { Colors } from '@/constants/Colors';
import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  actionSheetRef: any;
  children: React.ReactNode;
  heightPercent?: number;
}

const RootModal = ({ actionSheetRef, children, heightPercent }: IProps) => {
  const insets = useSafeAreaInsets();
  const containerStyles = useMemo(() => ({
    height: heightPercent ? `${heightPercent}%` : '100%',
    ...styles.container,
  }));
  return (
    <ActionSheet
      indicatorStyle={styles.indicatiorStyle}
      gestureEnabled
      safeAreaInsets={insets}
      drawUnderStatusBar
      containerStyle={containerStyles}
      ref={actionSheetRef}>
      {children}
    </ActionSheet>
  );
};

export default RootModal;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
  },
  indicatiorStyle: {
    width: 70,
    backgroundColor: Colors.grey,
  },
});
