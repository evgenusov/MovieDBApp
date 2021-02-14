module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ["unused-imports"],
  rules: {
    "react-hooks/exhaustive-deps": "off"
  },
};
