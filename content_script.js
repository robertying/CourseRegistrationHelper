chrome.runtime.onMessage.addListener(function (request) {
    if (request.name === "procedure") {
        switch (request.procedure) {
            case 1:
                var select = document.getElementById("p_kctsm");
                select.value = 14;  // 设为通识英语
                document.getElementsByName("bt")[1].click();  // 点击查询
                break;
            case 2:
                document.getElementsByTagName("a")[5].click();
                document.getElementsByTagName("a")[5].click();// 按课余量排序
                break;
            case 3:
                var array = document.getElementsByName("p_rx_id");
                for (let i = 0; i < array.length; ++i) {
                    array[i].click();  // 选中
                }
                document.getElementsByName("submit1")[1].click();
                break;
            default:
                break;
        }
    }
});
