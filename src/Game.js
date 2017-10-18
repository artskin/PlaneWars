{
   (
        function(Game) {
        Laya.init(480, 852, Laya.WebGL);

        Laya.stage.alignV='middle';
        Laya.stage.alignH='center';
        Laya.stage.scaleMode='showAll';
        Laya.stage.screenMode='vertical';
        Laya.stage.bgColor = '#ffffff'

        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onLoad), null, Laya.Loader.ATLAS);
    }
   )();
   function onLoad () {
       console.log('onLoad', new BackGround())
        this.bg = new BackGround();
        Laya.stage.addChild(this.bg)
    //    Index.gameStart = new GameStart();
    //    Laya.stage.addChild(Index.gameStart)
   }
}(window.Game || (window.Game = {}))