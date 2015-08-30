#pragma strict

var score: int = 0;
var totalCollectibles : int = 0;

public var collectiblesText : UI.Text;


function Start () {

	totalCollectibles = GameObject.FindGameObjectsWithTag("Collectible").length;
	collectiblesText.text = "Collected " + score + "/" + totalCollectibles;

}

function Update () {

}



function OnTriggerEnter(col: Collider) {
	if (col.gameObject.CompareTag("Collectible")) {
		Debug.Log("collect");
		score++;
		col.gameObject.SetActive(false);
		collectiblesText.text = "Collected " + score + "/" + totalCollectibles;
	}
}
