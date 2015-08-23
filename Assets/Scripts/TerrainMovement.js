#pragma strict

public var tiltTime : float = 500;
public var tiltSpeed : float = 0;

var tiltDir1 : int = 1;
var tiltDir2 : int = 1;
var tiltCount1 : int = 0;
var tiltCount2 : int = tiltTime/2; //offset one of the tilts for the wavy feel

function Start () {

}	

function Update () {

	//this rotation is Rotation 1
	if (tiltDir1 == 1) { 
		transform.Rotate(Vector3.left * Time.deltaTime * tiltSpeed);
	}
	else {
		transform.Rotate(Vector3.right * Time.deltaTime * tiltSpeed);
	}
		
	
	//this rotation is Rotation 2
	if (tiltDir2 == 1) { 
		transform.Rotate(Vector3.forward * Time.deltaTime * tiltSpeed);
	}
	else {
		transform.Rotate(Vector3.back * Time.deltaTime * tiltSpeed);
	}

	tiltCount1++;
	tiltCount2++;
	if (tiltCount1==tiltTime) { 
		tiltCount1 = 0; //reset the count
		tiltDir1=-tiltDir1; //switch direction
	}
	if (tiltCount2==tiltTime) { 
		tiltCount2 = 0; //reset the count
		tiltDir2=-tiltDir2; //switch direction
	}
	

}