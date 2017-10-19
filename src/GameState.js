var GameState = (function (_super) {
    function GameState() {
        GameState.super(this);

        this.Btn.on(Laya.Event.CLICK, this, this.onClick)
    };
    Laya.class(GameState, 'GameState', _super)

    var _proto = GameState.prototype;

    _proto.onClick = function () {
        this.removeSelf();

        this.bg = new BackGround();
        Laya.stage.addChild(this.bg)
        
        this.Role = new Role();
        this.Role.pos(200, 500)
        Laya.stage.addChild(this.Role)

        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onStartDrag)
   }

    _proto.onStartDrag = function () {
       this.Role.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    }

    return GameState;
})(ui.GameStateUI);