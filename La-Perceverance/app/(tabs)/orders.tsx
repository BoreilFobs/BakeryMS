import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Order {
  id: number;
  offer_id: number;
  quantity: number;
  cust_id: number;
}

interface Offer {
  id: number;
  name: string;
  price: number;
  offer_pic_path: string;
}

const Orders = () => {
  const domain = "http://192.168.43.169:8000";
  const [quantities, setQuantities] = useState<Record<number, number>>({});
  const [orders, setOrders] = useState<Order[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        router.replace("/");
        return;
      }

      // Fetch orders
      const ordersResponse = await axios.get(`${domain}/api/orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const storedId = await AsyncStorage.getItem("id");
      const userId = storedId ? parseInt(storedId) : null;

      if (!userId) {
        router.replace("/");
        return;
      }

      // Filter orders for current user
      const userOrders = ordersResponse.data.filter(
        (order: { cust_id: number }) => order.cust_id === userId
      );
      setOrders(userOrders);

      // Fetch offers
      const offersResponse = await axios.get(`${domain}/api/offers`);
      setOffers(offersResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      router.replace("/");
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);

  const handleLogout = () => {
    router.replace("/");
  };

  const handleEdit = (productId: number) => {
    router.push(`/form?id=${productId}&edit=true`);
  };

  const handleDelete = async (orderId: number) => {
    const confirmDelete =
      Platform.OS === "web"
        ? window.confirm("Are you sure you want to delete this order?")
        : await new Promise((resolve) => {
            Alert.alert(
              "Delete Order",
              "Are you sure you want to delete this order?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                  onPress: () => resolve(false),
                },
                {
                  text: "Delete",
                  style: "destructive",
                  onPress: () => resolve(true),
                },
              ]
            );
          });

    if (confirmDelete) {
      try {
        const token = await AsyncStorage.getItem("token");
        await axios.get(`${domain}/api/orders/${orderId}/delete`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setOrders(orders.filter((order) => order.id !== orderId));
      } catch (error) {
        console.error("Error deleting order:", error);
        if (Platform.OS === "web") {
          alert("Failed to delete order");
        } else {
          Alert.alert("Error", "Failed to delete order");
        }
      }
    }
  };

  const getTotalCost = () => {
    return orders.reduce((total, order) => {
      const offer = offers.find((o) => o.id === order.offer_id);
      return total + (offer ? offer.price * order.quantity : 0);
    }, 0);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3E2723" />
        <Text style={styles.loadingText}>Loading orders...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#3E2723"]}
          tintColor="#3E2723"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.totalCost}>Total: {getTotalCost()} FCFA</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={24} color="#FFF3E0" />
        </TouchableOpacity>
      </View>

      <BlurView intensity={20} style={styles.itemCountContainer} tint="light">
        <Text style={styles.itemCount}>
          {orders.length} Item{orders.length !== 1 ? "s" : ""}
        </Text>
      </BlurView>

      {orders.map((order) => {
        const offer = offers.find((o) => o.id === order.offer_id);
        return (
          <BlurView
            key={order.id}
            intensity={40}
            style={styles.productCard}
            tint="light"
          >
            <Image
              source={{ uri: domain + offer?.offer_pic_path }}
              style={styles.productImage}
              resizeMode="cover"
            />

            <View style={styles.productInfo}>
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{offer?.name}</Text>
                <Text style={styles.productPrice}>{offer?.price}FCFA</Text>
                <Text style={styles.quantity}>Quantity: {order.quantity}</Text>
                <Text style={styles.itemTotal}>
                  Total: {order.quantity * (offer?.price || 0)}FCFA
                </Text>
              </View>
              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleEdit(order.id)}
                >
                  <Ionicons name="create-outline" size={24} color="#3E2723" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => handleDelete(order.id)}
                >
                  <Ionicons name="trash-outline" size={24} color="#3E2723" />
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        );
      })}
    </ScrollView>
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
    marginTop: 10,
    fontSize: 16,
    color: "#3E2723",
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
