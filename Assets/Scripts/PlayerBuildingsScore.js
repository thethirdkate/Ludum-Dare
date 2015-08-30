#pragma strict

var totalBuildings : int;
var buildingsToppled : int = 0;


public var livesText : UI.Text;

function Start () {
	totalBuildings = GameObject.FindGameObjectsWithTag("Building").length;
}

function Update () {
	if (!gameObject.GetComponent(PlayerMovement).dead) {
		livesText.text = "Buildings left: " + (totalBuildings-buildingsToppled) + "/" + totalBuildings;
	}
}