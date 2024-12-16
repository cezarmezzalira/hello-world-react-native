import { StyleSheet, Text } from "react-native";

interface TitleProps {
  name: string;
  upperCase?: boolean;
}

const Title = ({ name, upperCase }: TitleProps) => {
  let text = name;
  if (upperCase) {
    text = name.toUpperCase();
  }
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fefefe",
  },
});

export default Title;
