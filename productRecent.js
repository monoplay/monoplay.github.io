var LAUNCHER_FRONT_PRODUCT_RECENT = LAUNCHER_FRONT_PRODUCT_RECENT || {};
LAUNCHER_FRONT_PRODUCT_RECENT.makeNamespace = function (ns_string) {
    let parts = ns_string.split('.'),
        parent = LAUNCHER_FRONT_PRODUCT_RECENT,
        i;
    // 처음에 중복되는 전역 객체명은 제거
    if (parts[0] === "LAUNCHER_FRONT_PRODUCT_RECENT") {
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
LAUNCHER_FRONT_PRODUCT_RECENT.makeNamespace('LAUNCHER_FRONT_PRODUCT_RECENT.editor');

LAUNCHER_FRONT_PRODUCT_RECENT.editor = {
    setHtml: function () {
        // button 안 보이게
        $('div.prdBox .buttonGroup').addClass("displaynone");
        // 옵션 안 보이게
        $("span:contains('net.monoplay.design').optionDesc").closest("ul").addClass("displaynone");
    },
}

if (document.readyState === "complete") {
    LAUNCHER_FRONT_PRODUCT_RECENT.editor.setHtml();
} else {
    window.addEventListener("load", LAUNCHER_FRONT_PRODUCT_RECENT.editor.setHtml);
}
