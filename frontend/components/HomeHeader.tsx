import { View, Pressable } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import { Link, useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 16,
        paddingHorizontal: 24,
        marginTop: 40,
      }}
    >
      <Link
        action={{
          type: "NAVIGATE",
          payload: { name: "signIn" }, // Replace "PreviousScreen" with your target screen name
        }}
      >
        <Feather name="arrow-left" size={24} color="white" />
      </Link>

      <Pressable>
        <Fontisto name="share-a" size={18} color="white" />
      </Pressable>
    </View>
  );
};

export default HomeHeader;
