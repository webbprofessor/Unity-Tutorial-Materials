#pragma strict
var prefabBullet:Rigidbody;
var shootForce:float;
var shootPosition:Transform;

function Update()
{
	if(Input.GetButtonDown("Jump"))
	{
	var instanceBullet = Instantiate(prefabBullet, transform.position, shootPosition.rotation);
	instanceBullet.rigidbody.AddForce(shootPosition.right * shootForce);

	}}