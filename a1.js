/**
 * Created by liyan on 2016/4/12.
 */
$(function(){
    $.extend({
        pushHistory: function () {
            var state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", location.hash);
        }
    });
    window.addEventListener("popstate", function (e) {
        $("#modal").show() && $("#tips").show();
        setTimeout(function () {
            $("#modal").hide() && $("#tips").hide();
            $.pushHistory();
        },  2000);
    });
    $.pushHistory();
})
