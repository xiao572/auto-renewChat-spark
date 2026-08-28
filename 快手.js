// ==================== 配置区域 ====================
// 需要发送的好友昵称列表
var friendNames = ["用户1", "用户二"];
// 锁屏密码（6位数字）
var password = [1, 2, 3, 4, 5, 6];
// ==================== 配置区域结束 ====================

auto.waitFor();
device.setMusicVolume(0);

var d = new Date();
notice("开始执行续火花", "当前时间:" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日 " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

var startTime = new Date().getTime();
sleep(5000);
device.wakeUpIfNeeded();

// ===== 解锁屏幕 =====
function unlockScreen() {
    sleep(1000);
    swipe(device.width / 2, device.height - 100, device.width / 2, device.height / 2, 500);
    sleep(2000);
    openApp();
}

// ===== 打开快手 =====
function openApp() {
    app.launchApp("快手");
    sleep(20000);  // 等待20秒，让快手完全加载
    findUser();
}

// ===== 查找可点击父级控件 =====
function findClickableParent(view) {
    var parent = view.parent();
    while (parent && !parent.clickable()) {
        parent = parent.parent();
    }
    return parent;
}

// ===== 通过搜索入口进入聊天 =====
function findUser() {
    // 点击右上角搜索图标
    var searchBtn = id("right_btn").findOne(3000);
    if (searchBtn) {
        searchBtn.click();
    } else {
        var searchDesc = desc("搜索").findOne(2000);
        if (searchDesc) {
            searchDesc.click();
        } else {
            var searchText = text("搜索").findOne(2000);
            if (searchText) {
                searchText.click();
            }
        }
    }
    sleep(3000);

    // 循环处理每个好友
    for (var i = 0; i < friendNames.length; i++) {
        var name = friendNames[i];

        // 点击输入框并清空
        var inputBox = className("android.widget.EditText").findOne(3000);
        if (inputBox) {
            inputBox.click();
            sleep(500);
            inputBox.setText("");
            sleep(500);
            inputBox.setText(name);
        }
        sleep(2000);

        // 查找搜索结果中的用户
        var targetUser = className("android.widget.TextView").text(name).findOne(3000);
        if (targetUser) {
            var clickableParent = findClickableParent(targetUser);
            if (clickableParent) {
                clickableParent.click();
            } else {
                targetUser.click();
            }
            sleep(3000);
            sendMessage();
            back();
            sleep(2000);
        }
    }

    back();
    sleep(1000);
    killapp();
}

// ===== 发送消息 =====
function sendMessage() {
    var content = "";
    var from = "";
    var types = ["i", "j", "k"];
    var randomType = types[Math.floor(Math.random() * types.length)];

    var res = http.get("https://v1.hitokoto.cn/?c=" + randomType);
    if (res.statusCode == 200) {
        var data = res.body.json();
        content = data.hitokoto;
        from = data.from;
    } else {
        content = "今天网络不佳，没词了";
    }

    var editor = id("editor").findOne(3000);
    if (editor) {
        editor.click();
        sleep(500);
        editor.setText("正在尝试自动续火花");
    }
    sleep(100);
    var sendBtn = id("send_btn").findOne(2000);
    if (sendBtn) {
        sendBtn.click();
    }
    sleep(100);

    var emotionBtn = id("emotion_btn").findOne(2000);
    if (emotionBtn) {
        emotionBtn.click();
    }
    sleep(100);

    var targetWidget = id("tabIndicator").findOne(2000);
    if (targetWidget) {
        var bounds = targetWidget.bounds();
        var centerY = bounds.centerY();
        var startX = bounds.right;
        var endX = bounds.left + 10000;
        swipe(startX, centerY, endX, centerY, 500);
    }
    sleep(1000);
    auto.waitFor();
    sleep(1000);

    var emojiPanel = id("emotion_name").findOne(2000);
    if (emojiPanel) {
        var emojiBounds = emojiPanel.bounds();
        swipe(device.width / 2, emojiBounds.top - 100, device.width / 2, emojiBounds.bottom + 100, 500);
    }
    sleep(1000);

    for (var j = 0; j < 5; j++) {
        var sparkEmoji = id("emotion_name").className("android.widget.TextView").text("续火花").findOne(2000);
        if (sparkEmoji) {
            sparkEmoji.parent().click();
        }
        sleep(500);
    }

    sleep(1000);
    var sendBtn2 = id("send_btn").findOne(2000);
    if (sendBtn2) {
        sendBtn2.click();
    }
    sleep(1000);

    var editor2 = id("editor").findOne(3000);
    if (editor2) {
        editor2.click();
        sleep(500);
        editor2.setText("今日一言:\"" + content + " —— " + from + "\"");
    }
    sleep(1000);
    var sendBtn3 = id("send_btn").findOne(2000);
    if (sendBtn3) {
        sendBtn3.click();
    }
    sleep(1000);

    var runTime = new Date().getTime() - startTime;
    var seconds = runTime / 1000;
    var editor3 = id("editor").findOne(3000);
    if (editor3) {
        editor3.click();
        sleep(500);
        editor3.setText("续火花完成,总耗时: " + seconds + "秒");
    }
    sleep(1000);
    var sendBtn4 = id("send_btn").findOne(2000);
    if (sendBtn4) {
        sendBtn4.click();
    }
    sleep(1000);

    back();
}

// ===== 清理后台 =====
function killapp() {
    recents();
    sleep(1000);
    var screenHeight = device.height;
    var screenWidth = device.width;
    swipe(screenWidth / 2, screenHeight / 2 + 400, screenWidth / 2, screenHeight / 2 - 400, 200);
    sleep(1000);
    home();
    sleep(1000);
    var runTime = new Date().getTime() - startTime;
    notice("续火花完成！", "总耗时: " + runTime + "毫秒");
}

// ===== 启动 =====
unlockScreen();