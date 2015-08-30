#pragma strict

var totalBuildings : int;
var buildingsToppled : int = 0;


public var buildingsText : UI.Text;

function Start () {
	totalBuildings = GameObject.FindGameObjectsWithTag("Building").length;
}

function Update () {
	if (!gameObject.GetComponent(PlayerMovement).dead) {
		buildingsText.text = "Buildings left: " + (totalBuildings-buildingsToppled) + "/" + totalBuildings;
	}
}