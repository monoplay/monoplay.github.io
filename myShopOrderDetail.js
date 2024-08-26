var LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL = LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL || {};
LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.makeNamespace = function (ns_string) {
    let parts = ns_string.split('.'),
        parent = LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL,
        i;
    // 처음에 중복되는 전역 객체명은 제거
    if (parts[0] === "LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL") {
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
LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.makeNamespace('LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor');

LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor = {
    setHtml: function () {
        // 옵션 안 보이게
        $("p:contains('net.monoplay.design').optionGroup").addClass("displaynone");
    },
}

if (document.readyState === "complete") {
    LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor.setHtml();
} else {
    window.addEventListener("load", LAUNCHER_FRONT_MYSHOP_ORDER_DETAIL.editor.setHtml);
}
