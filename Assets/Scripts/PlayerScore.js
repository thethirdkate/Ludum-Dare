#pragma strict
import UnityEngine.UI;

public var livesText : UI.Text;
var lives : int = 5;
var score: int = 0;
public var goal : GameObject;

function Start () {

}

function Update () {
	if (lives>0) {
		livesText.text = "Lives: " + lives;
	}
}



function OnCollisionStay (col : Collision)
{
	if (col.gameObject.tag != "Terrain" && col.gameObject != goal) { 
		lives--;
		if (lives <= 0) {
			livesText.text = "You Lost :( Press space to respawn.";
			
			gameObject.GetComponent(PlayerMovement).dead=true;
		}
	}
	if (col.gameObject == goal) { 
		lives = 0;
		livesText.text = "You Won :D Press space to play again.";
			gameObject.GetComponent(PlayerMovement).dead=true;
	}	
}

function OnTriggerEnter(col: Collider) {

	if (col.gameObject.CompareTag("Collectible")) {
		score++;
		col.gameObject.SetActive(false);
	}
}


