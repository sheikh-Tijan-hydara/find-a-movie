import React from "react";
import { View, Text} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCartShopping,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer({activeTab}) {
  return (
    <View className="flex px-8 flex-row justify-between w-full h-20 items-center fixed bg-blue-100 absolute bottom-0 left-0 right-0 rounded-tl-3xl rounded-tr-3xl">
      <View className={`p-2  ${activeTab === 'home' ? 'border-b-4 border-blue-500 ' : '#AFB4B8'}`}>
        <FontAwesomeIcon icon={faHouse} size={28}   color={activeTab === 'home' ? 'blue' : '#808080'}/>
      </View>
      <View className={`p-2  ${activeTab === 'shopping' ? 'border-b-4 border-blue-500 ' : '#AFB4B8'}`}> 
        <View className=" absolute bg-blue-300 -top-2 -left-4  rounded-full w-6 h-6 flex justify-center items-center ">
           <Text className="text-center font-bold">2</Text>
        </View>
        <FontAwesomeIcon icon={faCartShopping} size={28}  color={activeTab === 'shopping' ? 'blue' : '#808080'} />
      </View>
      <View className={`p-2  ${activeTab === 'profile' ? 'border-b-4 border-blue-500 ' : '#AFB4B8'}`}>  
        <FontAwesomeIcon icon={faUser} size={28}  color={activeTab === 'profile' ? 'blue' : '#808080'} />
      </View>
    </View>
  );
}
