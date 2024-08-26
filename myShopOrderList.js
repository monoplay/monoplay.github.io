var LAUNCHER_FRONT_MYSHOP_ORDER_LIST = LAUNCHER_FRONT_MYSHOP_ORDER_LIST || {};
LAUNCHER_FRONT_MYSHOP_ORDER_LIST.makeNamespace = function (ns_string) {
    let parts = ns_string.split('.'),
        parent = LAUNCHER_FRONT_MYSHOP_ORDER_LIST,
        i;
    // 처음에 중복되는 전역 객체명은 제거
    if (parts[0] === "LAUNCHER_FRONT_MYSHOP_ORDER_LIST") {
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
LAUNCHER_FRONT_MYSHOP_ORDER_LIST.makeNamespace('LAUNCHER_FRONT_MYSHOP_ORDER_LIST.editor');

LAUNCHER_FRONT_MYSHOP_ORDER_LIST.editor = {
    setHtml: function () {
        // 옵션 안 보이게
        $("p:contains('net.monoplay.design').optionGroup").addClass("displaynone");
    },
}

if (document.readyState === "complete") {
    LAUNCHER_FRONT_MYSHOP_ORDER_LIST.editor.setHtml();
} else {
    window.addEventListener("load", LAUNCHER_FRONT_MYSHOP_ORDER_LIST.editor.setHtml);
}
