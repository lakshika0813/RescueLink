import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Background from './components/Background';
import Btn from './components/Btn';
import { orange, yellowOrange } from './components/Constants';
import Field from './components/Field';
// import { useNavigation } from '@react-navigation/native';



const Login = (props) => {
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  const handleLogin = () => {
    if (!contact || !password) {
      Alert.alert("Missing Fields", "Please fill in all fields.");
      return;
    }

    // Simulate API call (replace with your real backend later)
    fetch('http://192.168.29.56:5000/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ contact, password })
})
.then(res => res.text())
.then(data => {
  if (data === "Login successful") {
    // Alert.alert("Success", "Logged in successfully!");
    props.navigation.navigate("MainHome");
  } else {
    Alert.alert("Login Failed", data); // now correct condition
  }
})

.catch(err => {
  console.error("Login Error:", err);
  Alert.alert("Error", "Something went wrong while logging in.");
});

  };

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          accessibilityLabel="login-heading"
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: yellowOrange, fontWeight: 'bold', marginRight: 50 }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              marginRight: 50
            }}>
            Login to your account
          </Text>

          <Field
            placeholder="Contact Number"
            keyboardType="number-pad"
            value={contact}
            onChangeText={setContact}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Btn
            textColor='white'
            bgColor={orange}
            btnLabel="Login"
            Press={handleLogin}
          />

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: yellowOrange, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
