const storesBD = [
    'https://rozetka.com.ua/',
    'http://store.com/index.php?route=common/home'

]
let accountLogin = 'testAcc25u85K46jZ';
let flag = false;
var button = document.createElement('button');
button.innerHTML = 'start shopping'
button.setAttribute("id", "checkPage");

document.addEventListener('DOMContentLoaded', function (tab) {
    chrome.tabs.executeScript(null, { "code": "window.location.href" }, function (href) {
        
        for (var i = 0; i < storesBD.length; i++) {
            
            if (href.indexOf(storesBD[i]) > -1) {
                flag = true;
            }
        }
        
        if (flag) {
            document.getElementById('result__txt').innerHTML = "Site: " + href + "</br> This is our partnet, so you can use our cahback";
            document.body.appendChild(button);
            document.getElementById('checkPage').addEventListener('click', function () {
                chrome.tabs.create({ url: href + "?login=" + accountLogin })
            })
            flag = false;
        } else {
        document.getElementById('result__txt').innerHTML = 'We are so sorry, but it`s not our partner(';
        }
        
    })
})