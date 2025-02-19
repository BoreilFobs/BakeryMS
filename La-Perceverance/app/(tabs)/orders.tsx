import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Orders = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

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

  const handleLogout = () => {
    router.replace("/");
  };

  const handleEdit = (productId: number) => {
    router.push(`/form?id=${productId}&edit=true`);
  };

  const getTotalCost = () => {
    return products.reduce((total, product) => {
      return (
        total +
        product.price * (quantities[product.id as keyof typeof quantities] || 0)
      );
    }, 0);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.totalCost}>
          Total: ${getTotalCost().toFixed(2)}
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FFF3E0" />
        </TouchableOpacity>
      </View>

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
              <Text style={styles.quantity}>
                Quantity: {quantities[product.id] || 0}
              </Text>
              <Text style={styles.itemTotal}>
                Total: $
                {((quantities[product.id] || 0) * product.price).toFixed(2)}
              </Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleEdit(product.id)}
              >
                <Ionicons name="create-outline" size={24} color="#3E2723" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Ionicons name="trash-outline" size={24} color="#3E2723" />
              </TouchableOpacity>
            </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "rgba(62, 39, 35, 0.9)",
  },
  totalCost: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF3E0",
  },
  logoutButton: {
    backgroundColor: "#b88b4a",
    padding: 8,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 8,
  },
  quantity: {
    fontSize: 18,
    color: "#3E2723",
    marginBottom: 8,
  },
  itemTotal: {
    fontSize: 16,
    color: "#5D4037",
    fontWeight: "600",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
});

export default Orders;
