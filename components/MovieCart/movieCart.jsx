import React from "react";
import { View, Text, Image} from "react-native";
import movie from '../../assets/images/movie1.jpg';

export default function movieCart({name, production, date, fee, image}) {
  return (
    <View className="flex px-2 mr-4 flex-row justify-between w-72 h-48 items-center rounded-lg bg-white shadow-xl shadow-gray-800 ">
       <Image   source={image}  className=" w-2/5 h-36 rounded"/>
       <View className="flex flex-col justify-center  h-full w-2/4 items-left">
          <Text className="font-bold text-xl text-gray-900 mb-1">{name}</Text>
          <Text className="font-semibold text-lg text-gray-900 ">{production}</Text>
          <Text className="font-normal text-lg text-gray-900 mb-1">{date}</Text>
          <Text className="font-bold text-lg text-white mb-1 bg-gray-500 p-2 w-20 text-center rounded">${fee}</Text>
          
       </View>
    </View>
  );
}
