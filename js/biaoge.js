
$(function(){

	var i;
	var table = [{
		id: 1,
		classify: '第一学期',
		title: 'HTML+CSS',
		grade: '欣才第141期',
		state: '已发布',
		time:'2016-11-03',
		name:'三日',
		school:'南京',
		del:'删除',
	},
	{
		id: 2,
		classify: '第一学期',
		title: 'HTML+CSS',
		grade: '欣才第141期',
		state: '已发布',
		time:'2016-11-03',
		name:'三日',
		school:'南京',
		del:'删除',
	},
	{
		id: 3,
		classify: '第一学期',
		title: 'HTML+CSS',
		grade: '欣才第141期',
		state: '已发布',
		time:'2016-11-03',
		name:'三日',
		school:'南京',
		del:'删除',
	}
	]

	function initHtml(json){
		var html_ = '<tr>'+
						'<td>'+ json.id+'</td>'+
						'<td><input type="text" class="test" value="'+ json.classify+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.title+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.grade+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.state+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.time+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.name+'"></td>'+
						'<td><input type="text" class="test" value="'+ json.school+'"></td>'+
						'<td>'+
		'<input type="button" value="删除" class="del" title="'+json.id+'">' +'</td>'+
					'</tr>';
					return html_;
	}

	function initPage(table){
		$("tbody").html("");
		$.each(table,function(key,val){
		$("tbody").append(initHtml(val));
	})
	}

	initPage(table);
	$("body").on("click",".del",function(){
		var id = parseInt($(this).attr("title"));
		var ind = $(this).parent("td").parent("tr").index();
		for(i = 0;i<table.length;i++){
			if(id == table[i].id){
				table.splice(i,1);
				$("tbody tr").eq(ind).remove();
			}
		}	
	})

	var id_ = null;
	$.each(table,function(key,val){
		if(id_<val.id){
			id_ = val.id;
		}
	})
	function refreshHtml(table,class_){
		table.unshift({
			id: class_.id,
			classify: $(class_.classify).val(),
			title: $(class_.title).val(),
			grade: $(class_.grade).val(),
			state: $(class_.state).val(),
			time:$(class_.time).val(),
			name:$(class_.name).val(),
			school:$(class_.school).val(),
			del:$(class_.del).val(),
		})
		$(".add input[type='text']").val("");
		initPage(table);
	}
	$(".addBtn").on("click",function(){
		id_=id_+1;
		refreshHtml(table,{id:id_,classify:'.classify',
			title: '.title',grade:'.grade',state:'.state',
			time:'.time',name:'.name',school:'.school',del:'.del'})
	})

	function dealList(table, status, fun){	
		if(status){
			var emp = null;
			for(var i = 0; i < table.length; i ++){
				for(var j = i + 1; j < table.length; j ++){
					if(table[i].id > table[j].id){
						emp = table[i];
						table[i] = table[j];
						table[j] = emp;
					}
				}
			}			
		} else {		
			for(var i = 0; i < table.length; i ++){
				for(var j = i + 1; j < table.length; j ++){
					if(table[i].id < table[j].id){
						emp = table[i];
						table[i] = table[j];
						table[j] = emp;
					}
				}
			}			
		}
		fun();		
	}
	$("th span").on("click",function(){
		if($(this).hasClass("h")){
			dealList(table,true,function(){
				initPage(table);
			})
			$(this).removeClass("h");
		}else{
			dealList(table,false,function(){
				initPage(table);
			})
			$(this).addClass("h");
		}
	})

	$("tbody tr").eq(0).addClass("bg").siblings("tr").removeClass("bg");
	$(window).keydown(function(e){
		var key = e.keyCode;
		switch(key){
		    case 38:
				index = $("tr.bg").index();
				if(index > 0){
					index --;
				}
				$("tbody tr").eq(index).addClass("bg").siblings("tr").removeClass("bg");
			break;
			case 40:
				index = $("tr.bg").index();
				if(index < $('tbody tr').length - 1){
					index ++;
				}
				$("tbody tr").eq(index).addClass("bg").siblings("tr").removeClass("bg");				
			break;
			case 8:
				var id = parseInt($("tbody tr.bg").attr("title"));
			    delFun(id)
			break;
		}
	})
	$("body").on("click", "td", function(){
		$(this).children("input").removeAttr("disabled");
	})
	
	$("body").on("blur", "td", function(){
		$(this).children("input").attr("disabled", true);
	})	
	


	// for(i = 0;i<table.length;i++){
	// 	var id = table[i].id;
	// 	var classify = table[i].classify;
	// 	var title = table[i].title;
	// 	var grade = table[i].grede;
	// 	var state = table[i].state;
	// 	var time = table[i].time;
	// 	var name = table[i].name;
	// 	var school = table[i].school;
	// 	var del = table[i].del;
	// 	$("tbody").append(
	// 	'<tr>'+
	// 		'<td>'+'<input type="checkbox">'+'<input type="text" class=text value="'+id+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+classify+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+title+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text"t value="'+grade+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+state+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+time+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+name+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+school+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="botton" class="btn" value="'+del+'" disabled>'+'</td>'
	// 	+'</tr>'
	// 	)
	// }
	

	// $(".add").click(function(){
	// 	$("tbody").append(
	// 	'<tr>'+
	// 		'<td>'+'<input type="checkbox">'+'<input type="text" class=text value="'+id+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+classify+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+title+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text"t value="'+grade+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+state+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+time+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+name+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="text" class="text" value="'+school+'" disabled>'+'</td>'+
	// 		'<td>'+'<input type="botton" class="btn" value="'+del+'" disabled>'+'</td>'
	// 	+'</tr>'
	// 	)
	// })

	// $(".del").on("click",function(){
	// 	$("tr").remove();
	// })
})