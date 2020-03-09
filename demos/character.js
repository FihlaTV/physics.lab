function demo() {

    physic.set(); // reset default setting
    view.load ( ['track.sea', 'heros.sea'], afterLoad, true, true );

}

// ! \\ 

//  click on view and use key to controle character
//  use W - S or Z - S for front back move
//  use A - D or Q - D for strafe move
//  use left right arrow to rotate view
//  space to jump

// you can also use Gamepad ( mapped for xbox )


function afterLoad () {

	var heroMat = view.material({
        name:'heroes',
        roughness: 0.6,
        metalness: 0.4,
        map: { url: 'heros_c.jpg', flip:false },
        skinning:true,
    });

    //var m = view.getResult();
    view.addJoystick();

    physic.add({type:'plane'}); // infinie plane

    physic.add({ type:'mesh', shape:view.getGeometry('track', 'track'), density:0, friction:0.6, restitution:0.1 });

    //physic.add({ type:'character', name:'bob', rot:[0,90,0], mesh:view.getMesh('heros', 'hero_0' + Math.randInt(1, 5) ), scale:0.07, debug:false });
    physic.add({ type:'character', name:'bob', rot:[0,90,0], mesh:view.getMesh('heros', 'hero_0' + Math.randInt(1, 5)), scale:0.07, debug:true, material:heroMat });


    follow('bob', {  height:0.3, acceleration: 0.05, speed:10, distance:3 } );

    physic.move('bob');

    var s, x, y;
    for(var i = 0; i < 40; i++){
        x = Math.rand(-50, 50);
        z = Math.rand(-50, 50);
        s = Math.rand(0.5, 5);
        physic.add({ type:'box', size:[s,s,s], pos:[x,s*0.5,z], mass:s});
    }

};