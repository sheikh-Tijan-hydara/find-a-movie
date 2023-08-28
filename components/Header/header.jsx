import React from "react";
import { View, Text, TextInput, TouchableOpacity} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <View className="flex px-8 flex-row justify-between w-full h-20 items-center fixed  absolute top-0 left-0 right-0 ">
       <TextInput className=" border border-blue-800 rounded-lg px-4 py-1 w-11/12 bg-white"
        placeholder="Find a movie: 'price', 'type', 'name'"
      />
      <TouchableOpacity className="flex f  items-center">
        <FontAwesomeIcon icon={faFilter} size={20}   color={'blue'} className=""/>
        
      </TouchableOpacity>
    </View>
  );
}
