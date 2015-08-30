#pragma strict

function Start () {

}

function Update () {


}


function OnTriggerEnter (other : Collider) {

	if (other.gameObject.tag=="Player") {
		var playerScript = other.gameObject.GetComponent(PlayerScore);
		playerScript.killMessage = "You Lost :( Press space to respawn!";
		playerScript.killMe = true;
	}
	else if (other.gameObject.tag!="PlayerPart") {
		Destroy(other.gameObject);
	}
}
