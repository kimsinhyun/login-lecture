const app = require("../app");

const PORT = 3000

app.listen(PORT, () => { // PORT부분에 바로 3000이라 치면 안좋은 습관이기 때문에 위에 따로 PORT라는 변수에 값을 담아서 사용
    console.log("서버 가동")
})