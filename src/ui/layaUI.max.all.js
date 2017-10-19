var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameStateUI=(function(_super){
		function GameStateUI(){
			
		    this.backGround=null;
		    this.Btn=null;
		    this.startText=null;
		    this.startTitle=null;

			GameStateUI.__super.call(this);
		}

		CLASS$(GameStateUI,'ui.GameStateUI',_super);
		var __proto__=GameStateUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStateUI.uiView);
		}
		GameStateUI.uiView={"type":"View","props":{"width":480,"height":850},"child":[{"type":"Image","props":{"y":0,"x":0,"width":480,"var":"backGround","skin":"comp/bg.jpg","sizeGrid":"1,1,1,1","height":850}},{"type":"Button","props":{"y":563,"x":120,"width":240,"var":"Btn","stateNum":2,"skin":"comp/btn_bg.png","height":82},"child":[{"type":"Image","props":{"y":19,"x":38,"var":"startText","skin":"comp/start.png"}}]},{"type":"Image","props":{"y":210,"x":57,"var":"startTitle","skin":"comp/logo.png"}}]};
		return GameStateUI;
	})(View);