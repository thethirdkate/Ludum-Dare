#pragma strict

public var massCenter : Vector3;

function Start () {
	GetComponent.<Rigidbody>().centerOfMass = massCenter;
}

function Update () {

}