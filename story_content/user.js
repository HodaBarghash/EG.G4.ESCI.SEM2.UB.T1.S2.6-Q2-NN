function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oQOHgo2XSj":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwbWEJasdQAhqjcTznEwWtSbJVnjq_6iJtDKVv03lhYm6RtD25XCWxC8npfZW2EZfY7cg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

