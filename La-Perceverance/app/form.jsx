import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";

const Form = () => {
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  // Mock product data - in real app would fetch from API/database
  const product = {
    id: id,
    name: "La Perceverance Coffee",
    price: 4.99,
    image: require("../assets/images/logo.png"),
  };

  useEffect(() => {
    const qty = parseInt(quantity) || 0;
    setTotalCost(qty * product.price);
  }, [quantity]);

  const handleSubmit = () => {
    if (!quantity || parseInt(quantity) <= 0) {
      Alert.alert("Error", "Please enter a valid quantity");
      return;
    }

    Alert.alert(
      "Confirm Order",
      `Are you sure you want to order:\n\n${quantity} x ${
        product.name
      }\nTotal: $${totalCost.toFixed(2)}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => {
            // Handle order submission
            console.log("Order confirmed");
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          <Text style={styles.header}>Place your Order</Text>

          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="cover"
          />

          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>
            Price: ${product.price.toFixed(2)}
          </Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Quantity</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter quantity"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
          </View>

          <Text style={styles.totalCost}>
            Total Cost: ${totalCost.toFixed(2)}
          </Text>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6D5C7",
  },
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  formContainer: {
    backgroundColor: "rgba(62, 39, 35, 0.15)",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    maxWidth: 400,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3E2723",
    marginBottom: 20,
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3E2723",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: "#5D4037",
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#3E2723",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(62, 39, 35, 0.2)",
  },
  totalCost: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3E2723",
    marginVertical: 15,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "rgba(62, 39, 35, 0.9)",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#FFF3E0",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Form;
