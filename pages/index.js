// @generated: @expo/next-adapter@2.1.0
import React from 'react';
import { Link } from 'expo-next-react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import Header from './components/Header';

export default function index(props) {
  
  return (
    <Link style={{
      backgroundColor: 'blue',
      width: 50,
      height: 50,
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50
    }} routeName='first'>
      Go
    </Link>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})