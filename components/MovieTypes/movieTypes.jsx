import React from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import MovieCart from "../MovieCart/movieCart";


export default function movieTypes({type}) {
  const data = [
    {
      id: "1",
      name: "Money Heist",
      production: "Marodi Tv",
      date: "Sep 30th 2023",
      fee: "500",
      image: require("../../assets/images/movie1.jpg"),
    },
    {
      id: "2",
      name: "Money Heist",
      production: "Marodi Tv",
      date: "Sep 30th 2023",
      fee: "500",
      image: require("../../assets/images/movie2.jpg"),
    },
    {
      id: "3",
      name: "Money Heist",
      production: "Marodi Tv",
      date: "Sep 30th 2023",
      fee: "500",
      image: require("../../assets/images/movie3.jpg"),
    },
  ];
  return (
    <SafeAreaView className=" w-full h-auto flex justify-center py-2">
      <Text className="font-bold text-xl text-blue-800 mb-4">{type}</Text>
      <FlatList
      className=""
        data={data}
        horizontal={true}
        renderItem={({ item }) => (
          
          <MovieCart
            name={item.name}
            production={item.production}
            date={item.date}
            fee={item.fee}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
