var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameStateUI=(function(_super){
		function GameStateUI(){
			
		    this.startTitle=null;
		    this.startBtn=null;
		    this.startText=null;
		    this.reStartText=null;
		    this.overTitle=null;
		    this.pauseTitle=null;

			GameStateUI.__super.call(this);
		}

		CLASS$(GameStateUI,'ui.GameStateUI',_super);
		var __proto__=GameStateUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStateUI.uiView);
		}
		GameStateUI.uiView={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"comp/gameUI/bg.jpg","sizeGrid":"1,1,1,1","height":1280}},{"type":"Image","props":{"y":344,"x":135,"width":443,"visible":false,"var":"startTitle","skin":"comp/gameUI/logo.png","height":168}},{"type":"Button","props":{"y":769,"x":197,"width":325,"var":"startBtn","stateNum":2,"skin":"comp/gameUI/btn_bg.png","height":121},"child":[{"type":"Image","props":{"y":38,"x":80,"var":"startText","skin":"comp/gameUI/start.png"}},{"type":"Image","props":{"y":39,"x":86,"var":"reStartText","skin":"comp/gameUI/restart.png"}}]},{"type":"Image","props":{"y":343,"x":132,"width":456,"visible":false,"var":"overTitle","skin":"comp/gameUI/gameOver.png","height":165}},{"type":"Image","props":{"y":335,"x":101,"width":518,"visible":false,"var":"pauseTitle","skin":"comp/gameUI/gamePause.png","height":182}}]};
		return GameStateUI;
	})(View);