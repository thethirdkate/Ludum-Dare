using UnityEngine;
using System.Collections;

public class AIScript : MonoBehaviour {

	NavMeshAgent agent;

	// Use this for initialization
	void Start () {

		GoToNewPoint ();
	}
	
	// Update is called once per frame
	void Update () {
	
		if (agent.remainingDistance < 0.5f)
			GoToNewPoint();
	}

	void GoToNewPoint () {
		agent = GetComponent<NavMeshAgent>();
		
		float maxWalkDistance = 50f;
		Vector3 direction = Random.insideUnitSphere * maxWalkDistance;
		direction += transform.position;
		
		NavMeshHit hit;
		NavMesh.SamplePosition(direction, out hit, Random.Range(0f, maxWalkDistance), 1);
		
		Vector3 destination = hit.position;
		agent.SetDestination(destination);
	
	}
}
