import { Link, Stack } from "expo-router";
import { StyleSheet, Image } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Page Not Found",
          headerStyle: { backgroundColor: "#3E2723" },
          headerTintColor: "#E6D5C7",
        }}
      />
      <ThemedView style={styles.container}>
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText style={styles.text}>
          Oops! This page doesn't exist.
        </ThemedText>
        <Link href="/home" style={styles.link}>
          <ThemedText style={styles.linkText}>Return to Home</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#E6D5C7",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    color: "#3E2723",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#3E2723",
    borderRadius: 25,
  },
  linkText: {
    color: "#E6D5C7",
    fontSize: 16,
    fontWeight: "bold",
  },
});
