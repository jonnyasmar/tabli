webpackJsonp([0],[function(o,e,n){"use strict";function r(o){if(o&&o.__esModule)return o;var e={};if(null!=o)for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e["default"]=o,e}function i(o){return o&&o.__esModule?o:{"default":o}}function t(o,e){for(var n=[],r=0;r<e.children.length;r++){var i=e.children[r];if("_"!==i.title[0]){var t=i.children;t?n.push(h.makeFolderTabWindow(i)):console.log("Found bookmarks folder with no children, skipping: ",t)}}o.registerTabWindows(n)}function c(o,e,n){for(var r=0;r<o.children.length;r++){var i=o.children[r];if(i.title.toLowerCase()===e.toLowerCase())return console.log("found target child folder: ",e),n(i),!0}console.log("Child folder ",e," Not found, creating...");var t={parentId:o.id,title:e};chrome.bookmarks.create(t,n)}function l(o){var e=null,n=null;chrome.bookmarks.getTree(function(r){var i=r[0].children[1];console.log("otherBookmarksNode: ",i),c(i,v,function(r){console.log("tab manager folder acquired."),e=r.id,c(r,b,function(i){console.log("archive folder acquired."),n=i.id,chrome.bookmarks.getSubTree(r.id,function(r){console.log("bookmarks.getSubTree for TabManFolder: ",r);var i=new u["default"](e,n);t(i,r[0]),o(i)})})})})}function a(o){chrome.runtime.onConnect.addListener(function(e){e.onMessage.addListener(function(n){var r=n.listenerId;e.onDisconnect.addListener(function(){o.removeViewListener(r)})})})}function d(){l(function(o){console.log("init: done reading bookmarks."),window.winStore=o,m.syncChromeWindows(o,function(){console.log("initial sync of chrome windows complete.")}),a(o)})}var s=n(1),u=i(s),f=n(5),h=r(f),g=n(7),m=r(g),k=n(9),v=(r(k),n(160),"Subjective Tab Manager"),b="_Archive";d()}]);