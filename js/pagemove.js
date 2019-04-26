
var pageLinkSet = function () {
    // リンク先のファイル名を作成
    var pagetype = filename.replace(/[0-9]/g, '').split('.')[0];
    var next;
    var prev;
    var prevpageNo = parseInt(pageno) - 1;
    var nextpageNo = parseInt(pageno) + 1;
    if (pagetype == "index") {
        prev = "journal" + prevpageNo.toString() + ".html"
        next = "journal" + pageno + ".html"
    } else {
        prev = "index" + pageno + ".html"
        next = "index" + nextpageNo + ".html"
    }

    // リンク設定
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("prev").setAttribute("href", prev);
        document.getElementById("next").setAttribute("href", next);
    });
};

pageLinkSet();