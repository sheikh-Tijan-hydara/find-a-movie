import React from "react";
import {SafeAreaView, ScrollView } from 'react-native';
import {Footer, Header, MovieTypes} from '../components';

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center "> 
      <Header/>
      <ScrollView className=" w-full h-full bg-gray-100 mt-16 px-8 py-2">
      <MovieTypes type="Action Movies" />
      <MovieTypes type="Animi Movies" />
      <MovieTypes type="Fiction Movies" />
      </ScrollView>
     
      <Footer activeTab="home"/>
      
    </SafeAreaView>
  );
}
