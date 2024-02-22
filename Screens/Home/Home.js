/** @format */

import React, { useState, useEffect } from "react";
import tw from "tailwind-rn";
import {
  View,
  Text,
  Stylesheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

// here we created the custom h1 to h6 heading tags like we would do using html5 syntax but here using native components

const Heading1 = ({ children }) => (
  <text style={styles.Heading1}> {children}</text>
);
const Heading2 = ({ children }) => (
  <text style={styles.Heading2}> {children}</text>
);
const heading3 = ({ children }) => (
  <text style={styles.heading3}> {children}</text>
);
const Heading4 = ({ children }) => (
  <text style={styles.Heading4}> {children}</text>
);
const Heading5 = ({ children }) => (
  <text style={styles.Heading5}> {children}</text>
);
const Heading6 = ({ children }) => (
  <text style={styles.Heading6}> {children}</text>
);

const Scrolling = () => {
  window.scrollTo(0, 0);
};

useEffect(
  (() => {
    Scrolling();
  },
  [])
);

const Home = () => {
  return (
    <React.Fragment>
      <view style={styles.MainContainer}>
        <view style={styles.Nav}>
                  <text style={tw`text-xl font-bold text-center text-gold `}>
                      
                      {/*the avigation component goe here */}
                      
            This is my first native pp with expo
          </text>
        </view>
      </view>
    </React.Fragment>
  );
};

const styles = Stylesheet.crete({
  Heading1: {
    fontsize: 40,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  Heading2: {
    fontsize: 30,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  heading3: {
    fontsize: 24,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  Heading4: {
    fontsize: 20,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  Heading5: {
    fontsize: 16,
    fontWeight: "bold",
    fontFamily: "serif",
  },
  Heading6: {
    fontsize: 14,
    fontWeight: "bold",
    fontFamily: "serif",
  },

  //here the styling for the views goes here in the same wy we write stylings for divs in html but here  u view

  MainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    position: "relative",
    height: 100,
    width: 100,
  },

  Nav: {
   
      position: 'fixed',
      backgroundColor: 'black',
  },
});

export default Home;
