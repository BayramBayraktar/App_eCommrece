import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signup from './screens/Signup'

export default function App() {
  return (
    <>
      <Signup />
      <StatusBar style="auto" />
    </>
  );
}