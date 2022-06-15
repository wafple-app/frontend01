import { Text, View, Image, StyleSheet } from "react-native";
import StarRating from "../../components/StarRating";

const FoodReview = (props) => {
  const { food_url, user_icon, user_name, rating, ratingCount, description } =
    props;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.reviewImage} source={{ uri: food_url }} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.reviewTextHeader}>
          <View style={styles.userHeader}>
            <Image style={styles.userIcon} source={user_icon} />
            <View style={styles.userNameContainer}>
              <Text style={styles.userName}>{user_name}</Text>
            </View>
          </View>
          <StarRating
            rating={rating}
            ratingCount={ratingCount}
            styles={{
              icon: styles.ratingIcon,
              rating: styles.rating,
              ratingCount: styles.ratingCount,
            }}
          />
        </View>
        <View style={styles.reviewContainer}>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingRight: 5,
    marginBottom: 20,
  },
  leftContainer: {
    width: 107,
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 5,
    alignItems: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  reviewTextHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userHeader: {
    flex: 1,
    flexDirection: "row",
  },
  userNameContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
  },
  reviewImage: {
    width: 107,
    height: 107,
    borderRadius: 5,
  },
  userIcon: {
    width: 28,
    height: 28,
  },
  ratingIcon: {
    height: 18,
    width: 18,
  },
  rating: {
    fontSize: 18,
    color: "black",
  },
  ratingCount: {
    fontSize: 18,
    color: "#EE5757",
  },
  reviewContainer: {
    paddingTop: 10,
  },
});

export default FoodReview;
