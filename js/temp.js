	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("modal-close")[0];

	// When the user clicks the button, open the modal
	btn.onclick = function() {
	  modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

function copyToClipboard(id) {
    //var text = document.getElementById(id).innerText;
    var text = id;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  
  //alert("copyText : " + text);
  
  
  
  
 // var copyText2 = document.getElementById("myInput").innerHTML;
  //var copyText = document.getElementById("myInput").innerText;
 // alert(copyText2);
 // alert(copyText);
 // copyText.select();
 // copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 // document.execCommand("copy");
 // alert("Copied the text: " + copyText.value);

  // 글을 쓸 수 있는 란을 만든다.
  //var aux = document.createElement("input");

  // 지정된 요소의 값을 할당 한다.
  //aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // bdy에 추가한다.
  //document.body.appendChild(aux);

  // 지정된 내용을 강조한다.
  //aux.select();

  // 텍스트를 카피 하는 변수를 생성
  //document.execCommand("copy");

  // body 로 부터 다시 반환 한다.
  //document.body.removeChild(aux);
}
