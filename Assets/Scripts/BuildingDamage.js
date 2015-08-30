#pragma strict

var myYPosition : float; //starting y position of the building top
var yChangeLimit : float = 0.2; //how much the y value of the building top can change before the building is considered toppled

var toppled : boolean = false;

var player : GameObject;

function Start () {

	player = GameObject.FindGameObjectWithTag("Player");
	myYPosition = gameObject.transform.position.y; //get the starting position
	yChangeLimit = 0.2;

}

function Update () {

	if (!toppled) {
		if ((transform.position.y+yChangeLimit)<myYPosition) {
			Debug.Log("TOPPLED");
			toppled = true;
			player.gameObject.GetComponent(PlayerBuildingsScore).buildingsToppled++;
		 }
	}

}