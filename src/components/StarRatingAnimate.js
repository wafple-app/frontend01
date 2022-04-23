import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { View, TouchableWithoutFeedback, Animated } from "react-native";

const StarRatingAnimate = () => {
  let stars = [];
  const [rating, setRating] = useState(2);

  const rate = (star) => {
    setRating(star);
  };

  const Star = ({ filled }) => {
    return (
      <FontAwesome
        name={filled === true ? "star" : "star-o"}
        size={32}
        color={"yellow"}
        style={{ marginHorizontal: 6 }}
      />
    );
  };

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <TouchableWithoutFeedback key={i} onPress={() => rate(i)}>
        <Animated.View>
          <Star filled={i <= rating ? true : false} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default StarRatingAnimate;
