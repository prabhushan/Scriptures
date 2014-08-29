var links = new Array();
var extnOptions = '';
console.log('selection_links');
 chrome.storage.sync.get("extnOptns", function(data) {
 extnOptions = 'a';
      for(var a in data.extnOptns){
	  extnOptions = extnOptions+"[href*='."+data.extnOptns[a]+"']"+",";
	  
	  }
	 extnOptions= extnOptions.substring(0,extnOptions.length-1);
//	 console.log(extnOptions);
	 displayLinks();
    });
	
	function displayLinks(){
	$(extnOptions).each(function(index){

links.push({link:this.href,name:this.title + $(this).text()});
}

)
chrome.runtime.sendMessage(links);
	}


//"a[href*='.jpg'],[download],[href*='.pdf'],[href*='.docx'],[href*='.zip'],[href*='.xls'],[href*='.xlsx'],[href*='.mp3'],[href*='.mp4']"

