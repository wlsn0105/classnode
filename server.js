const express = require("express");
const app = express();

app.listen(8080, function(){
    console.log("포트 8080번으로 대기중...")
});
// 서버 구축하는건 이게 다임

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
// 학교 네트워크는 막혀 있음