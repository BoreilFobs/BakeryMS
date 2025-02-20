import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DNALoader = () => {
  const animation = new Animated.Value(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const dots = [...Array(8)].map((_, i) => {
    const translateY = animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, i % 2 === 0 ? 15 : -15, 0],
    });

    const opacity = animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.3, 1],
    });

    return (
      <Animated.View
        key={i}
        style={[
          styles.dot,
          {
            transform: [{ translateY }],
            opacity,
            backgroundColor: i % 2 === 0 ? "#3E2723" : "#8D6E63",
            marginLeft: i * 8,
          },
        ]}
      />
    );
  });

  return <View style={styles.dnaContainer}>{dots}</View>;
};

const Form = () => {
  const domain = "http://192.168.43.169:8000";
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState("");
  const [totalCost, setTotalCost] = useState(0);
  const [product, setProduct] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const name = await AsyncStorage.getItem("name");

        if (!token || !name) {
          throw new Error("No authentication data");
        }

        const response = await axios.get(`${domain}/api/customers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const currentUser = response.data.find((user) => user.name === name);
        setCurrentUser(currentUser);
        console.log(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
        setErrorMessage("Please login to place an order");
        setTimeout(() => {
          setErrorMessage("");
          router.push("/");
        }, 2000);
      }
    };
    fetchUser();
  }, []);

  React.useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await axios.get(`${domain}/api/offers`);
        const filteredOffer = response.data.find(
          (offer) => offer.id === parseInt(id)
        );
        if (filteredOffer) {
          setProduct(filteredOffer);
        } else {
          setErrorMessage("Offer not found");
        }
      } catch (error) {
        console.error("Error fetching offers:", error);
        setErrorMessage("Error loading offer details");
      }
    };
    fetchOffers();
  }, [id]);

  useEffect(() => {
    if (product && quantity) {
      const qty = parseInt(quantity) || 0;
      setTotalCost(qty * product.price);
    }
  }, [quantity, product]);

  const handleSubmit = () => {
    setErrorMessage("");

    if (!quantity || parseInt(quantity) <= 0) {
      setErrorMessage("Please enter a valid quantity");
      return;
    }
  };

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <DNALoader />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          {/* <Text style={styles.header}>Place your Order</Text> */}

          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}

          <Image
            source={{ uri: domain + product.offer_pic_path }}
            style={styles.productImage}
            resizeMode="cover"
          />

          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>Price: {product.price}FCFA</Text>

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

          <Text style={styles.totalCost}>Total Cost: {totalCost}FCFA</Text>

          <TouchableOpacity
            style={[
              styles.submitButton,
              isSubmitting && styles.submitButtonDisabled,
            ]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#FFF3E0" />
            ) : (
              <Text style={styles.submitButtonText}>Place Order</Text>
            )}
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
  loadingContainer: {
    flex: 1,
    backgroundColor: "#E6D5C7",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: "#3E2723",
    fontWeight: "500",
  },
  dnaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
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
  errorMessage: {
    color: "#F44336",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    backgroundColor: "rgba(244, 67, 54, 0.1)",
    padding: 10,
    borderRadius: 5,
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
  submitButtonDisabled: {
    opacity: 0.7,
  },
  submitButtonText: {
    color: "#FFF3E0",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Form;
