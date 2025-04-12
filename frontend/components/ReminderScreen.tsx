import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Reminder: undefined;
  Confirmation: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function ReminderScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to MedReminder</Text>
      <Button title="Go to Reminder" onPress={() => navigation.navigate('Reminder')} />
    </View>
  );
}