var BackGround = (function (_super) {
    function BackGround() {
        BackGround.super(this);
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage('comp/background.png');

        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage('comp/background.png');

        this.addChild(this.bg1, this.bg2)

        Laya.timer.frameLoop(1, this, this.onAnimate);
    
    };
    Laya.class(BackGround, 'BackGround', _super)

    var _proto = BackGround.prototype;

    _proto.onAnimate = function () {
        this.pivotY += 1;
    }

    return BackGround;
})(Laya.Sprite);