$(function() {
    var a = $("a:contains('非表示にした注文の表示')");
    //console.log(a);
    var span = a.parent();
    //console.log(span);
    var li = span.parent();
    //console.log(li);
    li.hide();
});