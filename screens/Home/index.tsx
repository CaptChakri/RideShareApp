import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Home;
