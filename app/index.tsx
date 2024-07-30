import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import SafeScreen from '@/components/SafeScreen';
import Post from '@/components/Post';
import { font } from '@/constants/Fonts';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddComment from '@/components/Modals/AddComment';
import { ActionSheetRef } from 'react-native-actions-sheet';

const Index = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const showAddCommentsModal = () => {
    actionSheetRef?.current?.show();
  };

  return (
    <SafeScreen>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Comments</Text>
        <TouchableOpacity onPress={showAddCommentsModal}>
          <MaterialIcons name="add-box" size={30} color="black " />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Post />
        <Post />
      </ScrollView>
      <AddComment actionSheetRef={actionSheetRef} />
    </SafeScreen>
  );
};

export default Index;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    marginVertical: 5,
  },
  title: {
    fontFamily: font.regular,
    fontSize: 24,
  },
});
