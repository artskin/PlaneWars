var Game = (function() {
    (function Game(){
         Laya.init(480, 852, Laya.WebGL);

        Laya.stage.alignH='center';
        Laya.stage.scaleMode='showAll';
        Laya.stage.screenMode='vertical';
        Laya.stage.bgColor = '#000000'

        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onLoad), null, Laya.Loader.ATLAS);
    })();
    function onLoad () {
        this.bg = new BackGround();
        Laya.stage.addChild(this.bg)
        
        this.hero = new Role();
        this.hero.init('hero', 0, 0, 0, 30)
        this.hero.pos(200, 730)

        Laya.stage.addChild(this.hero)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, onStartDrag)
        Laya.timer.frameLoop(1, this, onEnemy)

    }

    function onEnemy () {
        for (var i = Laya.stage.numChildren - 1; i > 0; i--) {
            var role = Laya.stage.getChildAt(i);
            if(role && role.speed) {
                role.y += role.speed;
                if(role.y > 900) {
                    role.removeSelf();
                    Laya.Pool.recover('role', role)
                }
            } else if(Laya.timer.currFrame % 120  === 0) {
                createEnemy(2);
            }
        }
    }

    function onStartDrag () {
       this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    function createEnemy(num) {
        this.hp = [1, 3, 10]
        this.speed = [5, 3, 1]
        this.radius = [15, 30, 70]

        for(var i = 0; i < num; i++) {
            var enemy = Laya.Pool.getItemByClass("role", Role);
            var t = Math.random() < 0.7 ? 0 : Math.random() < 0.95 ? 1: 2
            enemy.init('enemy'+[t + 1], 1, this.hp[t], this.speed[t], this.radius[t])
            enemy.pos(Math.random() * 400 + 40, Math.random() * 200)
            Laya.stage.addChild(enemy)
        }
    }

})();