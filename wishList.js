var LAUNCHER_FRONT_MYSHOP_WISHLIST = LAUNCHER_FRONT_MYSHOP_WISHLIST || {};
LAUNCHER_FRONT_MYSHOP_WISHLIST.makeNamespace = function (ns_string) {
    let parts = ns_string.split('.'),
        parent = LAUNCHER_FRONT_MYSHOP_WISHLIST,
        i;
    // 처음에 중복되는 전역 객체명은 제거
    if (parts[0] === "LAUNCHER_FRONT_MYSHOP_WISHLIST") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // 프로퍼티가 존재하지 않는 경우 생성
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
}
// 네임스페이스 생성 함수
LAUNCHER_FRONT_MYSHOP_WISHLIST.makeNamespace('LAUNCHER_FRONT_MYSHOP_WISHLIST.editor');

LAUNCHER_FRONT_MYSHOP_WISHLIST.editor = {
    setHtml: function () {
        // button 안 보이게
        $('div.prdBox .buttonGroup').addClass("displaynone");
        // 옵션 안 보이게
        $("span:contains('net.monoplay.design').optionStr").addClass("displaynone");
        // const option = $("span:contains('net.monoplay.design').optionStr");
        // option.addClass("displaynone");

        // option.each(function (index, item) {
        //     const design_id = $(item).text().replace(/net.monoplay.design|:|\[|\]|\s/gi, "");
        //     const target = $(item).closest("div.description").find("a.ec-product-name").prop("href") +
        //         '/design_id/' + design_id;
        //
        //     // target url ㅂㅏ꾸기
        //     $(item).closest("div.description").find("a.ec-product-name").prop("href", target);
        //     $(item).closest("div.prdBox").children("div.thumbnail").find("a:eq(0)").prop("href", target);
        // });
    },
}

if (document.readyState === "complete") {
    LAUNCHER_FRONT_MYSHOP_WISHLIST.editor.setHtml();
} else {
    window.addEventListener("load", LAUNCHER_FRONT_MYSHOP_WISHLIST.editor.setHtml);
}
