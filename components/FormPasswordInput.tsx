import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import type { ReactNode } from 'react';

interface PasswordInputProps extends TextInputProps {
  leftIcon: ReactNode;
  visibleIcon: ReactNode;
  hiddenIcon: ReactNode;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  leftIcon,
  visibleIcon,
  hiddenIcon,
  style,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.icon}>{leftIcon}</View>

      <TextInput
        style={[styles.input, style]}
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="#8a8a8a"
        {...rest}
      />

      <TouchableOpacity onPress={() => setIsPasswordVisible((prev) => !prev)}>
        {isPasswordVisible ? visibleIcon : hiddenIcon}
      </TouchableOpacity>
    </View>
  );
};

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
      }
});

export default PasswordInput;
