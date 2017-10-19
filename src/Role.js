var Role = function (_super) {
    function Role() {
        Role.super(this);
    }
    Role.caced = false;
    Laya.class(Role, 'Role', _super)

    var _proto = Role.prototype;

    _proto.init = function(type, camp, hp, speed, hitRadius) {
        this.type = type;
        this.camp = camp;
        this.hp = hp;
        this.speed = speed;
        this.hitRadius = hitRadius;

        if(!Role.caced) {
            Laya.Animation.createFrames([
                'comp/hero_fly1.png',
                'comp/hero_fly2.png',
            ],
            'hero_fly',
            );
            Laya.Animation.createFrames([
                'comp/hero_down1.png',
                'comp/hero_down2.png',
                'comp/hero_down3.png',
                'comp/hero_down4.png',
            ],
            'hero_down',
            );

            Laya.Animation.createFrames([
                'comp/enemy1_fly1.png',
            ],
            'enemy1_fly',
            );
            Laya.Animation.createFrames([
                'comp/enemy1_down1.png',
                'comp/enemy1_down2.png',
                'comp/enemy1_down3.png',
                'comp/enemy1_down1.png',
            ],
            'enemy1_down',
            );

            Laya.Animation.createFrames([
                'comp/enemy2_fly1.png',
            ],
            'enemy2_fly',
            );
            Laya.Animation.createFrames([
                'comp/enemy2_down1.png',
                'comp/enemy2_down2.png',
                'comp/enemy2_down3.png',
                'comp/enemy2_down1.png',
            ],
            'enemy2_down',
            );

            Laya.Animation.createFrames([
                'comp/enemy3_fly1.png',
            ],
            'enemy3_fly',
            );
            Laya.Animation.createFrames([
                'comp/enemy3_down1.png',
                'comp/enemy3_down2.png',
                'comp/enemy3_down3.png',
                'comp/enemy3_down1.png',
            ],
            'enemy3_down',
            );
           
        }

        this.body = new Laya.Animation();
        this.addChild(this.body)

        this.playAction("fly");
    }

    _proto.playAction = function (action) {
        this.action = this.type +"_" + action;
        this.body.play(0, true, this.action);
        this.bound = this.body.getBounds();
        this.body.pos(-this.bound.width / 2, -this.bound.height / 2);
    }

   

    return Role;
}(Laya.Sprite);