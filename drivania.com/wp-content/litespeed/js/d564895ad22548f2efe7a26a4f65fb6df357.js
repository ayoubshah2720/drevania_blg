(()=>{"use strict";const e=function(e,t){var n=t.find(".jss-ff-el-net-promoter");n.length&&e.each(n,(function(t,n){e(n).on("click","label",(function(t){var n=e(this);n.addClass("active"),n.prevAll().removeClass("active"),n.nextAll().removeClass("active")}))}))};var t=function(e){!function(e){e.on("click",".js-repeat .repeat-plus",(function(e){var t=jQuery(this),n=t.closest(".ff-el-repeat"),a=parseInt(n.data("max_repeat")),i=n.find(".ff-t-cell:first-child .ff-el-input--content > input").length;if(!(a&&a<=i)){a&&a-i==1&&n.find(".repeat-plus").hide();var r=t.closest("div"),o=r.index(),f=t.closest(".ff-el-input--content").find(".ff-t-cell").length;t.closest(".ff-el-input--content").find(".ff-t-cell").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a=n.attr("tabindex"),i=n.clone(),r={value:"",id:"ffrpt-"+(new Date).getTime()+e};a&&(r.tabIndex=parseInt(a)+f),i.prop(r),i.insertAfter(n)})),r.clone().insertAfter(r),t.closest(".ff-el-input--content").find(".ff-t-cell").eq(0).find("input:eq(".concat(o+1,")")).focus()}})),e.on("click",".js-repeat .repeat-minus",(function(e){var t=!1,n=jQuery(this),a=n.closest("div");n.closest(".ff-el-repeat").find(".repeat-plus").show(),n.closest(".ff-el-input--content").find(".ff-t-cell").each((function(){var e=a.index(),n=jQuery(this).find(".ff-el-form-control:eq("+e+")");a.siblings().length&&(t=n.remove().length)})),t&&a.remove()}))}(e),function(e){var t=window.localStorage.getItem("ff_window_type");jQuery(".ff_form_preview").length&&jQuery(".ff_flexible_table").addClass(t),e.on("screen-change",(function(e,t){jQuery(".ff_form_preview").length&&("375px"===t?jQuery(".ff_flexible_table").addClass("mobile"):jQuery(".ff_flexible_table").removeClass("mobile"))})),e.on("click",".js-repeater .repeat-plus",(function(e){var t=jQuery(this),n=t.closest("table"),a=t.closest("tr"),i=parseInt(n.attr("data-max_repeat")),r=n.find("tbody tr").length;if(i&&r==i)n.addClass("repeat-maxed");else{var o=a.clone();o.find("td").each((function(e,t){var n=jQuery(this).find(".ff-el-form-control:last-child"),a="ffrpt-"+(new Date).getTime()+e,i={value:n.attr("data-default")||"",id:a};n.prop(i);var r=n.attr("data-mask");r&&n.mask(r)})),o.insertAfter(a);var f=n.attr("data-root_name"),l=0;n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){var a=jQuery(n);0==e&&(l=a.attr("tabindex")),a.prop({name:f+"["+e+"][]"}),a.attr("data-name",f+"_"+t+"_"+e),l&&a.attr("tabindex",l)}))})),o.find(".ff-el-form-control")[0].focus(),n.trigger("repeat_change"),i&&r+1==i&&n.addClass("repeat-maxed")}})),e.on("click",".js-repeater .repeat-minus",(function(e){var t=jQuery(this),n=t.closest("table");if(1!=n.find("tbody tr").length){t.closest("tr").remove(),n.removeClass("repeat-maxed");var a=n.attr("data-root_name");n.find("tbody tr").each((function(e,t){jQuery(this).find(".ff-el-form-control").each((function(t,n){jQuery(n).prop({name:a+"["+e+"][]"})}))})),n.trigger("repeat_change")}}))}(e),function(e){e.on("keydown",".repeat-plus",(function(e){"Enter"===e.key&&(e.preventDefault(),jQuery(this).click())})),e.on("keydown",".repeat-minus",(function(e){"Enter"===e.key&&(e.preventDefault(),jQuery(this).click())}))}(e)};function n(){n=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,i){var o=new RegExp(e,n);return t.set(o,i||t.get(e)),a(o,r.prototype)}function o(e,n){var a=t.get(n);return Object.keys(a).reduce((function(t,n){var i=a[n];if("number"==typeof i)t[n]=e[i];else{for(var r=0;void 0===e[i[r]]&&r+1<i.length;)r++;t[n]=e[i[r]]}return t}),Object.create(null))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(r,RegExp),r.prototype.exec=function(t){var n=e.exec.call(this,t);if(n){n.groups=o(n,this);var a=n.indices;a&&(a.groups=o(a,this))}return n},r.prototype[Symbol.replace]=function(n,a){if("string"==typeof a){var r=t.get(this);return e[Symbol.replace].call(this,n,a.replace(/\$<([^>]+)>/g,(function(e,t){var n=r[t];return"$"+(Array.isArray(n)?n.join("$"):n)})))}if("function"==typeof a){var f=this;return e[Symbol.replace].call(this,n,(function(){var e=arguments;return"object"!=i(e[e.length-1])&&(e=[].slice.call(e)).push(o(e,f)),a.apply(this,e)}))}return e[Symbol.replace].call(this,n,a)},n.apply(this,arguments)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,o(a.key),a)}}function o(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:String(t)}const f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.fields=t,this.formData=n,this.counter=0,this.field_statues={}}var t,a,o;return t=e,(a=[{key:"setFields",value:function(e){this.fields=e}},{key:"setFormData",value:function(e){this.formData=e}},{key:"getCalculatedStatuses",value:function(){for(var e=0,t=Object.keys(this.fields);e<t.length;e++){var n=t[e],a=this.fields[n];this.field_statues[n]=this.evaluate(a,n)}return this.field_statues}},{key:"evaluate",value:function(e,t){var n=this,a=!1;if(e.status){this.counter++;var i=e.type,r=1;"any"==i&&(r=0),e.conditions.forEach((function(e){var a=n.getItemEvaluateValue(e,n.formData[e.field]);a&&n.fields[e.field]&&e.field!=t&&(a=n.evaluate(n.fields[e.field],e.field)),"any"==i?a&&(r=1):!a&&r&&(r=!1)})),a=1==r}return e.status&&e.conditions.length&&!a||e.container_condition&&(a=this.evaluate(e.container_condition)),a}},{key:"getItemEvaluateValue",value:function(e,t){t=t||null;var n=jQuery("[name='".concat(e.field,"']"));return"="==e.operator?""===e.value?null===t:"object"==i(t)?null!==t&&-1!=t.indexOf(e.value):n.hasClass("ff_numeric")?this.parseFormattedNumericValue(n,t)==this.parseFormattedNumericValue(n,e.value):t==e.value:"!="==e.operator?"object"==i(t)?null!==t&&-1==t.indexOf(e.value):n.hasClass("ff_numeric")?this.parseFormattedNumericValue(n,t)!=this.parseFormattedNumericValue(n,e.value):t!=e.value:">"==e.operator?t&&this.parseFormattedNumericValue(n,t)>this.parseFormattedNumericValue(n,e.value):"<"==e.operator?t&&this.parseFormattedNumericValue(n,t)<this.parseFormattedNumericValue(n,e.value):">="==e.operator?t&&this.parseFormattedNumericValue(n,t)>=this.parseFormattedNumericValue(n,e.value):"<="==e.operator?t&&this.parseFormattedNumericValue(n,t)<=this.parseFormattedNumericValue(n,e.value):"startsWith"==e.operator?t&&t.startsWith(e.value):"endsWith"==e.operator?t&&t.endsWith(e.value):"contains"==e.operator?null!==t&&-1!=t.indexOf(e.value):"doNotContains"==e.operator?null!==t&&-1==t.indexOf(e.value):"test_regex"==e.operator&&(t=t||"",this.stringToRegex(e.value).test(t))}},{key:"stringToRegex",value:function(e){var t,a=(null===(t=String(e).match(n(/^\/(.*)\/([gimsuy]*)$/,{body:1,flags:2})))||void 0===t?void 0:t.groups)||{},i=a.body,r=a.flags;return i?(r=r||"g",RegExp(i,r)):new RegExp(e,"g")}},{key:"parseFormattedNumericValue",value:function(e,t){if(e.hasClass("ff_numeric")){var n=JSON.parse(e.attr("data-formatter"));return currency(t,n).value}return Number(t)||0}}])&&r(t.prototype,a),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();const l=function(e,t,n){var a="."+n.form_instance;(function(){var i=this,r={},o={},l=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];clearTimeout(t),t=setTimeout((function(){return e.apply(i,r)}),n)}}((function(e){s(e)}),n.debounce_time||300),s=function(n){e.each(n,(function(e,t){var n=u(e).closest(".has-conditions");t?("0px"==n.css("height")&&n.attr("style",""),n.removeClass("ff_excluded").addClass("ff_cond_v").slideDown(200)):n.removeClass("ff_cond_v").addClass("ff_excluded").slideUp(200)})),t.trigger("do_calculation")},c=function(){var n={};return e.each(r,(function(a,i){var r=i.prop("type")||i.attr("data-type");if("radio"==r)n[a]="",i.each((function(t,i){e(i).is(":checked")&&(n[a]=e(i).val())}));else if("checkbox"==r)a=a.replace("[]",""),n[a]=[],i.each((function(t,i){e(i).is(":checked")&&n[a].push(e(i).val())}));else if("select-multiple"==r){a=a.replace("[]","");var o=i.val();n[a]=o||[]}else if("file"==r){var f="";t.find("input[name="+a+"]").closest(".ff-el-input--content").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,n){f+=e(this).data("src")})),n[a]=f}else n[a]=i.val()})),n},u=function(t){var n=e(a),i=e("[data-name='"+t+"']",n);return(i=i.length?i:e("[name='"+t+"']",n)).length?i:e("[name='"+t+"[]']",n)};return{init:function(){if(n.conditionals){e.each(n.conditionals,(function(t,n){t&&e.each(n.conditions,(function(e,t){var n=u(t.field);r[n.prop("name")]=n}))})),o=c();var t=new f(n.conditionals,o);e.each(r,(function(e,n){n.on("keyup change",(function(){o=c(),t.setFormData(o),l(t.getCalculatedStatuses())}))})),s(t.getCalculatedStatuses())}}}})().init()};function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function p(e,t,n,a){var i=0,r="";n.stepAnimationDuration=parseInt(n.stepAnimationDuration);var o="yes"==t.find(".ff-step-container").attr("data-enable_step_data_persistency"),f=!1;o&&(f="yes"==t.find(".ff-step-container").attr("data-enable_step_page_resume"));var l=!!window.fluentFormVars.is_rtl,s=!1,d=function(){return window.fluentFormApp(t)},p=function(t){var i=t.response,r=t.step_completed,o=[];if(jQuery.each(i,(function(t,a){if(a){var i=Object.prototype.toString.call(a);if("[object Object]"===i){var r=jQuery("[data-name=".concat(t,"]"));if(r.length&&"tabular-element"===r.attr("data-type"))jQuery.each(a,(function(n,a){var i=jQuery('[name="'.concat(t,"[").concat(n,']\\[\\]"]'));i.length||(i=jQuery('[name="'.concat(t,"[").concat(n,']"]'))),jQuery.each(i,(function(t,n){var i=e(n).val();-1===jQuery.inArray(i,a)&&i!==a||e(n).prop("checked",!0).change()}))}));else if("chained-select"===r.attr("data-type")){var f={meta_key:r.find("select:first").attr("data-meta_key"),form_id:r.closest("form").attr("data-form_id"),action:"fluentform_get_chained_select_options",filter_options:"all",keys:a};jQuery.getJSON(n.ajaxUrl,f).then((function(e){jQuery.each(e,(function(e,t){var n=r.find("select[data-key='".concat(e,"']"));0!=n.attr("data-index")&&jQuery.each(t,(function(e,t){n.append(jQuery("<option />",{value:t,text:t}))})),n.attr("disabled",!1).val(a[e])}))}))}else jQuery.each(a,(function(e,n){jQuery('[name="'.concat(t,"[").concat(e,']"]')).val(n).change()}))}else if("[object Array]"===i){var l=jQuery("[name=".concat(t,"]"));if("file"==(l=(l=l.length?l:jQuery("[data-name=".concat(t,"]"))).length?l:jQuery("[name=".concat(t,"\\[\\]]"))).attr("type"))x(l,a);else if(l.prop("multiple"))if(e.isFunction(window.Choices)){var s=l.data("choicesjs");o.push({handler:s,values:a})}else l.val(a).change();else if("repeater_field"===l.attr("data-type")){var c=l.find("tbody"),u=l.attr("data-name");jQuery.each(a,(function(t,n){0!=t?c.find("tr:last").clone().appendTo(c).find(".ff-el-form-control").each((function(a,i){var r="ffrpt-"+(new Date).getTime()+a;e(i).val(n[a]),e(i).attr({id:r,name:"".concat(u,"[").concat(t,"][]"),value:n[a]}).change()})):c.find("tr:first .ff-el-form-control").each((function(t,a){e(a).val(n[t]).change()}))}))}else l.each((function(t,n){-1!=jQuery.inArray(e(n).val(),a)&&e(n).prop("checked",!0).change()}))}else{var d=jQuery("[name=".concat(t,"]"));if(d.hasClass("fluentform-post-content")&&window.wp&&window.wp.editor){var p=d.attr("id");window.tinymce.get(p).setContent(a)}if("undefined"!=typeof flatpickr&&d.prop("_flatpickr")){var v=d.prop("_flatpickr");v&&(v.config.altInput?v.setDate(a,!0):d.val(a).trigger("change"))}if("radio"===d.prop("type")||"checkbox"===d.prop("type"))jQuery("[name=".concat(t,'][value="').concat(a,'"]')).prop("checked",!0).change();else{var m=d.closest(".ff-el-group").find(".fluentform-signature-pad");if(m.length){var h=m[0].getContext("2d"),g=new Image;g.src=a,g.onload=function(){h.drawImage(g,0,0)}}d.val(a).change()}}}})),o.length>0)for(var l=0;l<o.length;l++)o[l].handler.setValue(o[l].values).change();s=!0,f&&y(r,n.stepAnimationDuration,!0).then((function(){_(e("".concat(a," .fluentform-step.active"))),g(n.stepAnimationDuration)})).catch((function(e){console.error("An error occurred during the slider update:",e)})),s=!1},v=function(t,i){0!==t.length&&(e.each(t,(function(t,n){e(n).attr("data-step-number",t)})),t.on("click",(function(t){var r=d(),o=e(this),f=0;try{var l=o.data("step-number");if(isNaN(l))return;e.each(i,(function(t,n){if(f=t,t<l){var a=e(n).find(":input").not(":button").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));a.length&&r.validate(a)}})),y(l,n.stepAnimationDuration,!0).then((function(){_(e("".concat(a," .fluentform-step.active"))),g(n.stepAnimationDuration)})).catch((function(e){console.error("An error occurred during the slider update:",e)}))}catch(t){if(!(t instanceof window.ffValidationError))throw t;y(f,n.stepAnimationDuration,!0).then((function(){_(e("".concat(a," .fluentform-step.active"))),g(n.stepAnimationDuration)})).catch((function(e){console.error("An error occurred during the slider update:",e)})),r.showErrorMessages(t.messages),r.scrollToFirstError(350)}})))},m=function(a){if(t.find(".ff-el-progress").length){var i=a.totalSteps,r=a.activeStep,o=100/i*(r+1),f=t.find(".ff-el-progress-title li"),l=t.find(".ff-step-header .ff-el-progress-bar"),s=l.find("span");l.css({width:o+"%"}),o?l.append(s.text(parseInt(o)+"%")):s.empty();var c=n.step_text,u=e(f[r]).text();c=c.replace("%activeStep%",r+1).replace("%totalStep%",i).replace("%stepTitle%",u),t.find(".ff-el-progress-status").html(c),f.css("display","none"),e(f[r]).css("display","inline")}},h=function(n){_(e("".concat(a," .fluentform-step.active"))),e(a).on("click",".fluentform-step  .step-nav button, .fluentform-step  .step-nav img",(function(r){var o=e(this).data("action"),f="next",l=e(this).closest(".fluentform-step"),s=d();if("next"==o){try{var c=l.find(":input").not(":button").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));c.length&&s.validate(c),i++}catch(r){if(!(r instanceof window.ffValidationError))throw r;return s.showErrorMessages(r.messages),void s.scrollToFirstError(350)}t.trigger("ff_to_next_page",i),jQuery(document).trigger("ff_to_next_page",{step:i,form:t});var u=t.find(".fluentform-step");t.trigger("ff_render_dynamic_smartcodes",e(u[i]))}else i--,f="prev",t.trigger("ff_to_prev_page",i),jQuery(document).trigger("ff_to_prev_page",{step:i,form:t});var p="yes"!=t.find(".ff-step-container").attr("data-disable_auto_focus");y(i,n,p,f).then((function(){_(e("".concat(a," .fluentform-step.active"))),g(n)})).catch((function(e){console.error("An error occurred during the slider update:",e)}))}))};function g(n){setTimeout((function(){var n=function(){var n=e("".concat(a," .fluentform-step.active")),i=null;return i=t.find(".fluentform-step").last().hasClass("active")&&n.children().not(".ff-inner_submit_container").toArray().every((function(t){return e(t).hasClass("ff_excluded")}))?n.find('button[type="submit"]').first():n.find("input, select, textarea").first(),i}();n&&n.length&&n.focus()}),n)}var y=function(n,r){var f=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";return new Promise((function(d){e("div"+a+"_errors").empty(),i=n;var p=t.find(".ff-step-body"),v=t.find(".ff-step-titles li"),h=t.find(".fluentform-step"),g=h.length;h.removeClass("active"),e(h[i]).addClass("active"),v.removeClass("ff_active ff_completed"),e.each(u(Array(i).keys()),(function(t){e(e(v[t])).addClass("ff_completed")})),e(v[i]).addClass("ff_active");var y,_={left:-100*i+"%"};switch(l&&(_={right:-100*i+"%"}),e(h[i]).closest(".ff-step-container").data("animation_type")){case"slide":y=p.animate(_,r).promise();break;case"fade":p.css({opacity:0}),y=p.animate(_,r).animate({opacity:1},r).promise();break;case"slide_down":p.hide(),p.css(_),y=p.slideDown(r).promise();break;default:p.css(_),y=Promise.resolve()}y.then((function(){if(f&&function(){if(!window.ff_disable_step_scroll){var n,a,i,o,f,l,s=t.find(".ff_step_start");n=window.ff_scroll_top_offset?window.ff_scroll_top_offset:s.offset().top-20,o=(i=(a=s).offset().top)+a.outerHeight(),l=(f=e(window).scrollTop())+e(window).height(),o>f&&i<l&&!window.ff_force_scroll||e("html, body").delay(r).animate({scrollTop:n},0)}}(),!o||s||0===i||b(t,i).then((function(e){console.log(e)})),m({activeStep:i,totalSteps:g}),h.last().hasClass("active")?t.find('button[type="submit"]').css("visibility","visible"):t.find('button[type="submit"]').css("visibility","hidden"),!window.ff_disable_auto_step){var n=t.find(".fluentform-step.active"),a=t.find(".fluentform-step.active > div").length-1,l=t.find(".fluentform-step.active > .ff_excluded").length;if(t.find(".fluentform-step.active > .ff-t-container").length&&(a-=t.find(".fluentform-step.active > .ff-t-container").length,a+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > div").length,l+=t.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > .ff_excluded").length,t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length&&(l-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded").length,l-=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > .ff_excluded").length,l+=t.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > div").length)),a===l)return n.find(".step-nav button[data-action="+c+"], .step-nav img[data-action="+c+"]").click(),void d()}t.find(".fluentform-step.active").find('.step-nav button[data-action="next"]').css("visibility","visible"),t.find(".fluentform-step.active").find('.step-nav button[data-action="prev"]').css("visibility","visible"),t.find(".fluentform-step.active").find('.step-nav img[data-action="next"]').css("visibility","visible"),t.find(".fluentform-step.active").find('.step-nav img[data-action="prev"]').css("visibility","visible"),d()}))}))};function _(e){var t=e.find("input, select, textarea, button").filter(":visible"),n=t.first(),a=t.last();e.on("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===n[0]&&(a.focus(),e.preventDefault()):document.activeElement===a[0]&&(n.focus(),e.preventDefault()))}))}var b=function(t,a){var i=t.find(":input").filter((function(t,n){return!e(n).closest(".has-conditions").hasClass("ff_excluded")}));i.filter((function(t,n){var a=e(n);return a.parents().hasClass("ff_repeater_table")&&"select"==a.attr("type")&&!a.val()})).prepend("<option selected disabled />");var r=i.serialize();e.each(t.find("[type=file]"),(function(t,n){var a={},i=n.name+"[]";a[i]=[],e(n).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,n){a[i][t]=e(this).data("src")})),e.each(a,(function(t,n){if(n.length){var a={};a[t]=n,r+="&"+e.param(a),!0}}))}));var o={active_step:a,data:r,form_id:t.data("form_id"),action:"fluentform_step_form_save_data"};return jQuery.post(n.ajaxUrl,o)},x=function(t,a){var i=t.closest(".ff-el-input--content").find(".ff-uploaded-list");e.each(a,(function(t,a){a="object"===c(a)?a:{url:a,data_src:a};var r=e("<div/>",{class:"ff-upload-preview","data-src":a.data_src,style:"border: 1px solid rgb(111, 117, 125)"}),o=e("<div/>",{class:"ff-upload-thumb"});o.append(e("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(w(a.url),"');")}));var f=e("<div/>",{class:"ff-upload-details"}),l=e("<span/>",{html:n.upload_completed_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),s=a.url.substring(a.url.lastIndexOf("/")+1);s.includes("-ff-")&&(s=s.substring(s.lastIndexOf("-ff-")+4));var u=e("<div/>",{class:"ff-upload-filename",html:s}),d=e('\n                <div class="ff-upload-progress-inline ff-el-progress">\n                    <div style="width: 100%;" class="ff-el-progress-bar"></div>\n                </div>\n            '),p=e("<span/>",{"data-href":"#",html:"&times;",class:"ff-upload-remove"}),v=e("<div>",{class:"ff-upload-filesize ff-inline-block",html:""}),m=e("<div>",{class:"ff-upload-error",style:"color:red;"});f.append(u,d,l,v,m,p),r.append(o,f),i.append(r)})),t.trigger("change_remaining",-a.length),t.trigger("change")},w=function(e){var t=e.split(/[#?]/)[0].split(".").pop().trim().toLowerCase();if(-1!=["jpg","jpeg","gif","png"].indexOf(t))return e;var n=document.createElement("canvas");n.width=60,n.height=60,n.style.zIndex=8,n.style.position="absolute",n.style.border="1px solid";var a=n.getContext("2d");return a.fillStyle="rgba(0, 0, 0, 0.2)",a.fillRect(0,0,60,60),a.font="13px Arial",a.fillStyle="white",a.textAlign="center",a.fillText(t,30,30,60),n.toDataURL()};return{init:function(){o&&jQuery(document).ready((function(e){jQuery.getJSON(n.ajaxUrl,{form_id:t.data("form_id"),action:"fluentform_step_form_get_data",nonce:null==n?void 0:n.nonce,hash:null==n?void 0:n.hash}).then((function(e){e&&p(e)}))})),t.find(".fluentform-step:first").find('.step-nav [data-action="prev"]').remove(),function(){var a=t.find(".ff-step-body"),o=t.find(".fluentform-step"),f=o.length,l=t.find(".ff-step-titles li");r=100*f+"%",a.css({width:r}),o.css({width:100/f+"%"}),e(o[i]).addClass("active"),e(l[i]).addClass("active");var s=o.first();s.hasClass("active")&&s.find('button[data-action="next"]').css("visibility","visible"),o.length&&!o.last().hasClass("active")&&t.find('button[type="submit"]').css("visibility","hidden"),m({activeStep:i,totalSteps:f}),h(n.stepAnimationDuration),v(l,o)}(),function(){function n(e){if(1==e.closest(".fluentform-step.active").find(".ff-el-group:not(.ff_excluded):not(.ff-custom_html)").length)if(e.closest(".fluentform-step.active").find(".ff_excluded").length){var t=window.ffTransitionTimeOut||400;setTimeout((function(){e.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}),t)}else e.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}"yes"==t.find(".ff-step-container").attr("data-enable_auto_slider")&&(t.find(".ff-el-form-check-radio,.ff-el-net-label, .ff-el-ratings label").on("click",(function(){n(e(this))})),t.find("select").on("change",(function(){n(e(this))})))}()},updateSlider:y,populateFormDataAndSetActiveStep:p}}var v,m,h=[{type:8,token:"round",show:"round",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t||0===t||(t=2),e=parseFloat(e).toFixed(t),parseFloat(e)}},{type:0,token:"ceil",show:"ceil",value:function(e){return Math.ceil(e)}},{type:0,token:"floor",show:"floor",value:function(e){return Math.floor(e)}},{type:0,token:"abs",show:"abs",value:function(e){return Math.abs(e)}},{type:8,token:"max",show:"max",value:function(e,t){return e>t?e:t}},{type:8,token:"min",show:"min",value:function(e,t){return e<t?e:t}}];function g(e,t){var n=t.find(".ff_has_formula");if(n.length){var a={},i={};mexp.addToken(h);var r=function(){jQuery.each(n,(function(n,a){var i=jQuery(a),r=i.data("calculation_formula"),f=function(e,t){for(var n,a=[],i=RegExp(e,"g");n=i.exec(t);)delete n.input,a.push(n);return a}(/{(.*?)}/g,r),d={};jQuery.each(f,(function(e,n){var a=n[0];jQuery.each(["{input.","{select.","{checkbox.","{radio.","{repeat.","{payment."],(function(e,n){if(function(e,t){return-1!==e.indexOf(t)}(a,n)){var i=(p=a,v=new RegExp(n+"|}","g"),p.replace(v,"")),r=0;if("{select."===n)r=c(i);else if("{checkbox."===n)r=u(i);else if("{radio."===n)r=s(i);else if("{repeat."===n)r=l(i);else if("{payment."===n)r=function(e){var n=0,a=t.find(":input[data-name="+e+"]");if(a.length&&o(a)){var i=a[0].type;"radio"===i?n=s(e,!0):"hidden"===i?n=a.attr("data-payment_value"):"number"===i||"text"===i?n=window.ff_helper.numericVal(a):"checkbox"===i?n=u(e,!0):"select-one"===i&&(n=c(e,!0))}return n}(i);else{var f=t.find("input[name="+i+"]");o(f)&&(r=window.ff_helper.numericVal(f))}return d[a]=r,!1}var p,v}))})),jQuery.each(d,(function(e,t){t||(t=0),r=r.split(e).join(t)}));var p="";try{r=r.replace(/\n/g,""),p=mexp.eval(r),isNaN(p)&&(p="")}catch(e){console.log(e,a)}if("text"==i[0].type){var v=e(i),m=v.val(),h=window.ff_helper.formatCurrency(v,p);if(v.val(h).prop("defaultValue",h),""==m)return;m!=h&&v.trigger("change")}else i.text(p)}))};t.find("input[type=number],input[data-calc_value],select[data-calc_value],.ff_numeric,.ff_payment_item").on("change keyup",r),r(),t.on("do_calculation",(function(){r()}))}function o(e){return!e.closest(".ff_excluded.has-conditions").length}function f(n){var a=0,i=t.find(n);return i.closest(".ff_excluded.has-conditions").length||e.each(i,(function(t,n){var i=e(n).attr("data-calc_value");i&&!isNaN(i)&&(a+=Number(i))})),a}function l(n){var f=0,l=n.split("."),s=!1;l.length>1&&(n=l[0],s=l[1]);var c=t.find("table[data-root_name="+n+"]");if(a[n]||(a[n]=!0,c.on("repeat_change",(function(){r()}))),o(c))if(s){var u=c.find("tbody tr td:nth-child("+s+")");e.each(u,(function(t,a){var o=e(a).find(":input"),l=n+"_"+s+"_"+o.attr("id");i[l]||(i[l]=!0,o.on("change",(function(){r()})));var c=0;c="select"===o.attr("type")?parseFloat(o.find("option:selected").attr("data-calc_value")):parseFloat(o.val()),isNaN(c)||(f+=c)})),f&&(f=f.toFixed(2))}else f=c.find("tbody tr").length;return f}function s(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=0,i=t.find("input[name="+e+"]:checked");return n?i.attr("data-payment_value"):(o(i)&&(a=i.attr("data-calc_value")||0),a)}function c(e){var n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t.find("select[name="+e+"] option:selected").data("payment_value"):(n=f("select[data-name="+e+"] option:selected"),t.find("select[data-name="+e+"]").attr("data-calc_value",n),n)}function u(e){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1]))return f("input[data-name="+e+"]:checked");var n=t.find(":input[data-name="+e+"]").data("group_id"),a=t.find('input[data-group_id="'+n+'"]:checked'),i=0;return a.each((function(e,t){var n=jQuery(t).data("payment_value");n&&(i+=parseFloat(n))})),i}}(v=jQuery)(document.body).on("fluentform_init",(function(n,a,i){if(a.attr("data-form_instance"),i){i.form_id_selector;var r="."+i.form_instance;if(function(e,t,n,a,i){var r=function(){jQuery.fn.fileupload&&(t.find('input[type="file"]').each((function(r,c){var u,d,p=e(this),v=p.closest(".ff-el-group");v.closest(".ff-column-container").is(".ff_columns_total_6, .ff_columns_total_5, .ff_columns_total_4")&&v.width()<162&&(d=v.width()),u=e("<div/>",{class:"ff-uploaded-list",style:"font-size:12px; margin-top: 15px;"+(d?"max-width:".concat(d,"px;"):"")}),p.closest("div").append(u);var m=u.width(),h=n.rules[p.prop("name")],g=h.max_file_count.value;"max_file_count"in h&&(h.max_file_count.remaining=Number(g));var y="";function _(e){var n=p.prop("name");t.trigger("show_element_error",{element:n,message:e})}function b(a,r){if(r&&r.files&&r.files.length){if(t.find(".ff-upload-preview-elem").remove(),"max_file_count"in h){e(i+"_errors").empty(),e(this).closest("div").find(".error").html("");var o=h.max_file_count.remaining;if(!o||r.files.length>o){var f="Maximum 1 file is allowed!";return f=g>1?"Maximum "+g+" files are allowed!":f,h.max_file_count&&h.max_file_count.message&&(f=h.max_file_count.message),_(f),!1}}var s=l(r.files[0],n.rules[p.prop("name")]);return!s.length||(_(s.join(", ")),!1)}}"allowed_file_types"in h?(y=h.allowed_file_types.value.join("|"),p.prop("accept","."+y.replace(/\|/g,",."))):(y=h.allowed_image_types.value.join("|"))?p.prop("accept","."+y.replace(/\|/g,",.")):p.prop("accept","image/*");var x=e(c);p.fileupload({dataType:"json",dropZone:p.closest(".ff-el-group"),url:a.ajaxUrl,formData:function(e){var t=e.serializeArray();return t.push({name:"action",value:"fluentform_file_upload"}),t.push({name:"formId",value:n.id}),t},change:b,add:function(t,n){if(b(0,n)){var i=e("<div/>",{class:"ff-upload-preview"+(d?" ff-upload-container-small-column-image":"")});n.context=i;var r=e("<div/>",{class:"ff-upload-thumb"}),l=e("<div/>",{class:"ff-upload-details"}),s=e("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(o(n.files[0]),"');")}),c=e("<div>",{class:"ff-upload-error",style:"color:red;"}),p=e("<span/>",{html:a.upload_start_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),v=e('\n\t\t\t\t\t\t\t\t\t<div class="ff-upload-progress-inline ff-el-progress">\n\t\t\t\t\t\t\t\t\t\t<div class="ff-el-progress-bar"></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t'),h=e("<div/>",{class:"ff-upload-filename",text:n.files[0].name}),g=e("<span/>",{"data-href":"#","data-attachment-id":"",html:"&times;",class:"ff-upload-remove"}),y=e("<div>",{class:"ff-upload-filesize ff-inline-block",html:f(n.files[0].size)});r.append(s),l.append(h,v,p,y,c,g),i.append(r,l),u.append(i),d||(m-=91),h.css({maxWidth:m+"px"}),n.submit(),n.context.addClass("ff_uploading")}},progress:function(e,t){var n=parseInt(t.loaded/t.total*100,10);t.context.find(".ff-el-progress-bar").css("width",n+"%"),t.context.find(".ff-upload-progress-inline-text").text(a.uploading_txt)},done:function(e,n){if(n.context.removeClass("ff_uploading"),n.result&&"data"in n.result&&"files"in n.result.data)"error"in n.result.data.files[0]?(_("Upload Error: "+n.result.data.files[0].error),n.context.remove()):(n.context.find(".ff-upload-progress-inline-text").text(a.upload_completed_txt),h.max_file_count.remaining-=1,n.context.attr("data-src",n.result.data.files[0].url),n.context.find(".ff-upload-remove").attr({"data-href":n.result.data.files[0].file,"data-attachment-id":n.result.data.files[0].attachment_id}),n.context.addClass("ff_uploading_complete"),t.find("input[name="+x.data("name")+"]").trigger("change"));else{var i="Sorry! The upload failed for some unknown reason.";if(n.messages){var r=Object.keys(n.messages);r.length&&(i=n.messages[r[0]])}_(i),n.context.remove()}},fail:function(t,n){var a,i,r,o,f=[];null===(a=n.context)||void 0===a||a.remove(),null!==(i=n.jqXHR)&&void 0!==i&&i.responseJSON&&null!==(r=n.jqXHR)&&void 0!==r&&r.responseJSON.errors?e.each(n.jqXHR.responseJSON.errors,(function(t,n){"object"==s(n)?e.each(n,(function(e,t){f.push(t)})):f.push(n)})):null!==(o=n.jqXHR)&&void 0!==o&&o.responseText?f.push(n.jqXHR.responseText):f.push("Something is wrong when uploading the file! Please try again"),_(f.join(", "))}}),x.on("change_remaining",(function(e,t){h.max_file_count.remaining+=t}))})),t.find(".ff_upload_btn").on("keyup",(function(t){32==t.keyCode&&e(this).siblings("input[type=file]").trigger("click")})))},o=function(e){if(e.type.match("image"))return URL.createObjectURL(e);var t=document.createElement("canvas");t.width=60,t.height=60,t.style.zIndex=8,t.style.position="absolute",t.style.border="1px solid";var n=t.getContext("2d");return n.fillStyle="rgba(0, 0, 0, 0.2)",n.fillRect(0,0,60,60),n.font="13px Arial",n.fillStyle="white",n.textAlign="center",n.fillText(e.name.substr(e.name.lastIndexOf(".")+1),30,30,60),t.toDataURL()},f=function(e){return e<1024?e+"bytes":e>=1024&&e<=1048576?(e/1024).toFixed(1)+"KB":e>1048576?(e/1048576).toFixed(1)+"MB":void 0},l=function(e,t){var n=[],a="",i="";if("allowed_file_types"in t?(a=t.allowed_file_types.value,i=t.allowed_file_types.message):"allowed_image_types"in t&&(a=t.allowed_image_types.value,i=t.allowed_image_types.message),a){var r=new RegExp("("+a.join("|")+")","i"),o=e.name.split(".").pop();o=o.toLowerCase(),r.test(o)||n.push(i)}return"max_file_size"in t&&e.size>t.max_file_size.value&&n.push(t.max_file_size.message),n};r(),t.find(".ff-uploaded-list").on("click",".ff-upload-remove",(function(t){t.preventDefault();var n=e(this),i=n.closest(".ff-uploaded-list"),r=i.closest(".ff-el-input--content").find("input[type=file]"),o=n.attr("data-href"),f=n.attr("data-attachment-id");"#"==o?(n.closest(".ff-upload-preview").remove(),i.find(".ff-upload-preview").length||i.siblings(".ff-upload-progress").addClass("ff-hidden"),r.trigger("change_remaining",1)):e.post(a.ajaxUrl,{path:o,attachment_id:f,action:"fluentform_delete_uploaded_file"}).then((function(e){n.closest(".ff-el-input--content").find("input"),r.trigger("change_remaining",1),n.closest(".ff-upload-preview").remove(),i.find(".ff-upload-preview").length||i.siblings(".ff-upload-progress").addClass("ff-hidden"),r.trigger("change")}))})),e(document.body).on("fluentform_reset",(function(){r()}))}(v,a,i,window.fluentFormVars,r),t(a),function(e,t){var n=t.find(".fluentform .js-repeat");e.each(n,(function(t,n){var a=e(n);if(a.find(".ff-t-cell").length>1){var i=a.find(".ff-el-group").height()-a.find(".ff-el-group").find(".ff-el-input--content").height();a.find(".js-repeat-buttons").css("margin-top",i+"px")}var r=a.find(".ff-el-group").find(".ff-el-input--content .ff-el-form-control").outerHeight();a.find(".ff-el-repeat-buttons").height(r)}))}(v,a),l(v,a,i,window.fluentFormVars),g(v,a),function(e,t){var n=t.find(".jss-ff-el-ratings");n.length&&e.each(n,(function(t,n){var a=e(n);a.find("label.active").prevAll().addClass("active"),a.on("mouseenter","label",(function(t){var n=e(this),a="[data-id="+n.find("input").attr("id")+"]";n.addClass("active"),n.prevAll().addClass("active"),n.nextAll().removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")})).on("click","label",(function(t){var n=e(this).find(".jss-ff-svg");n.addClass("scale"),n.addClass("scalling"),setTimeout((function(e){n.removeClass("scalling"),n.removeClass("scale")}),150)})).on("mouseleave",(function(t){var n=e(this),a="[data-id="+n.find("input:checked").attr("id")+"]",i=n.find("input:checked").parent("label");i.length?(i.addClass("active"),i.prevAll().addClass("active"),i.nextAll().removeClass("active")):n.find("label").removeClass("active"),n.closest(".ff-el-input--content").find(".ff-el-rating-text").css("display","none"),n.closest(".ff-el-input--content").find(a).css("display","inline-block")}))}))}(v,a),e(v,a),a.hasClass("ff-form-has-steps")){var o=p(v,a,window.fluentFormVars,r);o.init(),a.on("update_slider",(function(e,t){o.updateSlider(t.goBackToStep,t.animDuration,t.isScrollTop,t.actionType)}))}a.hasClass("ff_has_dynamic_smartcode")&&(a.on("ff_render_dynamic_smartcodes",(function(e,t){f(v(t))})),a.on("keyup change",":input",(function(){f(a)})),f(a))}else console.log("No Fluent form JS vars found!");function f(e){jQuery.each(e.find(".ff_dynamic_value"),(function(e,t){var n=v(t).data("ref");if("payment_summary"!=n){var i=a.find('.ff-el-form-control[name="'+n+'"]'),r=" ";i.length||(i=a.find('.ff-field_container[data-name="'+n+'"]').find("input")),i.length||((i=a.find('*[name="'+n+'"]:checked')).length||(i=a.find('*[name="'+n+'[]"]:checked'),r=", "),i.length||(i=a.find('*[name="'+n+'[]"]').find("option:selected"),r=", "));var o=[];if(!i.length){var f=a.find('.ff-el-repeater[data-name="'+n+'"] tbody tr');f.each((function(e){var t=v(this).find("input, select"),n=[];t.each((function(e){var t=v(this).val();if(t){var a=v(this).closest("td").data("label")||"Column-"+(e+1);n.push(a+": "+t)}})),n.length&&o.push("#"+(e+1)+"- "+n.join(" | "))})),f.length&&(r="<br/>")}v.each(i,(function(){var e=v(this).val(),t=v(this).closest(".ff-el-group.has-conditions").hasClass("ff_excluded");e&&!t&&o.push(e)}));var l="";l=o.length?o.join(r):v(t).data("fallback"),v(this).html(l)}else a.trigger("calculate_payment_summary",{element:v(t)})}))}})),(m=String.prototype).startsWith||(m.startsWith=function(e,t){return t=!t||t<0?0:+t,this.substring(t,t+e.length)===e}),m.endsWith||(m.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e}),m.includes||(m.includes=function(e,t){if(e instanceof RegExp)throw TypeError("first argument must not be a RegExp");return void 0===t&&(t=0),-1!==this.indexOf(e,t)})})()
;