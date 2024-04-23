
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
    // 에디터가 필요한 디자인 상품 여부
    is_design_prod : false,
    // 디자인 아이디
    design_id : "",
    target : "",

    openEditor: function () {
        $("div.app-monoplay-editor-background").removeClass("displaynone");
    },
    receiveMessage: function (e) {
        if (e.origin !== 'https://store.moonsinsa.com:3000') return false;
        // const result = JSON.parse(decodeURIComponent(e.data));
        $("th:contains('net.monoplay.design')").next('td').children('input').val(e.data.message);

        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setModify();
        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setTarget();

        // close editor
        $("div.app-monoplay-editor-background").addClass("displaynone");
    },
    setCreate: function () {
        // 구매 버튼 안 보이게
        $("div.action_button #actionBuy").parent("a").addClass("displaynone");
        $("#orderFixArea #actionBuy").parent("a").addClass("displaynone");
        // 카트 버튼 안 보이게
        $("div.action_button #actionCart").addClass("displaynone");
        $("#orderFixArea button.actionCart").addClass("displaynone");
        // 디자인 버튼 제거
        $(".app-monoplay-button-design").remove();
        // black 디자인 버튼 추가
        $("div.action_button #actionCart").before(
            "<a href='#none' class='btnSubmit sizeL app-monoplay-button-design' onClick='LAUNCHER_FRONT_PRODUCT_DETAIL.editor.openEditor()'><span>DESIGN</span></a>"
        );
        $("#orderFixArea button.actionCart").before(
            "<a href='#none' class='btnSubmit sizeM app-monoplay-button-design' onClick='LAUNCHER_FRONT_PRODUCT_DETAIL.editor.openEditor()'><span>DESIGN</span></a>"
        );
    },
    setModify: function () {
        // 구매 버튼 보이게
        $("div.action_button #actionBuy").parent("a").removeClass("displaynone");
        $("#orderFixArea #actionBuy").parent("a").removeClass("displaynone");
        // 카트 버튼 보이게
        $("div.action_button #actionCart").removeClass("displaynone");
        $("#orderFixArea button.actionCart").removeClass("displaynone");
        // 디자인 버튼 제거
        $(".app-monoplay-button-design").remove();
        // white 디자인 버튼 추가
        $("div.action_button #actionCart").before(
            "<button type='button' class='btnNormal sizeL app-monoplay-button-design' onClick='LAUNCHER_FRONT_PRODUCT_DETAIL.editor.openEditor()'>DESIGN</button>"
        );
        $("#orderFixArea button.actionCart").before(
            "<button type='button' class='btnNormal sizeM app-monoplay-button-design' onClick='LAUNCHER_FRONT_PRODUCT_DETAIL.editor.openEditor()'>DESIGN</button>"
        );
    },
    setTarget: function () {
        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.design_id = $("th:contains('net.monoplay.design')").next('td').children('input').val();

        if (LAUNCHER_FRONT_PRODUCT_DETAIL.editor.design_id.length > 0) {
            LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target = "https://store.moonsinsa.com:3000/";
        } else {
            LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target = "https://store.moonsinsa.com:3000/design/" +
                window.aLogData.mid + "/" + window.aLogData.shop_no + "/" + window.iProductNo;
        }

        $('.app-monoplay-editor-iframe').attr('src', LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target);
    },
    setHtml: function () {
        const th_design_prod = $("th:contains('net.monoplay.design')");
        if (th_design_prod.length > 0) {
            // 옵션 안 보이게
            // th_design_prod.eq(0).parent("tr").addClass("displaynone");
            LAUNCHER_FRONT_PRODUCT_DETAIL.editor.is_design_prod = true;
            LAUNCHER_FRONT_PRODUCT_DETAIL.editor.design_id = th_design_prod.next('td').children('input').val();

            if (LAUNCHER_FRONT_PRODUCT_DETAIL.editor.design_id.length > 0) {
                LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setModify();
            } else {
                LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setCreate();
            }

        } else {
            return false;
        }

        if ($("#app-monoplay-editor-modal").length < 1) {
            $("head").append(
                "<style>" +
                "    .app-monoplay-editor-background {" +
                "        position:fixed;" +
                "        z-index:9999;" +
                "        justify-content: center;" +
                "        top: 0;" +
                "        left: 0;" +
                "        width: 100%;" +
                "        height: 100%;" +
                "        background-color: rgba(0,0,0,0.6);" +
                "    }" +
                "    .app-monoplay-editor-modal {" +
                "        position:fixed;" +
                "        top: 50%;" +
                "        left: 50%;" +
                "        width: 85%;" +
                "        height: 85%;" +
                "        transform:translate(-50%, -50%);" +
                "    }" +
                "    .app-monoplay-editor-iframe {" +
                "        border-radius: 8px;" +
                "        top: 0;" +
                "        left: 0;" +
                "        width: 100%;" +
                "        height: 100%;" +
                "    }" +
                "</style>"
            );
            $("body").append(
                "<div class='app-monoplay-editor-background displaynone'>" +
                "<div class='app-monoplay-editor-modal'>" +
                "    <iframe src='" + LAUNCHER_FRONT_PRODUCT_DETAIL.editor.target + "' class='app-monoplay-editor-iframe'></iframe>" +
                "</div></div>"
            );
        }
        LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setTarget();
    },
}

if (document.readyState === "complete") {
    LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setHtml();
} else {
    window.addEventListener("load", LAUNCHER_FRONT_PRODUCT_DETAIL.editor.setHtml);
}
window.addEventListener("message", LAUNCHER_FRONT_PRODUCT_DETAIL.editor.receiveMessage);
