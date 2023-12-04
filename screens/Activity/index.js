import { View, Text, StyleSheet } from "react-native";

import Menubar from "components/Menubar";

const Activity = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Menubar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default Activity;
