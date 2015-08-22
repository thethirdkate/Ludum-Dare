#pragma strict

 var target : GameObject;
 var distance : float;
 
 function Update(){
  
     transform.position = new Vector3(target.transform.position.x, transform.position.y, target.transform.position.z - distance);
  
 }