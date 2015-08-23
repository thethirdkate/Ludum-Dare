#pragma strict


 public var  target : Transform;
 public var  smoothTime : float = 0.1f;
 public var  speed : float = 3.0f;
 
 public var  followDistance : float= 10f;
 public var  verticalBuffer : float= 1.5f;
 public var  horizontalBuffer: float = 0f;
 
 private var  velocity : Vector3 = Vector3.zero;
 
 public var  rotation : Quaternion = Quaternion.identity;
 
 public var  yRotation : float = 0.0f;
     
     
function Start () {

}

function Update () {

         var  targetPosition : Vector3 = target.TransformPoint(new Vector3(horizontalBuffer, followDistance, verticalBuffer));
         transform.position = Vector3.SmoothDamp(transform.position, targetPosition,  velocity, smoothTime);
         //this is the code that solves the problem
         transform.eulerAngles = new Vector3(90, target.transform.eulerAngles.y, 0);

}