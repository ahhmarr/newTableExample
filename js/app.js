Array.prototype.arrayshuffle = function(){
var $arr = this;
    var counter = $arr.length, temp, index;
    // While there are elements in the array
    while (counter--) {
        // Pick a random index
        index = (Math.random() * counter) | 0;
        // And swap the last element with it
        temp = $arr[counter];
        $arr[counter] = $arr[index];
        $arr[index] = temp;        
    }
 return $arr;
};
var opt={
name:"Sort",
options:["A sentence is a set of words that in principle tells a complete thought,", "although it may make little sense taken in isolation out of context.", "Typically a sentence contains a subject and predicate."],
correctSeq:"1,2,3"
};
//sequencing
var html=value=[];
opt.correctSeqArr=opt.correctSeq.split(",");
opt.correctSeqArr.forEach(function(e,b)
{
	var index=e-1;
	var text=opt.options[index];
	value[e]=opt.options[index];
	html[e]=["<li class='shuffle' data-sequence='",e,"'>",text,"</li>"].join("");
});

// printing
var printList=function(noShuffle)
{
	var htmlClone=Object.create(html);
	if(noShuffle){
		$("#shuffledProduct").html('');
	}else{
		htmlClone.arrayshuffle();
	}
	console.log(htmlClone);
	console.log(html);
	htmlClone.forEach(function(e)
	{
		$("#shuffledProduct").append(e);
	});
	$("#shuffledProduct").sortable();
}
$(function(){
	printList();
	$("#sequenceValidate").click(function()
	{
		$(".rw").remove();
		$(".shuffle").each(function(e)
		{
			var th=$(this);
			var index=th.index()+1;
			var seq=th.data("sequence");
			if(index===seq){
				th.append("<strong class='rw'>[Correct]</strong>");
			}else{
				th.append("<strong class='rw'>[Wrong]</strong>");
			}
		});
	});
	$("#correctValidate").click(function()
	{
	 		printList(1);
	});
});