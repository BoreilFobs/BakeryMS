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
        "http://192.168.43.169:8000/api/auth/register",
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
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMode="cover"
    >
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
              placeholderTextColor={"#666"}
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
              placeholderTextColor={"#666"}
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
              placeholderTextColor={"#666"}
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <Text style={styles.text}>
              Already have an account?{" "}
              <Link href="/" style={styles.loginLink}>
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
    width: "100%",
    height: "100%",
  },
  main: {
    padding: 20,
    flex: 1,
    position: "relative",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
  form: {
    display: "flex",
    gap: 15,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    maxWidth: 400,
    alignContent: "center",
    justifyContent: "center",
    position: "relative",
    top: -80,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input: {
    width: "100%",
    outlineWidth: 0,
    borderWidth: 0,
    paddingHorizontal: 15,
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginVertical: 8,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "#b88b4a",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formHeader: {
    fontSize: 38,
    position: "absolute",
    top: 40,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  image: {
    width: 180,
    height: 180,
    marginTop: 80,
    marginBottom: -30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  signup: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  errorText: {
    color: "#ff6b6b",
    fontSize: 14,
    marginTop: 4,
  },
  loginLink: {
    color: "#b88b4a",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
export default register;
