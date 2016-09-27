var dataObj = function () {
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}
dataObj.prototype.draw = function () {

    ctx1.save();
    ctx1.shadowBlur = 20;
    ctx1.shadowColor = 'white';
    ctx1.fillStyle = 'white';
    ctx1.fillText('SCORE: ' + this.score, canWidth * 0.5, 40);
    ctx1.fillText(this.double, canWidth * 0.5 + 15, canHeight - 40);
    ctx1.fillText(this.fruitNum, canWidth * 0.5 - 15, canHeight - 40);
    ctx1.drawImage(fruit.orange,canWidth * 0.5 - 25 , canHeight - 30,20,20);
    ctx1.drawImage(fruit.blue,canWidth * 0.5 + 5 , canHeight - 30,20,20);
    if (this.gameOver) {
        this.alpha += dalteTime * 0.001;
        if (this.alpha > 1)
            this.alpha = 1;
        ctx1.fillStyle = "rgba(255,255,255 ," + this.alpha + ")";
        ctx1.fillText('Game Over', canWidth * 0.5, canHeight * 0.5);
    }
    ctx1.restore();
}
dataObj.prototype.addScore = function () {
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
}