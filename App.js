import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputField from './Src/screens/Input-Fields/Index'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <InputField/>
      </ScrollView>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
   },
});
