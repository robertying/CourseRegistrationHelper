// 取消弹窗

function commitRxAdd() {
    var frm = window.document.frm;

    if (checkRxCommit()) {
        if (confirmSubmited(frm)) {
            frm.m.value = "saveRxKc";
            frm.submit();
        }
    }
}

var disablerFunction = function () {

    window.alert = function alert(msg) { console.log('Hidden Alert ' + msg); };
    window.confirm = function confirm(msg) {
        console.log("Hidden Confirm " + msg);
        return true; /*simulates user clicking yes*/
    };

};
var disablerCode = "(" + disablerFunction.toString() + ")();";
var disablerScriptElement = document.createElement('script');
disablerScriptElement.textContent = disablerCode;

document.documentElement.appendChild(disablerScriptElement);
disablerScriptElement.parentNode.removeChild(disablerScriptElement);