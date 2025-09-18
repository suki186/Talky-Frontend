import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { getInputStyles } from "../utils/getInputStyles";
import { getDropdownBgColor } from "../utils/getBgColor";
import { COLORS } from "../styles/color";

const DEFAULT_ITEM_HEIGHT = 31.33; // 항목 하나 높이
const MAX_VISIBLE_ITEMS = 12; // 최대 항목 개수: 넘어가면 스크롤
const MAX_HEIGHT = DEFAULT_ITEM_HEIGHT * MAX_VISIBLE_ITEMS;

const Selector = ({
  items = [],
  selectedValue,
  onSelect,
  placeholder = "선택",
  itemHeight = DEFAULT_ITEM_HEIGHT,
  width = "242.67",
  variant = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const { backgroundColor, iconColor, borderWidth, borderColor } =
    getInputStyles(isFocused, selectedValue || "", false, variant);
  const dropdownBgColor = getDropdownBgColor(variant);

  // 애니메이션 초기값 0
  const dropdownHeight = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const toValue = modalVisible
      ? Math.min(DEFAULT_ITEM_HEIGHT * items.length, MAX_HEIGHT)
      : 0;

    Animated.timing(dropdownHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (!modalVisible) setIsFocused(false);
    });
  }, [modalVisible, itemHeight, dropdownHeight, items.length]);

  const handleSelect = (role) => {
    onSelect(role);
    setModalVisible(false);
    setIsFocused(false);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.selectorContainer,
          {
            backgroundColor,
            width,
            height: DEFAULT_ITEM_HEIGHT,
            borderWidth,
            borderColor,
          },
        ]}
        onPress={() => {
          setIsFocused(true);
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.selectorText}>
          {selectedValue ? selectedValue : placeholder}
        </Text>
        <Ionicons name="caret-down-sharp" size={12.67} color={iconColor} />
      </TouchableOpacity>

      {/*  선택 항목 dropdown */}
      <Animated.View
        style={[
          styles.dropdown,
          {
            width: width - 10,
            height: dropdownHeight,
            backgroundColor: dropdownBgColor,
          },
        ]}
      >
        <ScrollView
          nestedScrollEnabled
          scrollEnabled={items.length > MAX_VISIBLE_ITEMS}
        >
          {items.map((item) => {
            const isSelected = selectedValue === item;
            return (
              <Pressable
                key={item}
                style={[styles.modalItem, isSelected && styles.selectedItem]}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.modalText}>{item}</Text>
                {isSelected ? (
                  <Ionicons
                    name="radio-button-on"
                    size={16}
                    color={COLORS.MAIN_YELLOW3}
                  />
                ) : (
                  <FontAwesome name="circle" size={16} color={COLORS.WHITE} />
                )}
              </Pressable>
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    alignItems: "center",
  },
  selectorContainer: {
    borderRadius: 16.67,
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 2, // dropdown보다 위로
  },
  selectorText: {
    fontSize: 11.33,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
  dropdown: {
    position: "absolute",
    overflow: "hidden",
    top: 29.33,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 3.33,
    borderBottomRightRadius: 3.33,
    justifyContent: "center",
    zIndex: 1,
  },
  modalItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 6.33,
  },
  selectedItem: {
    backgroundColor: "#FFD32180",
  },
  modalText: {
    fontSize: 11.33,
    fontFamily: "PretendardMedium",
    color: COLORS.BLACK,
  },
});

export default Selector;
