odoo.define('theme_vouge_business.cookie_editor_js', function(require) {
    'use strict';
    console.log('file start');
    var options = require('web_editor.snippets.options');
    var ajax = require('web.ajax');
    var core = require('web.core');
    var qweb = core.qweb;
    var _t = core._t;

    ajax.loadXML('/theme_vouge_business/static/src/xml/cookie_bar.xml', qweb);
    console.log('file end',ajax);
});