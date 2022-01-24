class Walk{

    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./walk.png"),0,2,70,125,7,0.9);
        //this.x = 0;
        //this.y = 0;
       // this.speed = 25;
    };

    update(){
     //   this.x += this.speed * this.game.clockTick;
       // if(this.x > 1024) this.x =0 ;
    };
    draw(ctx){
        this.animator.drawFrame(this.game.clockTick,ctx,25,25);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./walk.png"),0,0);
    };

}