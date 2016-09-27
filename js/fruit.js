var fruitObj = function () {
    this.alive = [];
    this.x = [];
    this.y = [];
    this.aneNO = [];
    this.l = [];
    this.spd = [];
    this.fruitType = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function () {
    for (var i = 0; i < this.num; i++) {
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.aneNO[i] = 0;
        this.fruitType[i] = '';
        this.spd[i] = Math.random() * 0.017 + 0.0015;//[0.003,0.02)
    }
    this.orange.src = './src/fruit.png';
    this.blue.src = './src/blue.png';
}
fruitObj.prototype.draw = function () {
    for (var i = 0; i < this.num; i++) {
        //draw
        //find an ane, grow,fly up
        if (this.alive[i]) {
            var pic;
            if(this.fruitType[i] == 'blue'){
                pic = this.blue;
            }else{
                pic = this.orange;
            }
            if (this.l[i] <= 15) {//grow
                this.x[i] = ane.headx[this.aneNO[i]];
                this.y[i] = ane.heady[this.aneNO[i]]
                this.l[i] += this.spd[i] * dalteTime;
            } else {
                this.y[i] -= this.spd[i] * 7 * dalteTime;
            }
            ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
            if (this.y[i] < 10) {
                this.alive[i] = false;
            }
        }
    }
}
fruitObj.prototype.born = function (i) {
    this.aneNO[i] = Math.floor(Math.random() * ane.num);
    this.l[i] = 0;
    this.alive[i] = true;
    var ran = Math.random();
    if(ran<0.3){
          this.fruitType[i] = 'blue'; //orange,blue
    }else{
        this.fruitType[i]='orange';
    }
}
fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
}
function fruitMonitor(){
    var num = 0;
    for(var i = 0;i < fruit.num;i++){
        if(fruit.alive[i])num++;
    }
    if(num<25){
        //send fruit
        sendFruit();
        return;
    }
}
function  sendFruit(){
    for(var i = 0;i < fruit.num;i++){
        if(!fruit.alive[i]){
            fruit.born(i);
        }
    }
}
