const express = require("express");
const QueryString = require("qs");
const app = express();
id = 0;
firstname = "john";
app.listen(8080, function(){
    console.log("포트 8080번으로 대기중...")
});
// 서버 구축하는건 이게 다임

app.get('/book', function(req, res){
    res.send('도서 목록 관련 페이지입니다.');
})
// 학교 네트워크는 막혀 있음
app.get('/checkid', function(req, res){
    query = req.query
    // query 문을 이용해서 요청
    console.log(query)
    // localhot:8080/checkid를 주소창에 작성하면 query가 출력
    res.send('도서 목록 관련 페이지입니다.');
})