import Tarjeta from "@/components/tarjeta";
import Tarjeta2 from "@/components/tarjeta2";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Tarjeta texto={'Tarjeta 1'}/>
      <Tarjeta texto={'Tarjeta 2'}/>
      <Tarjeta2 texto={'Tarjeta 3'}/>
      <Tarjeta2 texto={'Tarjeta 4'}/>
    </View>
  );
}

