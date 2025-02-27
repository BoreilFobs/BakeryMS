import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import axios from "axios";
import React from "react";
import { BlurView } from "expo-blur";
import { router } from "expo-router";
import { useNavigation } from "@react-navigation/native";

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
      outputRange: [0, i % 2 === 0 ? 20 : -20, 0],
    });

    const opacity = animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 0.2, 1],
    });

    const scale = animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.2, 1],
    });

    return (
      <Animated.View
        key={i}
        style={[
          styles.dot,
          {
            transform: [{ translateY }, { scale }],
            opacity,
            backgroundColor: i % 2 === 0 ? "#3E2723" : "#8D6E63",
            marginLeft: i * 12,
          },
        ]}
      />
    );
  });

  return <View style={styles.dnaContainer}>{dots}</View>;
};

const Home = () => {
  const domain = "http://192.168.43.169:8000";
  const navigation = useNavigation();

  const [offers, setOffers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${domain}/api/offers`);
      setOffers(response.data);
    } catch (error) {
      console.error("Error fetching offers:", error);
      setError("Failed to load offers. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchOffers();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchOffers().then(() => setRefreshing(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <DNALoader />
        <ActivityIndicator
          size="large"
          color="#3E2723"
          style={styles.spinner}
        />
        <Text style={styles.loadingText}>Loading Offers...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={fetchOffers}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
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
      <View style={styles.titleContainer}>
        <Text style={styles.appTitle}>La Perceverance</Text>
      </View>
      <BlurView intensity={20} style={styles.itemCountContainer} tint="light">
        <Text style={styles.itemCount}>
          {offers.length} Available Offer{offers.length !== 1 ? "s" : ""}
        </Text>
      </BlurView>
      {offers.map((product) => (
        <BlurView
          key={product.id}
          intensity={40}
          style={styles.productCard}
          tint="light"
        >
          <Image
            source={{ uri: domain + product.offer_pic_path }}
            style={styles.productImage}
            resizeMode="cover"
          />

          <View style={styles.productInfo}>
            <View style={styles.textContainer}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}FCFA</Text>
            </View>
            <TouchableOpacity
              style={styles.orderButton}
              onPress={() =>
                router.push({
                  pathname: "/form",
                  params: { id: product.id },
                })
              }
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
  titleContainer: {
    backgroundColor: "#3E2723",
    padding: 15,
    width: "100%",
  },
  appTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF3E0",
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6D5C7",
    padding: 20,
  },
  spinner: {
    marginVertical: 20,
  },
  loadingText: {
    marginTop: 20,
    fontSize: 20,
    color: "#3E2723",
    fontWeight: "bold",
    textAlign: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E6D5C7",
  },
  errorText: {
    fontSize: 18,
    color: "#D32F2F",
    textAlign: "center",
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: "#3E2723",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  retryButtonText: {
    color: "#FFF3E0",
    fontSize: 16,
    fontWeight: "bold",
  },
  dnaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
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
