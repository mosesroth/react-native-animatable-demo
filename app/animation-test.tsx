import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function AnimationTestScreen() {
  // References for animation components
  const fadeInViewRef = useRef(null);
  const bounceViewRef = useRef(null);
  const pulseViewRef = useRef(null);
  const slideInViewRef = useRef(null);
  const zoomInViewRef = useRef(null);
  const flashViewRef = useRef(null);

  // Function to trigger animations
  const triggerAnimation = (ref, animation) => {
    if (ref.current) {
      ref.current[animation]();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Animatable Demo</Text>
      <Text style={styles.subtitle}>Fire OS Test App</Text>

      {/* Fade In Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={fadeInViewRef} 
          style={styles.animationBox}
          animation="fadeIn" 
          duration={1000}
        >
          <Text style={styles.animationText}>Fade In</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(fadeInViewRef, 'fadeIn')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Bounce Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={bounceViewRef} 
          style={[styles.animationBox, { backgroundColor: '#FF9500' }]}
          animation="bounce" 
          duration={1000}
        >
          <Text style={styles.animationText}>Bounce</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(bounceViewRef, 'bounce')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Pulse Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={pulseViewRef} 
          style={[styles.animationBox, { backgroundColor: '#FF3B30' }]}
          animation="pulse" 
          duration={1000}
          iterationCount="infinite"
        >
          <Text style={styles.animationText}>Pulse</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(pulseViewRef, 'pulse')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Slide In Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={slideInViewRef} 
          style={[styles.animationBox, { backgroundColor: '#5856D6' }]}
          animation="slideInRight" 
          duration={1000}
        >
          <Text style={styles.animationText}>Slide In</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(slideInViewRef, 'slideInRight')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Zoom In Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={zoomInViewRef} 
          style={[styles.animationBox, { backgroundColor: '#4CD964' }]}
          animation="zoomIn" 
          duration={1000}
        >
          <Text style={styles.animationText}>Zoom In</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(zoomInViewRef, 'zoomIn')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>

      {/* Flash Animation */}
      <View style={styles.animationContainer}>
        <Animatable.View 
          ref={flashViewRef} 
          style={[styles.animationBox, { backgroundColor: '#FF2D55' }]}
          animation="flash" 
          duration={1000}
        >
          <Text style={styles.animationText}>Flash</Text>
        </Animatable.View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => triggerAnimation(flashViewRef, 'flash')}
        >
          <Text style={styles.buttonText}>Replay</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  animationContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  animationBox: {
    width: 200,
    height: 100,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  animationText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
