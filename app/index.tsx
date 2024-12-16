import SuperButton from "@/components/SuperButton";
import Title from "@/components/Title";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const showMessage = () => {
    alert("Ola pessoal");
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/react-logo.png")}
        ></Image>
        <Title name="Ola pessoal"></Title>
        <Title name="Ola pessoal" upperCase></Title>
        <Text style={styles.title} onPress={showMessage}>
          Olá pessoal
        </Text>
        <Button title="Clique aqui" onPress={showMessage} />
        <SuperButton
          title="Clique aqui"
          iconLeft="heart"
          onPress={showMessage}
        />
        <SuperButton
          title="Clique aqui"
          iconRight="heart"
          onPress={showMessage}
        />
        <SuperButton title="Clique aqui" onPress={showMessage} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#909090",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fefefe",
  },
  image: {
    width: 200,
    height: 200,
  },
});
