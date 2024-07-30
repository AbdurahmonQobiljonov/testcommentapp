import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import RootModal from './RootModal';

interface IProps {
  actionSheetRef: any;
}

class AddComment extends Component<IProps> {
  render() {
    return (
      <RootModal actionSheetRef={this.props.actionSheetRef} heightPercent={60}>
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
  }
}

export default AddComment;

const styles = StyleSheet.create({});
