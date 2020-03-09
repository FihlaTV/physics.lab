/**   _   _____ _   _   
*    | | |_   _| |_| |
*    | |_ _| | |  _  |
*    |___|_|_| |_| |_|
*    @author Thomas   https://visar.co.za
*    AMMO LAB MAIN
*/

'use strict';


var demos = {
    'BASIC': ['empty', 'basic', 'moto_basic', 'car_basic', 'collision', 'ragdoll', 'terrain', 'supermaket', 'kinematics', 'kinem_test','character', 'joints', 'point2point', 'contact', 'testmesh','compound', 'tower','rayTest','ghost', 'fps', 'bullet',],
    'SOFT': ['soft_cloth', 'soft_rope', 'soft_rope2', 'soft_box', 'soft_pig', 'soft_ball', 'soft_convex'],
    'ADVANCED':[ 'asteroid', 'basketball', 'car_advanced', 'car_multy', 'car_Breakers', 'car_terrain', 'moto_akira', 'kinem_body','mecanum', 'drone', 'millions', 'water', 'break_glass', 'break_diamond', 'dragon', 'chess',],
};


/*


var demos = [
    'basic', 'terrain', 'supermaket', 'collision', 'ragdoll',
    'car_advanced', 'car_basic','car_multy', 'car_Breakers', 'car_terrain',
    'moto_basic','moto_akira',
    'kinematics', 'kinem_body','kinem_test',
    'soft_cloth', 'soft_rope', 'soft_rope2', 'soft_box', 'soft_pig', 'soft_ball', 'soft_convex',// 'soft_basic', // ,
    'character', 'joints', 'empty',  'asteroid', 'point2point', 'contact', 'testmesh', 'water',
    'mecanum', 'drone', 'millions', 'basketball',
    'compound', 'tower', 
    'break_glass', 'break_diamond',
    'rayTest',
    'ghost', 
    'fps',
    'dragon', 'chess', 'bullet',
];*/

//demos.sort();

var demo, physic;
var demoName = 'basic';
var currentMode = '';

//////////////////////////////

var isWithCode = false;

function init(){

    //view = new View();
    view.init( initAmmo );
    intro.init('Physics: Experimental| Lab: VISAR');
    

}

function initAmmo () {

    physic = SHOT.engine;
    physic.init( next );
    
}

function next(){

    intro.clear();
    
    physic.setView( view );
    physic.log = editor.log;
    physic.tell = function () { editor.tell( 'three '+ view.getFps() + ' / ammo ' + physic.getFps() );  }
    //physic.tell = function () { editor.tell( 'three '+ view.getFps() + ' / ammo ' + Math.floor(physic.getDelta()*1000) );  }
    physic.getKey = function () { return user.key; }



    editor.init( launch, isWithCode, '#308AFF', 'physics.lab' );
    editor.addExtraOption( physic.setMode );
    //view.setRefEditor( editor );
    view.setEditor( editor );
    view.setUser( user );
    view.unPause = unPause;

    //physic.start();

    ready();

}

function unPause () {

    physic.start();

}

function ready () {

    var hash = location.hash.substr( 1 );
    if(hash !=='') demoName = hash;
    editor.load('demos/' + demoName + '.js');

}

function launch ( name, full ) {

    physic.reset( full );
    demo = new window['demo'];

}

function follow ( name, o ) { 

    physic.setCurrentFollow( name, o );

};

function ui ( option ) { editor.setOption( option ); };
