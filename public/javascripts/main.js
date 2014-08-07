/**
* Created by ANNikolaev on 07.08.2014.
*/
///<reference path="../../.d.ts/underscore/underscore.d.ts" />
///<reference path="../../.d.ts/jquery/jquery.d.ts" />
$(function () {
    var template;
    $.ajax("/templates/pagetreeitem.html").done(function (data) {
        template = _.template(data);
    });

    var loadList = function (item) {
        $(item).click(function () {
            var pageId = $(item).attr("data-pageId");
            $.ajax("/child-pages/" + pageId).done(function (data) {
                var html = template({ data: data });
                var dom = $(html);
                _.each(dom.find(".pagelist-item"), loadList);
                $(item).append(dom);
            });
            return false;
        });
    };

    _.each($(".pagelist-item"), loadList);
});
//# sourceMappingURL=main.js.map
