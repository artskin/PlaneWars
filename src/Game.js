{
   (
        function(Game) {
        Laya.init(480, 852, Laya.WebGL);

        Laya.stage.alignH='center';
        Laya.stage.scaleMode='showAll';
        Laya.stage.screenMode='vertical';
        Laya.stage.bgColor = '#000000'

        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onLoad), null, Laya.Loader.ATLAS);
    }
   )();
   function onLoad () {
        this.bg = new BackGround();
        Laya.stage.addChild(this.bg)
         createEnemy();
        
        this.Role = new Role();
        this.Role.init('hero', 0, 0, 0, 30)

        this.Role.pos(200, 500)
        Laya.stage.addChild(this.Role)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, onStartDrag)
   }

    function onStartDrag () {
       this.Role.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    function createEnemy() {
        this.hp = [1, 3, 10]
        this.speed = [5, 3, 1]
        this.radius = [15, 30, 70]

        for(var i = 0; i <= 10; i++) {
            var t = Math.random() < 0.7 ? 0 : Math.random() < 0.95 ? 1: 2
            var enemy = new Role();
            enemy.init('enemy'+[t + 1], 1, this.hp[t], this.speed[t], this.radius[t])
            enemy.pos(Math.random() * 400 + 40, Math.random() * 200)
            Laya.stage.addChild(enemy)
        }
    }
}(window.Game || (window.Game = {}))