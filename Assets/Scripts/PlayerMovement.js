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

function Start() {
}

function FixedUpdate () {

	if (dead) {
		if (Input.GetKey("space") || Input.touchCount>0) {
			Application.LoadLevel("Scene 1");	
		}
	}

	if (!dead) {
	
	//	var verticalInput = -Input.acceleration.y;
		var horizontalInput = Input.acceleration.x;
		
		if (Input.GetKey("up")) {
			verticalInput = 1;
		}
		if (Input.GetKey("down")) {
			verticalInput = -1;
		}
		
		if (Input.touchCount>0) {
			if (Input.GetTouch(0).position.x>(Screen.width/2)) { verticalInput=1; }
			else {
				verticalInput=-1;
			}
		}
		//transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
		transform.Rotate(0, horizontalInput * rotateSpeed, 0);

	    //var moveHorizontal : float = Input.GetAxis ("Horizontal");
	     //moveVertical = Input.GetAxis ("Vertical");

	     GetComponent.<Rigidbody>().AddForce( transform.forward * verticalInput *speed );
	    
		 GetComponent.<Rigidbody>().AddTorque(horizontalInput * torque, 0, verticalInput * torque);
 	}
 
}