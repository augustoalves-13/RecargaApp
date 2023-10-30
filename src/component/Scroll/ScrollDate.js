import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { ScrollShadow } from '../../styles/Shadows';
import { Month } from '../Arrays/Arrays';

const ScrollDate = ({ onPress , Array , right}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.y;

    const months = [
      { position: 0, month: '01' },
      { position: 50, month: '02' },
      { position: 100, month: '03' },
      { position: 150, month: '04' },
      { position: 130, month: '05' },
      { position: 170, month: '06' },
      { position: 210, month: '07' },
      { position: 250, month: '08' },
      { position: 290, month: '09' },
      { position: 330, month: '10' },
      { position: 410, month: '11' },
      { position: 450, month: '12' },
    ];

    let selectedMonth = '01'; 

    for (const { position, month } of months) {
      if (position <= scrollPosition) {
        selectedMonth = month;
      } else {
        break;
      }
    }

    setScrollPosition(position);
    onPress(selectedMonth);
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      style={[styles.scrollContainer, ScrollShadow , {right:right}]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.scrollContent}>
        {Array.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => onPress(item.title)}
            style={[styles.contentScroll ]}
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
    width: '90%',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ScrollDate;
