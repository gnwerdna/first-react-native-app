import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlbumList from './src/components/AlbumList';
import Header from './src/components/header'
export default function App() {
  return (
    <View style={{ flex: 1}}>
      <Header headerText={"Albums"}/>
      <AlbumList/>
    </View>
  );
}

