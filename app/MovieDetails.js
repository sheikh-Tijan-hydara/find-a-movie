import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { Link } from "expo-router";
import image from "../assets/images/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBed, faBookQuran, faCalculator, faCaretLeft, faFilter, faMedal } from "@fortawesome/free-solid-svg-icons";

export default function MovieDetails() {
  return (
    // create a movie details screen that has the details for the movie and a book button

    <View className="flex flex-col h-full w-full bg-gray-100">
      <View className="flex items-center flex-row justify-centr  px-8 py-4">
        {/* <Link to="/index"> */}
          <FontAwesomeIcon icon={faCaretLeft} size={40} color={"black"} className="mr-8" />
        {/* </Link> */}
        <Text className="font-bold text-2xl text-center ml-16">Movie Details</Text>
      </View>
      <View className="flex flex-col  ">
        <Image source={image} className=" h-52 mb-8 object-cover  w-full" />
        <View className="px-8 text-center">
          <Text className="font-bold text-2xl mb-1">
            The Black Widow Season 2{" "}
          </Text>
          <Text className="font-normal text-xl mb-1 ">Episode 1 - 15 </Text>
          <View className="flex flex-row justify-between">
          <Text className="font-normal text-xl mb-1 ">
            Released Sep 14 2023
          </Text>
          <Text className="font-extrabold text-2xl mb-5">$2.67</Text>
          </View>
          
        </View>
        <View className="px-8 flex flex-col gap-6">
          <View className="w-full h-px bg-gray-300" />

          <Text className="text-sm font-normal text-gray-800">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </Text>
          <Text className="font-bold text-2xl">What we offer</Text>
          <View className="flex flex-row justify-between">
            <View className=" rounded-2xl bg-gray-700 px-4 py-6 shadow-lg">
            <FontAwesomeIcon icon={faBed} size={30} color={"white"} className="" />
            </View>
            <View className=" rounded-2xl bg-gray-700 px-4 py-6 shadow-lg">
            <FontAwesomeIcon icon={faBookQuran} size={30} color={"white"} className="" />
            </View>
            <View className=" rounded-2xl bg-gray-700 px-4 py-6 shadow-lg">
            <FontAwesomeIcon icon={faCalculator} size={30} color={"white"} className="" />
            </View>
            <View className=" rounded-2xl bg-gray-700 px-4 py-6 shadow-lg">
            <FontAwesomeIcon icon={faMedal} size={30} color={"white"} className="" />
            </View>
           </View> 
          <View className="w-full h-px bg-gray-300 " />
        </View>
      </View>
      <Pressable className="absolute bottom-4 mx-4 left-0 right-0 z-10 bg-gray-900 px-8 items-center justify-center py-3 rounded-2xl">
        <Text className="text-center text-white text-xl">Book Now</Text>
      </Pressable>
    </View>



    
  );
}
