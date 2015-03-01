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

(function()
{
	var _data,_table,_tr,_td,_th,_target;
	var init=function(data)
	{
		_data=data||{};
		_table=document.createElement("table");
		_tr=document.createElement("tr");
		_td=document.createElement("td");
		_th=document.createElement("th");
		_target=document.getElementById("table-wrapper");
		createTable();
		document.getElementById("search-text")
				.addEventListener("keyup",searchTable);
		window.sort=sortColumn;
		
	}
	var sortColumn=function(e)
	{
		var colIndex=(e.getAttribute("data-column"));
		var order=(e.getAttribute("data-order")) || -1;
		var newObj=_data;
		document.getElementById("search-text").value="";
		for(ii=0;ii<newObj.length-1;ii++){
			for(jj=ii+1;jj<newObj.length;jj++){
				var first=ii;second=jj;
				if(order==-1)
				{
					first=jj;second=ii;
				}
				if(newObj[first][colIndex]<newObj[second][colIndex]){
					var swap=newObj[first];
					newObj[first]=newObj[second];
					newObj[second]=swap;
				}
			}
		}
		createTable(newObj,{
			col : colIndex,
			sortOrder : (order==-1)?1:-1
		});
	};
	var getData=function()
	{
		return _data;
	};
	var createTable=function(data,sort)
	{
		data=data || _data;
		table=_table.cloneNode();
		table.border=1;
		var headings=data[0] || _data[0];
		//creating headers
		var tr=_tr.cloneNode();
		for(var i in headings){
			var th=_th.cloneNode();
			th.innerHTML=i+"<img src='images/up.png'><img src='images/down.png' >";
			th.setAttribute("class","sort-column");
			th.setAttribute("data-column",i);
			if(typeof sort=="object" && (sort.col)==i){
				th.setAttribute("data-order",sort.sortOrder);
			}
			else
				th.setAttribute("data-order","");
			th.setAttribute("onclick","sort(this)");
			tr.appendChild(th);
		}
		table.appendChild(tr);
		//creating rows
		data.forEach(function(obj)
		{
			var tr=_tr.cloneNode();
			for(i in obj){
				var td=_td.cloneNode();
				td.innerHTML=obj[i];
				tr.appendChild(td);
			}
			table.appendChild(tr);

		});
		_target.innerHTML='';
		_target.appendChild(table);
	};
	var searchTable=function(event)
	{
		var data=_data;
		filterText=(this.value); 
		if(filterText.replace(/ /g,"")==="")
			return createTable(_data);
		var push=false;
		var result=[];
		data.forEach(function(e)
		{
			var pat=new RegExp(filterText,"ig");
			var obj=Object.create(e);
			var push=false;
			for(var i in obj){
				 //if not changed 
				 //and saved and on modification will create another object attribute
				obj[i]=obj[i].toString();
				field=obj[i];
				var match=field.match(pat,filterText);
				if(match!==null){
					field=field.replace(pat,function(match,token)
					{
						return "<span class='match'>"+match+"</span>";
					});
					obj[i]=field;
					push=true;
				}
			}
			if(push){
				result.push(obj);
			}
		});
		createTable(result);
	}
	init(details);

})();