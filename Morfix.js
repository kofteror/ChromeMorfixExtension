// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {

chrome.tabs.create({ url:"http://www.morfix.co.il/"+info["selectionText"]});
  
}

// Create one test item for each context type.
var contexts = ["selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
    var id = chrome.contextMenus.create({"title": "morfix", "contexts":[context],
                                       "onclick": genericOnClick});
 
}





