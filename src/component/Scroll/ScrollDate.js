import React, { useState, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, Pressable } from 'react-native';
import { ScrollShadow } from '../../styles/Shadows';
import { Month } from '../Arrays/Arrays';

const ScrollDate = ({ onPress, Array, right, props, year , top}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null); // Referência para o ScrollView

  const handleScroll = (event) => {
    const position = event.nativeEvent.contentOffset.y;
    setScrollPosition(position);
  };

  const CallBackFunction = (title, index) => {
    onPress(title, year);

    // Calcula a posição desejada com base no índice do item clicado
    const position = index * 45; // 45 é a altura de cada item
    scrollRef.current.scrollTo({ y: position, animated: true });
  };

  return (
    <ScrollView
      ref={scrollRef}
      onScroll={handleScroll}
      style={[styles.scrollContainer, ScrollShadow, { right: right , top:top}]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.scrollContent}>
        {Array.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => CallBackFunction(item.title, index)}
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
