    
	//Test nested dynamic children 
	// calls json2html recusively

	var json2html = require('node-json2html');

    var nested = {Name:'Parent', Children:[ {Name:'Child1'},{Name:'Child1'} ]};

    var transform_parent = [
			{tag:'span',html:'${Name}'},
			{tag:'ul',children:function(){return(json2html.transform(this.Children, transform_child));}}
		];

	var transform_child = 
			{tag:'li',children:[
				{tag:'b',html:'${Name}'}
			]};
        
    var html = json2html.transform(nested,transform_parent);

    console.log(html);
