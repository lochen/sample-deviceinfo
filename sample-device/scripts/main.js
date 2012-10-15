document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    deviceInfoApp= new deviceInfoApp();
	deviceInfoApp.run();
}

function deviceInfoApp(){}

deviceInfoApp.prototype = {
    
    run:function(){
        var that = this;
        document.getElementById("deviceName").addEventListener("click", that._viewDeviceName);
	    document.getElementById("deviceCordovaVersion").addEventListener("click", that._viewCordovaVersion);
        document.getElementById("devicePlatform").addEventListener("click", that._viewDevicePlatform);
        document.getElementById("deviceUUID").addEventListener("click", that._viewDeviceUUID);
        document.getElementById("deviceVersion").addEventListener("click", that._viewDeviceVersion);
    },
    
    _viewDeviceName : function() {
	    var infoField = document.getElementById("infoField");
	    infoField.value = device.name;
    },
    
	_viewCordovaVersion : function() {
        var infoField = document.getElementById("infoField");
        infoField.value = device.cordova;
	},
    
    _viewDevicePlatform : function (){
        var infoField = document.getElementById("infoField");
        infoField.value=device.platform;
    },
    
    _viewDeviceUUID : function (){
        var infoField = document.getElementById("infoField");
        infoField.value=device.uuid;
    },
    
    _viewDeviceVersion:function viewDeviceVersion(){
        var infoField = document.getElementById("infoField");
        infoField.value=device.version;
    }
};