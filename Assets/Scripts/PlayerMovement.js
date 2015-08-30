class Boundary
{
    var xMin : float;
    var xMax : float;
    var zMin : float;
    var zMax : float;
}

public var turnSmoothing : float = 15f;     // A smoothing value for turning the player.
var speed : float;
var tilt : float;
var boundary : Boundary;
var torque : float;
public var rotateSpeed = 1;

var dead : boolean = false;

function FixedUpdate () {

	if (Input.GetKey("space")&&dead) {
		Application.LoadLevel("Scene 1");	
	}

	if (!dead) {

		if (Input.GetKey("up")) {
			moveVertical = 1;
		}
		transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);

	     var moveHorizontal : float= Input.GetAxis ("Horizontal");
	     //moveVertical = Input.GetAxis ("Vertical");

	     GetComponent.<Rigidbody>().AddForce( transform.forward * moveVertical *speed );

	    
		 GetComponent.<Rigidbody>().AddTorque(moveHorizontal * torque, 0, moveVertical * torque);
 	}
 
}