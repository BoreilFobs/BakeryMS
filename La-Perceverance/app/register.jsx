import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "expo-router";
import background from "../assets/images/login-bg.jpg";

const register = () => {
  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.main}>
        <Text style={styles.formHeader}>Register</Text>
        <Image style={styles.image} source={logo}></Image>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="XXXXXXXXX"
              placeholderTextColor={"grey"}
            ></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor={"grey"}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="off"
            ></TextInput>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              textContentType="password"
              placeholder="Conform your password"
              placeholderTextColor={"grey"}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="off"
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.button}>
            <Link
              href="/"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.link}>Register</Text>
            </Link>
          </TouchableOpacity>
          <View style={styles.signup}>
            <Text style={styles.text}>
              already have an account?{" "}
              <Link href="/" style={{ color: "blue" }}>
                Login
              </Link>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  main: {
    padding: 20,
    flex: 1,
    gap: 0,
    position: "relative",
    backgroundColor: "#472e189e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  form: {
    display: "flex",
    gap: 17,
    paddingVertical: 40,
    paddingHorizontal: 20,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    top: -200,
  },
  input: {
    width: "100%",
    outlineWidth: 0,
    borderWidth: 0,
    paddingHorizontal: 10,
    padding: 7,
    backgroundColor: "#e7ddb4",
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  label: {
    color: "#b88b4a",
    fontSize: 17,
    fontWeight: "600",
  },
  button: {
    padding: 7,
    paddingHorizontal: 15,
    backgroundColor: "#b88b4a",
    maxWidth: 80,
    borderRadius: 18,
  },
  formHeader: {
    fontSize: 50,
    position: "absolute",
    top: 10,
    left: 20,
    fontWeight: "bold",
    fontFamily: "gabriola",
    color: "#b88b4a",
  },
  image: {
    transform: "scale(0.4)",
    marginTop: 130,
  },
  link: {
    color: "#242331",
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    // backgroundColor: "red",
    width: "100%",
    alignContent: "",
  },
});
export default register;
