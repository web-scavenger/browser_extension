const storesBD = [
    'rozetka.com.ua',

]
let accountLogin = 'testAcc258546';
let flag = false;

function onExtClick(tab){
    for(let i = 0; i < storesBD.length; i++){
        if(tab.url.indexOf(storesBD[i]) != -1){
            flag = true;
            
        }
    }
    if(flag){
        alert('has matches!!!')
        chrome.tabs.create({ url : tab.url + "?" + accountLogin})
    }
    else{
        alert('False')
    }
    
}




chrome.browserAction.onClicked.addListener(onExtClick);