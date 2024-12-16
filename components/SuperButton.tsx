import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface SuperButtonProps {
  title: string;
  iconLeft?: keyof typeof FontAwesome6.glyphMap;
  iconRight?: keyof typeof FontAwesome6.glyphMap;
  onPress?: () => void;
}

const SuperButton = ({
  title,
  onPress,
  iconLeft,
  iconRight,
}: SuperButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {iconLeft && (
        <FontAwesome6
          style={styles.iconLeft}
          name={iconLeft}
          size={24}
          color="white"
        />
      )}
      <Text style={styles.text}>{title}</Text>
      {iconRight && (
        <FontAwesome6
          style={styles.iconRight}
          name={iconRight}
          size={24}
          color="white"
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff7b00",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
});

export default SuperButton;
