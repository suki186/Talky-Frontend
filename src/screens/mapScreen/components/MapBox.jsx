import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const MapBox = ({ width = 328, height = 480 }) => {
  const html = `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          html, body, #map {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
        </style>
        <script src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=ffb5e58e3e81d3243c4974d86b9b5b00"></script>
      </head>
      <body>
        <div id="map"></div>
        <script>
          kakao.maps.load(function() {
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(37.5820, 127.0104), // 서울 시청
              level: 3
            };
            var map = new kakao.maps.Map(container, options);

            // 현재 위치 마커 표시
            var marker = new kakao.maps.Marker({
              position: new kakao.maps.LatLng(37.5820, 127.0104)
            });
            marker.setMap(map);
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style = { [styles.mapContainer, { width, height }] }>
      <WebView
        originWhitelist = { ["*"] }
        source = {{ html }}
        style = {{ flex: 1 }}
        javaScriptEnabled = { true }
        domStorageEnabled = { true }
        scrollEnabled = { false }
        nestedScrollEnabled = { true }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 5,
  },
});

export default MapBox;
