var arrOptions = [];// this is to load the Check box values
var defaultOptions = []; // this is to load the check box options
  $(document).ready(function(){
		$('#saveAndClose').click(function(){
			fnDecodeExtn();
			
	chrome.storage.sync.set({'extnOptns': arrOptions} );
  	chrome.storage.sync.set({'extnOptnsChecks': defaultOptions},fnDisplayMessage());

			});
		});

  $(document).ready(function(){
		$('#addExtn').click(function(){
		if($('#txtExtn').val().trim() == ''){
		$('#message-info').text('Please enter valid extension!!');

		}
			else{
			$( " <input type='checkbox' id='settingShortcut' value='"+$('#txtExtn').val()+"' /><label for='settingShortcut' id='settingShortcutText'>"+$('#txtExtn').val()+"</label><br/>" ).prependTo( "#dynExtn" );
			defaultOptions.push($('#txtExtn').val());
			
			$('#txtExtn').val('');
			}});
			
		});		

  $(document).ready(function(){
					
		});		
		
function fnDecodeExtn(){
arrOptions = [];
$('#shortcutSettingDiv').find("input:checkbox").each(function(index){
if($(this).is(':checked') == true){
arrOptions.push($(this).val());
}
})
}

function fnDisplayMessage(){
$('#message-info').text('Setting Saved Successfully!!');
chrome.storage.local.set({SavedData:'true'});

}

 $(document).ready(function(){
/**
Check whether already saved
If Not Saved, load default options

If Saved, load options saved by End user
**/

chrome.storage.local.get('SavedData',function(data){
if(data.SavedData != 'true')
{
// This is time when user did not save anything in the options.
arrOptions = [];
defaultOptions = ['jpg','pdf','docx','zip','xls','xlsx','mp3','mp4'];
}
else{
chrome.storage.sync.get('extnOptns',function(data){arrOptions = data.extnOptns;})
chrome.storage.sync.get('extnOptnsChecks',function(data){defaultOptions = data.extnOptnsChecks;})
}
fnLoadOptions();
})
});

function fnLoadOptions(){
for(var i=0;i<defaultOptions.length;i++){
$( " <input type='checkbox' id='settingShortcut' value='"+defaultOptions[i]+"' /><label for='settingShortcut' id='settingShortcutText'>"+defaultOptions[i]+"</label><br/>" ).prependTo( "#divOptions" );

}
}
