
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
    target : "",
    url : "",
    openEditor: function () {
        $("div.app-monoplay-editor-modal")
            .css({
                position: 'fixed',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                zIndex: 10000,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                msTransform: 'translate(-50%, -50%)',
                webkitTransform: 'translate(-50%, -50%)'
            })
            .removeClass("displaynone");
    },
    receiveMessage: function (e) {
        // if (e.origin != "https://store.moonsinsa.com") return false;
        const result = JSON.parse(decodeURIComponent(e.data));
        $("th:contains('net.monoplay.design')").next('td').children('input').val(result.design_id);
    },
    setHtml: function () {
        const th_design_prod = $("th:contains('net.monoplay.design')");
        if (th_design_prod.length > 0) {
            LAUNCHER_FRONT_PRODUCT_DETAIL.editor.is_design_prod = true;
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

        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target = "https://store.moonsinsa.com:3000/design/" +
            window.aLogData.mid + "/" + window.aLogData.shop_no + "/" + window.iProductNo;
        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.url = document.location.protocol + "//" + document.location.host;

        if ($("#app-monoplay-editor-modal").length < 1) {
            $("head").append(
                "<style>" +
                "        .app-monoplay-editor-modal {" +
                "        width: 300px;" +
                "        padding: 20px 60px;" +
                "        background-color: #fefefe;" +
                "        border: 1px solid #888;" +
                "        border-radius: 3px;" +
                "    }" +
                "</style>"
            );

            $("body").append(
                "<div class='app-monoplay-editor-background displaynone' style='position:fixed; z-index:9999; width:100%; height:100%; left:0; top:0; background: rgba(0,0,0,0.4);'>" +
                "<div class='app-monoplay-editor-modal displaynone'>" +
                "    <iframe src='" + LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target + "' id='app-monoplay-editor-iframe'></iframe>" +
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
