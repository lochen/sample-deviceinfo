document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	document.getElementById("deviceName").addEventListener("click", viewDeviceName);
	document.getElementById("deviceCordovaVersion").addEventListener("click", viewCordovaVersion);
    document.getElementById("devicePlatform").addEventListener("click", viewDevicePlatform);
    document.getElementById("deviceUUID").addEventListener("click", viewDeviceUUID);
    document.getElementById("deviceVersion").addEventListener("click", viewDeviceVersion);
}

function viewDeviceName(){
    var infoField = document.getElementById("infoField");
    infoField.value=device.name;
}
function viewCordovaVersion(){
    var infoField = document.getElementById("infoField");
    infoField.value=device.cordova;
}
function viewDevicePlatform(){
    var infoField = document.getElementById("infoField");
    infoField.value=device.platform;
}
function viewDeviceUUID(){
    var infoField = document.getElementById("infoField");
    infoField.value=device.uuid;
}
function viewDeviceVersion(){
    var infoField = document.getElementById("infoField");
    infoField.value=device.version;
}