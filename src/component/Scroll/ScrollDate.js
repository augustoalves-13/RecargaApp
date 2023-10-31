import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { ScrollShadow } from '../../styles/Shadows';
import { Month } from '../Arrays/Arrays';

const ScrollDate = ({ onPress, Array, right, props, year }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.y;

    let selectedMonth = '01';

    for (const { position, month } of props) {
      if (position <= scrollPosition) {
        selectedMonth = month;
      } else {
        break;
      }
    }

    setScrollPosition(position);
    onPress(selectedMonth);
  };

  const CallBackFunction = (title) => {
    onPress(title, year);
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      style={[styles.scrollContainer, ScrollShadow, { right: right }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.scrollContent}>
        {Array.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => CallBackFunction(item.title)}
            style={[styles.contentScroll]}
          >
            <Text style={{ color: '#606060', fontWeight: 'bold' }}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    width: 150,
    height: 170,
    borderRadius: 20,
    backgroundColor: '#f8f8f8',
    position: 'absolute',
    top: '32%',
    zIndex: 2,
  },

  scrollContent: {
    alignItems: 'center',
  },

  contentScroll: {
    height: 45,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'start',
  },
});

export default ScrollDate;
