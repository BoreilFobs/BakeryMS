import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "La Perceverance Coffee",
      price: 4.99,
      image: require("../../assets/images/logo.png"),
    },
    {
      id: 2,
      name: "Dark Roast Special",
      price: 5.99,
      image: require("../../assets/images/logo.png"),
    },
    {
      id: 3,
      name: "Espresso Blend",
      price: 6.49,
      image: require("../../assets/images/logo.png"),
    },
    {
      id: 4,
      name: "Breakfast Blend",
      price: 4.49,
      image: require("../../assets/images/logo.png"),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <BlurView intensity={20} style={styles.itemCountContainer} tint="light">
        <Text style={styles.itemCount}>
          {products.length} Item{products.length !== 1 ? "s" : ""}
        </Text>
      </BlurView>
      {products.map((product) => (
        <BlurView
          key={product.id}
          intensity={40}
          style={styles.productCard}
          tint="light"
        >
          <Image
            source={product.image}
            style={styles.productImage}
            resizeMode="cover"
          />

          <View style={styles.productInfo}>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                ${product.price.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.orderButton}
              onPress={() => router.push(`/form?id=${product.id}`)}
            >
              <Text style={styles.orderButtonText}>Order Now</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6D5C7",
  },
  itemCountContainer: {
    margin: 16,
    padding: 12,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(62, 39, 35, 0.2)",
  },
  itemCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3E2723",
    textAlign: "center",
  },
  productCard: {
    borderRadius: 15,
    margin: 16,
    overflow: "hidden",
    backgroundColor: "rgba(62, 39, 35, 0.15)",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  productInfo: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3E2723",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 18,
    color: "#5D4037",
    fontWeight: "600",
  },
  orderButton: {
    backgroundColor: "rgba(62, 39, 35, 0.9)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  orderButtonText: {
    color: "#FFF3E0",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
