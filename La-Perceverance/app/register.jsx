import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import React from "react";
import logo from "../assets/images/logo.png";
import { Link, router } from "expo-router";
import background from "../assets/images/login-bg.jpg";
import axios from "axios";

const register = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");
  const [generalError, setGeneralError] = React.useState("");

  const handleRegister = async () => {
    // Reset errors
    setNameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setGeneralError("");

    // Validate inputs
    if (!name) {
      setNameError("Name is required");
      return;
    }
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register",
        {
          name,
          password,
        }
      );

      if (response.data.status === "success") {
        router.replace("/");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setNameError("Username already exists");
        } else {
          setGeneralError(error.response.data.message || "Registration failed");
        }
      } else {
        setGeneralError("Network error. Please try again.");
      }
    }
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <View style={styles.main}>
        <Text style={styles.formHeader}>Register</Text>
        <Image style={styles.image} source={logo}></Image>
        <View style={styles.form}>
          {generalError ? (
            <Text style={styles.errorText}>{generalError}</Text>
          ) : null}

          <View style={styles.formGroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Name"
              placeholderTextColor={"grey"}
              value={name}
              onChangeText={setName}
            ></TextInput>
            {nameError ? (
              <Text style={styles.errorText}>{nameError}</Text>
            ) : null}
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
              value={password}
              onChangeText={setPassword}
            ></TextInput>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              textContentType="password"
              placeholder="Confirm your password"
              placeholderTextColor={"grey"}
              secureTextEntry={true}
              autoCapitalize="none"
              autoComplete="off"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            ></TextInput>
            {confirmPasswordError ? (
              <Text style={styles.errorText}>{confirmPasswordError}</Text>
            ) : null}
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.link}>Register</Text>
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
    width: "100%",
    alignContent: "",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 2,
  },
});
export default register;
