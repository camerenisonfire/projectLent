function MacBook(sound) {
    //Call the Shape parent constructor
    Shape.call(sound);
    this.obj = new Array();
    this.dur = new Array();
    this.dir = new Array();
    this.speed = new Array();
    this.ring = new Array();
};

MacBook.prototype = Object.create(Shape.prototype);

MacBook.prototype.constructor = MacBook;

//add to scene
MacBook.prototype.add = function() {

    //var material = new THREE.MeshPhongMaterial( {color: 0x00C1B5,shading: THREE.SmoothShading});
    var material = new THREE.MeshPhongMaterial( {color: 0x00C1B5,shading: THREE.FlatShading});
    //mac = new THREE.Mesh( new THREE.SphereGeometry(0.35,32,32),material);
    var mac = new THREE.Mesh( new THREE.SphereGeometry(0.15,4,4),material);
    var duration = new THREE.Clock();
    duration.start();
    this.dur.push(duration);
    this.ring.push(Math.random() * (4.75 - 4) + 4);

    this.speed.push(Math.random() * (1 - 0.1) + 0.1);
    this.dir.push(Math.floor(Math.random() * 6) + 1);

    this.obj.push(mac);
    scene.add(mac);
}

MacBook.prototype.move = function() {


    for(var i = 0; i < this.obj.length; i++) {
        switch(this.dir[i]) {
            case 1:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = -Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5;
                break;
            case 2:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 3:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case this.ring[i]:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.y = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * 1.5; //diagonal?
                break;
            case 5:
                this.obj[i].position.x = -Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                break;
            case 6:
                this.obj[i].position.x = Math.cos(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                this.obj[i].position.z = Math.sin(this.dur[i].getElapsedTime() * this.speed[i]) * this.ring[i];
                break;
        }
    }

}


