var u = window.localStorage.getItem('name');

var arr = ["Let Us C Solutions","Password Strength Checker","Soccer 'C' Game","Equations Solver","Matrix Rank Finder","Chat App (Windows)","Automatic Mouse Alphabet Writer","Chat App (Android)","Tic-Tac-Toe (Android)","IL NotePad","Password Strength Checker (GUI)"];
var links = ['https://www.dropbox.com/s/p9ed3cna0e43sxz/Let%20Us%20C%20Solutions.zip?dl=1','https://www.dropbox.com/s/lxu66rwuu6evevg/Password%20Strength%20Checker.zip?dl=1','https://www.dropbox.com/s/w7jrsbm21u3iu14/Soccer%20Game.zip?dl=1','https://www.dropbox.com/s/nw7x8gxl1kaulg6/Equations%20Solver.zip?dl=1','https://www.dropbox.com/s/e67rpj49ah0ui0e/Matrix%20Rank%20Finder.zip?dl=1','https://www.dropbox.com/s/l4lvasp12gl37hz/Chat%20App.zip?dl=1','https://www.dropbox.com/s/675q6j3xm3jn4c6/alphabetWriter_pyautogui.zip?dl=1','https://www.dropbox.com/s/pn2kn9yazcm9xef/chat_app_android.zip?dl=1','https://www.dropbox.com/s/n7mt5o1co3xcbkd/tictactoe_android.zip?dl=1','https://www.dropbox.com/s/0mxf9pwgljzgcyz/ilNotePad.zip?dl=1','https://www.dropbox.com/s/ozq5am2iisvn6bh/Password%20Strength%20Checker%20%28GUI%29.zip?dl=1'];

function check_login_status()
{
	if(u==null)
	{
		alert("You are currently logged out.\n\nLogin to your account to continuue.");
		window.open("login.html?" + location.href,"_self");
	}
	else
	{
		document.getElementById('welcome').innerHTML="Welcome "+u+" ";
		document.getElementById('welcome').style.float="right";
	}
}

function show(wh)
{
	var items= document.getElementsByClassName('item');
	for(var i=0; i<items.length;i++)
	{
		items[i].style.display="none";
	}

	var itemsd = document.getElementsByClassName('itemd');
	itemsd[wh-1].style.display = "block";	
	
	var buttons = document.getElementsByClassName('atcbtn');
	var ins = window.localStorage.getItem(u);
	if(ins==null || ins=="[]")
	{
		var arr2= [];
	}
	else
	{
		var arr2 = JSON.parse(ins);
		for(var i=0;i<arr2.length;i++)
		{
			if(arr2[i]==(wh-1))
			{
				buttons[wh-1].value="Already Added to Cart";
				buttons[wh-1].disabled= true;
				buttons[wh-1].style.cursor="not-allowed";
				buttons[wh-1].style.opacity="0.5";
				break;
			}
		}
	}
}

function hide_all()
{
	var itemsd = document.getElementsByClassName('itemd');
	for(var i=0;i<itemsd.length;i++)
	{
		itemsd[i].style.display = "none";
	}

	var cartdiv = document.getElementsByClassName('cart');
	cartdiv[0].style.display = "none";
}

function go_back()
{
	hide_all();
	document.getElementById('box1').style.justifyContent="space-evenly";
	var items= document.getElementsByClassName('item');
	if(items[0].style.display=="none")
	{
		for(var i=0; i<items.length;i++)
		{
			items[i].style.display="block";
		}
	}
	else
	{
		window.open("html.html","_self");
	}		
}

function atc(no)
{
	var buttons = document.getElementsByClassName('atcbtn');
	buttons[no].value="Added Successfully";
	buttons[no].disabled= true;
	buttons[no].style.cursor="not-allowed";
	buttons[no].style.opacity="0.5";
	var temp = window.localStorage.getItem(u);
	if(temp==null)
	{
		var arr2=[];
	}
	else
	{
		var arr2 = JSON.parse(temp);
	}
	arr2.push(no);
        window.localStorage.setItem(u,JSON.stringify(arr2));
}

function delete_row(bn)
{
	var buttons = document.getElementsByClassName('atcbtn');
	var t = window.localStorage.getItem(u);
	var arr2 = JSON.parse(t);
	
	buttons[arr2[bn]].value="Add to Cart";
	buttons[arr2[bn]].enabled= true;
	buttons[arr2[bn]].disabled= false;
	buttons[arr2[bn]].style.cursor= "pointer";
	buttons[arr2[bn]].style.opacity= "1.0";

	arr2.splice(bn,1);
	window.localStorage.setItem(u,JSON.stringify(arr2));
	show_cart();
}

function show_cart()
{
	hide_all();
	var items= document.getElementsByClassName('item');
	for(var i=0; i<items.length;i++)
	{
		items[i].style.display="none";
	}
	var cartdiv = document.getElementsByClassName('cart');
	cartdiv[0].style.display = "block";
	
	document.getElementById('box1').style.justifyContent="center";
	
	var table= document.getElementById('ctab');
	var ins = window.localStorage.getItem(u);
	var getbtn = document.getElementsByClassName('getbtn');

	if(ins==null || ins=="[]")
	{
		table.innerHTML = "<table class='ctab'><tr><th>Sr. No.</th><th>Name</th></tr><tr><td colspan='2' style='text-align:center;'>YOUR CART IS EMPTY</td></tr></table>";

		getbtn[0].disabled= true;
		getbtn[0].style.cursor="not-allowed";
		getbtn[0].style.opacity="0.5";
	}
	else
	{	
		getbtn[0].disabled= false;
		getbtn[0].enabled= true;
		getbtn[0].style.cursor="pointer";
		getbtn[0].style.opacity="1.0";

		var arr2 = JSON.parse(ins);		
		var HTML = "<table class='ctab'><tr><th>Sr. No.</th><th>Name</th><th>&nbsp;</th></tr>";
		for(var i=0; i<arr2.length;i++)
		{
			HTML += "<tr><td>"+(i+1)+"</td><td>"+arr[arr2[i]]+"</td><td style='text-align:center;'><input type='button' class='delbtn' onclick='javascript:delete_row("+i+");' value='X'></td></tr>";
		}
		HTML += "</table>";
	
		table.innerHTML = HTML;
	}				
}

function openlink(a)
{
	window.open(links[a],"_self");
}

function get_links()
{
	var ins = window.localStorage.getItem(u);
	var arr3 = JSON.parse(ins);
	window.localStorage.removeItem(u);
	show_cart();
	var linkd = document.getElementById('link');
	var HTML=linkd.innerHTML;
	for(var i=0; i<arr3.length;i++)
	{
		HTML += "<input type='button' class='linkbtn' value='Link for "+arr[arr3[i]]+"' onclick='javascript:openlink("+arr3[i]+")'><br>";
	}
	linkd.innerHTML = HTML;
} 