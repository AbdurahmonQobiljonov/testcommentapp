import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RootModal from './RootModal';

interface IProps {
  actionSheetRef: any;
}

const AddComment = ({ actionSheetRef }: IProps) => {
  return (
    <RootModal actionSheetRef={actionSheetRef} heightPercent={60}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
          }}>
          I draw under status bar!
        </Text>
      </View>
    </RootModal>
  );
};

export default AddComment;

const styles = StyleSheet.create({});
