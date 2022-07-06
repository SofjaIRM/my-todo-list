import React from 'react';
import styles from './styles';
import { Text, TextInput, View } from 'react-native';

function FormInput({ setText, text }) {
  return (
    <View style={styles.wrapperTextInput}>
      <Text style={styles.textFormTitle}>{'task'.toUpperCase()}</Text>
      <TextInput
        style = {styles.input}
        onChangeText = {setText}
        value = {text}
        placeholderTextColor = '#c5c5c9'
        placeholder = "Insert a new task"
        underlineColorAndroid = 'transparent'
      />
    </View>
  )
}

export default FormInput;
