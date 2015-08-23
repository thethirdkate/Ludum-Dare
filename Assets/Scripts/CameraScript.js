#pragma strict

 var target : GameObject;
 var distance : float;
 
 var offset : Vector3;
 
 function Start() {
 	 offset = target.transform.position - transform.position;
 }
 function Update(){
  
   //  transform.position = new Vector3(target.transform.position.x, transform.position.y, target.transform.position.z - distance);
  	 
  	/* transform.RotateAround (target.transform.position, Vector3.up, 20 * Time.deltaTime);*/
  	 //transform.LookAt(target.transform);
   var  desiredAngle : float = target.transform.eulerAngles.y;
   var  rotation : Quaternion = Quaternion.Euler(0, desiredAngle, 0);
   transform.position = target.transform.position - (rotation * offset);
   transform.LookAt(target.transform);
 }
 
 