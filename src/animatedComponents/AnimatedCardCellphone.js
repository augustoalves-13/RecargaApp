import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { Easing, useSharedValue, withSpring, withTiming, useAnimatedStyle, withRepeat, withSequence, runOnJS, interpolate } from 'react-native-reanimated';

const AnimatedCardCellphone = ({ flag, Image, name, number, color, bottom ,onPress, cardStyle}) => {
  
  return (
    <TouchableOpacity onPress={onPress} style={{width:'100%' , alignItems:'center'}}>
      <Animated.View style={[styles.card , cardStyle , { backgroundColor: color, bottom: bottom, }, styles.container]}>
      <View style={styles.rowUp}>
        <View style={styles.flagType}>
          {Image}
          <Text style={{ color: '#fff' }}>{flag}</Text>
        </View>
      </View>
      <View style={{ alignItems: 'flex-start', width: '98%' }}>
        <View style={styles.numberCardContainer}>
          <Text style={{ fontWeight: 'bold' }}>{number}</Text>
        </View>
        <Text style={{ color: '#fff' }}>{name}</Text>
      </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    position: "relative",
    padding: 30,
    elevation: 5,
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "80%",
    borderRadius: 30,
    height: 200,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
  },

  card: {
    borderRadius: 30,
    width: '100%',
    height: 200,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },

  numberCardContainer: {
    height: 20,
    alignItems: "center",
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  }
};

export default AnimatedCardCellphone;
