import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
