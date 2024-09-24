import TypeIcon from "../UI/TypeIcon";
import { Image, Skeleton } from "@rneui/themed";
import React from "react";
import { View, Text } from "react-native";
import { Pokemon } from "../../api/borrius-types";

export function BasicInfoBlock({
  selectedPokemon,
}: {
  selectedPokemon: Pokemon;
}) {
  return (
    <View className="flex-col  items-center justify-center w-[150px] mx-1">
      <Text className="text-base md:text-lg items-center font-bold capitalize">
        {selectedPokemon.name}
      </Text>
      {/* MAIN SPRITE */}
      <Image
        style={{
          resizeMode: "contain",
          width: 100,
          height: 100,
          maxWidth: 100,
          maxHeight: 100,
          alignSelf: "center",
        }}
        source={{
          uri: selectedPokemon.sprites.official,
        }}
        PlaceholderContent={<Skeleton circle animation="pulse" />}
        containerStyle={{
          borderRadius: 15,
          backgroundColor: "#e7e5e4",
          margin: 5,
        }}
      />
      <View className="flex-col items-center">
        <TypeIcon typeList={selectedPokemon.typeList} />
        <View className="flex-row">
          <Text className="font-bold text-xs md:text-small">Abilities: </Text>
          <Text className="flex-wrap px-1 text-xs md:text-small">
            {selectedPokemon.abilities.map((ability) => ability + "\n")}
          </Text>
        </View>
      </View>
    </View>
  );
}
