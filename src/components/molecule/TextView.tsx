import { View, Text, StyleProp, TextStyle } from "react-native";
import React from "react";

type textProps = {
  children?: string;
  textStyle?: TextStyle;
};
const TextView = (props: textProps) => {
  return <Text style={props.textStyle}>{props.children}</Text>;
};

export default TextView;
