var allLinks = [];
var visibleLinks = [];
var zip = new JSZip();
var data1=[];
var FolderName ='SonicDownload_'+new Date().toLocaleDateString().replace('/','_').replace('/','_');
var TitleName='';

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
if(data.length <= 0){
$(".hideme").hide();
$("#message").show();
}
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
  minSpareRows: 0,
  contextMenu:false,
  colHeaders: ["<input type='checkbox' id='check'/><b>Select</b>","<b>File Path</b>","<b>Name</b> <i> if present</i>"],
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
var titleName = data1[index][2];
chrome.downloads.download({url:titleName,filename:FolderName+"/"+titleName.substring(titleName.lastIndexOf('/') + 1),saveAs:false})


}

}
)

 }
 )
 }
  );
  $(document).ready(function(){
  chrome.storage.sync.set({'value': 12}, function() {
    chrome.storage.sync.get("value", function(data) {
      console.log("data", data);
    });
  });
  $('#option').click(function () {
    chrome.tabs.create({ url: 'options.html'});
  });
  });
    $(document).ready(function(){
  $('#check').click(function () {
  if($('#hdnFlag').val() == 'all')
  {
$("#example").find("input:checkbox").prop('checked', false); 
$('#hdnFlag').val('none')}
else{
$("#example").find("input:checkbox").prop('checked', "checked");
$('#hdnFlag').val('all');
}
});
  });
