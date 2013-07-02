#pragma strict

function Update () {

if(Input.GetKey("z")){
transform.Rotate(0,-5,0);
}

if(Input.GetKey("c")){
transform.Rotate(0,5,0);
}

}