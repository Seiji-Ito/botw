
var filepath = location.pathname;
var pathinfo = filepath.split('/');
var filename = pathinfo.pop();

//gは全ての文字を対象にする
//[]の中に^(キャレット)を入れると指定した文字を含まないという意味になる
var pageno = filename.replace(/[^0-9]/g, '');
document.title = "BOTW-travel journal day" + pageno + "-"