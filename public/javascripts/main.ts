/**
 * Created by ANNikolaev on 07.08.2014.
 */
///<reference path="../../.d.ts/underscore/underscore.d.ts" />
///<reference path="../../.d.ts/jquery/jquery.d.ts" />

$(()=> {

    var template;
    $.ajax("/templates/pagetreeitem.html").done((data) => {
        template = _.template(data);
    })

    var loadList = (item : HTMLElement) => {
        $(item).click(()=> {
            var pageId = $(item).attr("data-pageId");
            $.ajax("/child-pages/" + pageId).done( (data) => {
                var html = template({data: data});
                var dom = $(html);
                _.each(dom.find(".pagelist-item"),loadList);
                $(item).append(dom);
            });
            return false;
        })
    };

    _.each($(".pagelist-item"), loadList);

})