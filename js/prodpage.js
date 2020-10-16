//// product page JS - prodpage.js //////

// 값셋팅 변수
var tit; //타이틀
var col; //컬렉션
var pri; //가격
var cat; //구분
var isrc; //이미지경로

// 파라미터 받기 //
var pm = location.href; //url읽어오기


//2. 물음표가 있어야 자를 수 있으므로 이것을 체크한다!
// indexOf(문자열) 찾는 문자열순번 리턴하는 내장함수
// 만약 찾는 문자열이 없을 경우엔 -1을 리턴한다! 이것을 없는지 여부를 걸러냄
console.log("물음표체크:" + pm.indexOf("?"));

if (pm.indexOf("?") === -1) {
    // 물음표 파라미터 없이 들어온경우 첫페이지로 돌아가!
    location.href = "store.html";
} //// if ////////////////////




pm = pm.split("?")[1]; //?표뒤
pm = pm.split("&"); //?표뒤
console.log(pm);

// for in문(개수만큼 알아서 돈다)
// 지역변수 x에는 순번이 자동셋팅됨
for (var x in pm) {
    // 파라미터 이름
    var nm = pm[x].split("=");
    console.log(nm[0]);
    // 분류별 변수에 할당
    switch (nm[0]) {
        case "tit":
            tit = unescape(nm[1]);
            break;
        case "col":
            col = unescape(nm[1]);
            break;
        case "pri":
            pri = unescape(nm[1]);
            break;
        case "cat":
            cat = nm[1];
            break;
        case "isrc":
            isrc = unescape(nm[1]);
            break;
    } ///// switch case //////

} //// for in ///////



console.log("셋팅값:" + tit + "^" + col + "^" + pri + "^" + cat + "^" + isrc);




$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    // 텍스트
    var pdvt = $(".pdvt");
    console.log("개수:" + pdvt.length);

    // 이미지
    var pdvi = $(".pdv");
    console.log("개수:" + pdvi.length);

    // 1.텍스트 셋팅!(공통)
    pdvt.eq(0).text(col);
    pdvt.eq(1).text(col);
    pdvt.eq(2).text(tit);
    pdvt.eq(3).text(pri);


    // 2. 이미지셋팅(구분해야함!)

    var allow = ["MRC-ER04", "MRC-RS06", "MRC-BL08", "MRC-NL07"];
    var alw = 0;
    for (var x in allow) {
        // 허용하는 타이틀과 같으면 상태값을 1로 변경함!
        if (tit === allow[x]) alw = 1;
    } /////// forIn //////////////

    // 허용상태값 찍기
    console.log("허용?" + alw);


    // 풀셋팅 : 허용상태값이 1일때만 셋팅
    if (alw) {

        for (var i = 0; i < pdvi.length; i++) {
            var cbgi = pdvi.eq(i).css("background-image");
            cbgi = cbgi.replace("earring", cat);
            pdvi.eq(i).css({
                "background-image": cbgi
            });
            //console.log(pdvi.eq(i).css("background-image"));
        } /////// for /////////^////////////

    } //////// if ////////////////
    else { // 풀셋팅이 아닐경우
        pdvi.eq(0).css({
            "background-image": "url(" + isrc + ")"
        });
    } //////// else //////////////////////



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
