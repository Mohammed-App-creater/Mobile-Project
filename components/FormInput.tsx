import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import type { ReactNode } from 'react';

interface FormInputProps extends TextInputProps {
  icon: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({ icon, style, ...rest }) => {
  return (
    <View style={styles.inputWrapper}>
        <View style={styles.icon}>{icon}</View>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#8a8a8a"
          style={styles.input}
        />
      </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderWidth: 0.4,
        borderColor: '#1269ff',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        height: 50,
        width: 330
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        color: 'white',
        fontSize: 16,
      },
    });