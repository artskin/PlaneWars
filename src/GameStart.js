var GameStart = (function (_super) {
    function GameStart() {
        console.log('GameStart')
        GameStart.super(this);
    };
    Laya.class(GameStart, 'GameStart', _super)

    var _proto = GameStart.prototype;

    return GameStart;
})(ui.GameState);