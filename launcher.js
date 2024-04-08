
var LAUNCHER_FRONT_PRODUCT_DETAIL = LAUNCHER_FRONT_PRODUCT_DETAIL || {};
LAUNCHER_FRONT_PRODUCT_DETAIL.makeNamespace = function (ns_string) {
    let parts = ns_string.split('.'),
        parent = LAUNCHER_FRONT_PRODUCT_DETAIL,
        i;
    // 처음에 중복되는 전역 객체명은 제거
    if (parts[0] === "LAUNCHER_FRONT_PRODUCT_DETAIL") {
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
LAUNCHER_FRONT_PRODUCT_DETAIL.makeNamespace('LAUNCHER_FRONT_PRODUCT_DETAIL.editor');

LAUNCHER_FRONT_PRODUCT_DETAIL.editor = {
    is_design_prod : false,
    receiveMessage: function (e) {
        // if (e.origin != "https://store.moonsinsa.com") return false;
        const result = JSON.parse(decodeURIComponent(e.data));
        $("th:contains('net.monoplay.design')").next('td').children('input').val(result.design_id);
    },
    setHtml: function () {
        const th_design_prod = $("th:contains('net.monoplay.design')");
        if (th_design_prod.length > 0) {
            this.is_design_prod = true;
            // 옵션 안 보이게
            th_design_prod.eq(0).parent("tr").addClass("displaynone");
            // 구매 버튼 안 보이게
            $("div.action_button #actionBuy").parent("a").addClass("displaynone");
            $("#orderFixArea #actionBuy").parent("a").addClass("displaynone");
            // 카트 버튼 안 보이게
            $("div.action_button #actionCart").addClass("displaynone");
            $("#orderFixArea button.actionCart").addClass("displaynone");
            // 디자인 버튼 추가
            $("div.action_button #actionCart").before(
                "<a href='#none' class='btnSubmit sizeL' onClick=''><span id='actionDesign'>DESIGN</span></a>"
            );
            $("#orderFixArea button.actionCart").before(
                "<a href='#none' class='btnSubmit sizeM' onClick=''><span id='actionDesign'>DESIGN</span></a>"
            );

        } else {
            return false;
        }
        if ($("#modal_monoplay_editor").length < 1) {
            $("body").append(
                "<div id='modal_monoplay_editor' class='displaynone'>" +
                "    <iframe src='about:blank' id='monoplay_iframe'></iframe>" +
                "    <a class='modal_close_btn'>닫기</a>" +
                "</div>"
            );
        }
    },
}







if (document.readyState === "complete") {
    LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setHtml();
    window.addEventListener("message", LAUNCHER_FRONT_PRODUCT_DETAIL.editor.receiveMessage, false);
} else {
    window.addEventListener("load", LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setHtml);
}
