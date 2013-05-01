// JavaScript Document
#pragma strict

var forwardRate : float = 3;
var turnRate : float = 2;

function Update () {

// tank's forward speed in action
var forwardMoveAmount = Input.GetAxis("Vertical") * forwardRate;

// force of the tank's turn
var turnForce = Input.GetAxis("Horizontal") * turnRate;

// rotate tank in action
transform.Rotate(0,turnForce,0);

transform.position += transform.right * forwardMoveAmount * Time.deltaTime;

}