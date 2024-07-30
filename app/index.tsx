import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useRef, Component, RefObject, createRef } from 'react';
import SafeScreen from '@/components/SafeScreen';
import Post from '@/components/Post';
import { font } from '@/constants/Fonts';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AddComment from '@/components/Modals/AddComment';
import { ActionSheetRef } from 'react-native-actions-sheet';
import { observer } from 'mobx-react';
import { rootStore } from '@/models';
@observer
class Index extends Component {
  private actionSheetRef: RefObject<ActionSheetRef>;
  theme = rootStore.theme;

  constructor(props: any) {
    super(props);

    this.actionSheetRef = createRef<ActionSheetRef>();
  }

  showAddCommentsModal = () => {
    this.actionSheetRef?.current?.show();
  };

  render() {
    return (
      <SafeScreen>
        <StatusBar barStyle={this.theme.mode === 'light' ? 'dark-content' : `light-content`} />
        <View style={styles.header}>
          <Text style={styles.title}>Comments</Text>
          <TouchableOpacity onPress={this.showAddCommentsModal}>
            <MaterialIcons name="add-box" size={30} color="black " />
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Post />
          <Post />
        </ScrollView>
        <AddComment actionSheetRef={this.actionSheetRef} />
      </SafeScreen>
    );
  }
}

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
