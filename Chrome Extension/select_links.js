var links = new Array();

debugger;
$("a[href*='.jpg'],[download],[href*='.pdf'],[href*='.docx'],[href*='.zip'],[href*='.xls'],[href*='.xlsx'],[href*='.mp3'],[href*='.mp4']").each(function(index){

links.push({link:this.href,name:this.title});
}

)
chrome.runtime.sendMessage(links);

