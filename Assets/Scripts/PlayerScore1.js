#pragma strict
import UnityEngine.UI;

public var livesText : UI.Text;
var lives : int = 5;
public var goal : GameObject;

function Start () {

}

function Update () {
	if (lives>0) {
		livesText.text = "Lives: " + lives;
	}
}



function OnCollisionStay (col : Collision) {

	var damage: int = 2 * col.relativeVelocity.magnitude ;

	if (col.gameObject.tag != "Terrain" && col.gameObject != goal) { 
		lives -= damage;
		if (lives <= 0) {
			livesText.text = "You Lost :(";
		}
	}
	if (col.gameObject == goal) { 
		lives = 0;
		livesText.text = "You Won :D";
	}
}