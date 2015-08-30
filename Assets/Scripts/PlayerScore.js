﻿#pragma strict
import UnityEngine.UI;

public var livesText : UI.Text;
var lives : int = 5;
var score: int = 0;
public var goal : GameObject;
var killMe : boolean = false;
var killMessage : String;

function Start () {

}

function Update () {
	if (lives>0) {
		livesText.text = "Lives: " + lives;
	}
	if (killMe) {
		lives = 0;
		livesText.text = killMessage;
		gameObject.GetComponent(PlayerMovement).dead = true;
	}
}



function OnCollisionStay (col : Collision)
{
	if (col.gameObject.tag != "Terrain" && col.gameObject != goal) { 
		lives--;
		if (lives <= 0) {
			killMessage = "You lost :( Press space to respawn.";
			killMe=true;
		}
	}
	else if (col.gameObject == goal) { 
		killMessage = "You won! Press space to play again.";
		killMe=true;
	}	
}

function OnTriggerEnter(col: Collider) {

	if (col.gameObject.CompareTag("Collectible")) {
		score++;
		col.gameObject.SetActive(false);
	}
}


