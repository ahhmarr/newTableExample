var details=[
	{
		id:"1",
		name:"xx",
		age:45,
		occupation:"clerk"
	},
	{
		id:"2",
		name:"Jane Doe",
		age:65,
		occupation:"manager"
	},
	{
		id:"1",
		name:"John Smith",
		age:21,
		occupation:"assitant"
	},
	{
		id:"1",
		name:"Rohit Kumar",
		age:19,
		occupation:"intern"
	},
	{
		id:"1",
		name:"John Doe",
		age:45,
		occupation:"clerk"
	}
];
var generator=function(obj,tableID)
{
	var table="<table border='1'><tr><th>sn</th><th>name</th><th>age</th><th>occupation</th></tr>";
	obj.forEach(function(e,r,b)
	{
		var td="<tr><td>"+e.id+"</td>";
		td+="<td>"+e.name+"</td>";
		td+="<td>"+e.age+"</td>";
		td+="<td>"+e.occupation+"</td></tr>";
		table+=td;
	});
	table+="</table>";
	document.getElementById(tableID).innerHTML=table;
};
var finder=function(obj,filterText)
{
	var newObj=[];
	if(filterText=="")
		return obj;
	obj.forEach(function(e,r,b)
	{
		var push=false;
		var clone=Object.create(e);
		for(var i in clone){
				var field=clone[i].toString();
				var patt=new RegExp(filterText,"ig");
				var match=field.match(patt);
				if(match!==null)
				{
					push=true;
					field=field.replace(patt,function(match,token)
					{
						console.log(match);
						return "<span class='match'>"+match+"</span>";
					});
					clone[i]=field;
				}
			}
		if(push){
			newObj.push(clone);
		}
	});
	return newObj;
};
var search=function(e)
{
	var text=(this.value);
	var found=finder(details,text);
	generator(found,"table-wrapper");
};
window.onload=function()
{
	generator(details,"table-wrapper");
	document.getElementById("search-text")
			.addEventListener("keyup",search);
};
