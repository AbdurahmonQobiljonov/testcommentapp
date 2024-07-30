import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Colors } from '@/constants/Colors';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
      <View style={styles.content}>
        <View style={styles.row}>
          <TouchableOpacity>
            <Ionicons name="heart" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href="/comments">
              <Ionicons name="chatbubble-ellipses-outline" size={24} color="black " />
            </Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="arrow-redo-outline" size={24} color="black " />
          </TouchableOpacity>
        </View>
        <View style={styles.itemsCenter}>
          <Ionicons name="bookmark-outline" size={24} color="black " />
        </View>
      </View>
      <View style={styles.center}>
        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus libero aliquam culpa
          animi tempore placeat explicabo quam eum ullam quia. Praesentium, tenetur placeat possimus
          saepe dolore distinctio suscipit! Adipisci, deleniti.
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    rowGap: 5,
    marginVertical: 5,
  },
  image: {
    width: '100%',
    height: 400,
  },
  content: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  row: {
    flexDirection: 'row',
    columnGap: 10,
    marginVertical: 5,
  },
  itemsCenter: {
    alignItems: 'center',
  },
  center: {
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 14,
    color: Colors.darkGray,
  },
});
