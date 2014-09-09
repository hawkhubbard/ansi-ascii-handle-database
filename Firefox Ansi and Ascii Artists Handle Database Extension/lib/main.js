var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    "include": "*.facebook.com",
    "contentScriptFile": data.url("js/insert_handles.js"),
    "contentScriptWhen": "end"
});