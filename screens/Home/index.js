import { View, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default Home;
