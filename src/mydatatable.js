$.widget("ns.mydatatable", {
	/* Widget Private Properties
	 * 	this.element - dom object widget is applied to
	 * 	this.options - key/value pairs of widget options
	 */
	
	/* Predefined Public Methods
	 * 	option(key, value) - set or get an option
	 * 	option(options) - key/value pairs to set multiple options
	 */
	
	/* Predefined Private Methods
	 * 	_setOption(key, value) - set or get an option
	 * 	_setOptions(options) - key/value pairs to set multiple options
	 * 	_trigger(callbackName, jQueryEvent, data) - create a callback
	 */
	
	/* Implementation
	 * 	Plugin instance is directly linked to DOM Element
	 * 	var table = $("<div></div>").mydatatable({
	 * 		param1: "",
	 * 		callbackName: function(event, data){  }
	 * 	});
	 * alert(table.options.param1);
	 * table.is(":data('ns-mydatatable')"); // true
	 */
	
	//Default options
	options: {
		param1: ""
	},
	
	//Constructor
	_create: function(){
		
	},
	
	//Magic Methods
	_setOption: function(key, value){
		this._super(key, value);
	},
	_setOptions: function(options){
		this._super(options);
	},
	_enable: function(){},
	_disable: function(){},
	
	//Destructor - undo anything plugin has done during init or later use
	_destory: function(){
		
	},
	
	//Private Method for use within plugin context only
	_private_method: function(){
		
	},
	
	//Public Method
	public_method: function(){
		
	}
});
