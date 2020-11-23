import React, { Component } from "react";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default class Register extends Component {
  state = {
    email: "",
    password: "",
    tokenConfig: "",
  };

  onRegister() {
    const { email, password } = this.state;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email, password });
    axios
      .post("http://192.168.0.13:5000/users", body, config)
      .then((res) => {
        this.props.navigation.replace("Products", {
          params: { tokenConfig: res.data, url: this.props.url },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background/bg.jpg")}
          style={styles.container}
        >
          <TextInput
            value={this.state.email}
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email })}
            placeholder="Email"
            placeholderTextColor="white"
            style={styles.input}
          />
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={"Şifre"}
            secureTextEntry={true}
            placeholderTextColor="white"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.onRegister();
            }}
          >
            <Text style={styles.buttonText}> Kayit Ol </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    width: 150,
    alignItems: "center",
    backgroundColor: "#F6AB2B",
    padding: 10,
    borderRadius: 10,
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  input: {
    width: 200,
    fontSize: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    marginVertical: 10,
    color: "#fff",
  },
});
