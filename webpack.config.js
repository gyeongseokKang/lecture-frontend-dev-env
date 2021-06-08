const path = require("path"); // node의 path 메소드를 가져옴

// 필수적으로 설정해야할 3가지 mode, entry, output

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "[name].js", //main.js",
    path: path.resolve(__dirname, "dist"), // 절대경로를 계산해주는 resolve
  },
};
