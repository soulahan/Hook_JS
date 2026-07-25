// ==UserScript==
// @name         Hook_responseText
// @namespace    http://tampermonkey.net/
// @version      2025-01-05
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let property_accessor = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "responseText"); // 获取目标属性访问器描述符
    let get_accessor = property_accessor.get; // 获取getter

    Object.defineProperty(XMLHttpRequest.prototype, "responseText", {
        get: function () {
            let response_text = get_accessor.call(this,XMLHttpRequest.prototype);
            console.log(response_text);

            return response_text; // 当网站js获取目标属性值时调用原属性getter返回结果
        }
    });
})();