function populateList(nodes, list) {
	for(var i = 0; i < nodes.length; i++) {
		if(!nodes[i].children)
			list.push(nodes[i]);
		else 
			list.concat(getList(nodes[i].children, list));
	}
}
function treeToList(nodes) {
	var list = []
	populateList(nodes, list)
	return list
}
function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.bookmarks.getTree(function(treeNodes) {

  	list = treeToList(treeNodes[0].children);

  	chrome.tabs.update({
    	url: list[getRandom(0, list.length-1)].url
 	});

  });
});


