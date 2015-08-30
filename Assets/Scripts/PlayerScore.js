#pragma strict

var score: int = 0;

function Start () {

}

function Update () {

}



function OnTriggerEnter(col: Collider) {

	if (col.gameObject.CompareTag("Collectible")) {
		score++;
		col.gameObject.SetActive(false);
	}
}
