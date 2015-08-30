#pragma strict
import UnityEngine.UI;

public var timeForLevel : int;
var levelCounter : int = 0;


public var timeText : UI.Text;

var startTime : float;

function Start () {
	startTime = Time.time;
}

function Update () {
	levelCounter = timeForLevel+(startTime-Time.time);
	
	if (levelCounter > 0) {
		timeText.text = "Time: " + levelCounter;
	}
	
	else {
		var playerScript = gameObject.GetComponent(PlayerScore);
		playerScript.killMessage = "Out of time! :( Press space to respawn!";
		playerScript.killMe = true;
	}

}




