import React from "react";
import { View, Text, Image} from "react-native";
import movie from '../../assets/images/movie1.jpg';

export default function movieCart({name, production, date, fee, image}) {
  return (
    <View className="flex px-2 mr-4 flex-col w-72 h-80 items-center rounded-lg  ">
       <Image   source={image}  className=" w-full h-2/4 mb-1 rounded "/>
       <View className="flex flex-col justify-center h-auto w-full items-left">
          <Text className="font-bold text-xl text-gray-900 ">{name}</Text>
          <Text className="font-semibold text-sm text-gray-900 ">{production}</Text>
          <Text className="font-normal text-sm text-gray-900 ">{date}</Text>
          <Text className="font-bold text-lg text-gray-800 ">${fee}</Text>
          
       </View>
    </View>
  );
}
