var allLinks = [];
var visibleLinks = [];
var zip = new JSZip();
var data1=[];
 /*allLinks = [
  ["", "Link Title", "Link Path"]
];*/

 $(function(){
 $("#divOptions").append('Loading....');
 $("a").each(function(index){
 $("#divOptions").append($("a").text());
 });

 });
 
 /*chrome.extension.onRequest.addListener(function(links) {
  for (var index in links) {
    allLinks.push(links[index]);
  }
  allLinks.sort();
  visibleLinks = allLinks;
  
});
// showLinks();
});*/

chrome.extension.onMessage.addListener(function(data){
$("#divOptions").text("");
for (var i = 0; i < data.length; i++) {
 //$("#divOptions").append(data);
 //$("#divOptions").append('<br/>');
var allLinks = new Array();
allLinks.push('false');
allLinks.push(data[i].name);
allLinks.push(data[i].link);
   visibleLinks = allLinks;
//chrome.downloads.download({url:data[i]});
    data1.push(allLinks);

}

 

//$("#example").text(visibleLinks);
 $('#example').handsontable({
  data: data1,
  minSpareRows: 1,
  colHeaders: ["Select","Name","Path"],
  contextMenu: true,
  columns:[
  {type:"checkbox",readOnly:false},
  {data:2,readOnly:true},
  {data:1,readOnly:true}
  
  ]
});
});

$(document).ready(chrome.windows.getCurrent(function (currentWindow) {
   chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) { chrome.tabs.executeScript(activeTabs[0].id, {file: 'jquery.min.js', allFrames: true}),
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'select_links.js', allFrames: true});
    });
  }));
  
  $(document).ready(
 function(){
 $("#btnDownload").click(
 function(){
$("#example").find("input:checkbox").each(function(index){

if($(this).is(':checked') == true){
console.log(index);
chrome.downloads.download({url:data1[index][2]})


}

}
)

 }
 )
 }
  );
  $(document).ready(function(){
  $('#option').click(function () {
    chrome.tabs.create({ url: 'options.html'});
  });});

