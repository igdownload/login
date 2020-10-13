var cpt=0;
if (localStorage.getItem("pwd") === null) 
{
	var usr = ["admin"];
	var pwd = ["admin001"];
	var strData=["default"];
	var secPhr=["admin"];
	window.localStorage.setItem('usr', JSON.stringify(usr));
	window.localStorage.setItem('pwd', JSON.stringify(pwd));
	window.localStorage.setItem('imgData', JSON.stringify(strData));
	window.localStorage.setItem('sph', JSON.stringify(secPhr));
}

if(localStorage.getItem("sph") === null) 
{
	var secPhr=["admin"];
	window.localStorage.setItem('sph', JSON.stringify(secPhr));
}

if(localStorage.getItem("imgData") === null) 
{
	var strData=["default"];
	window.localStorage.setItem('imgData', JSON.stringify(strData));
}

	var i,flag=0,flag1=0,j,flag2=0;
	var u = window.localStorage.getItem('name');	
	var dataImage = localStorage.getItem('imgData1');	

function get_news()
{
	let news = ["The feature of sending image in Chat-Application has been implemented","What's New Feature is now available","Tutorials feature will be available soon","Exit button has been removed due to security reasons","New Buttons to go to Shop and Tutorials section has been enabled post-login"];
	let links = ["https://igdownload.github.io/chat","","","",""];
	
	let str="";

	str += "<p class='heading'>What's New ? </p>";

	for(let itr=0; itr < news.length; itr++)
	{
		if(links[itr]!="")
		{
			str += "<p class='news'>"+(itr+1)+". " + "<a href='"+links[itr]+"' target='_blank'>"+news[itr]+"</a></p>";
		}
		else
		{
			str += "<p class='news'>"+(itr+1)+". "+news[itr]+"</p>"; 
		}
	}

	document.getElementById('newstext').innerHTML = str;
}

function whatsnew()
{
	get_news();
	document.getElementById("newsdiv").style.display="block";
	window.onclick = function(event){
 		if (document.getElementById('newstext').contains(event.target)){
  		} else{
			document.getElementById("newsdiv").style.display="none";
  		}		
	};
}

function generateCaptcha()
{
	var canvas = document.getElementById("cptcha");
	var ctx = canvas.getContext("2d");
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.beginPath();
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	ctx.font = "70px Comic Sans MS";
	ctx.fillStyle = "white";
	cpt = 0;
	for(let i=1;i<=6;i+=1)
	{
		var a = Math.floor(1 + Math.random() * 9);
		var p = Math.random() * 0.2;
		cpt = cpt*10 + a;
		ctx.setTransform(1, p, -p, 1, 0, 0);
		ctx.fillText(a.toString(), 20+(i-1)*40, 2*canvas.height/3);
	}
	// console.log(cpt);
	ctx.strokeStyle = "#FF0000";
	ctx.lineWidth = 8;
	ctx.moveTo(0, canvas.height/2);
	ctx.lineTo(canvas.width, canvas.height/2);
	ctx.stroke();
}

window.onload = function() {
	whatsnew();
	generateCaptcha();
};

	

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function validate()
{
	var cptuin = document.getElementById('cptuserin').value;
	if(cptuin!=cpt)
	{
		alert("INVALID CAPTCHA. RETRY.");
		generateCaptcha();
		document.getElementById('cptuserin').value = "";
		return;
	}
	var x = document.getElementById("un").value;
	var y = document.getElementById("pwd").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	flag=0;
	for(i=0;i<usr.length;i++)
	{
		if(x == usr[i] && y == pwd[i])
		{
			flag=1;
			u=x;
			if(strData[i]!=null && strData[i]!="data:,")
			{
				var z = strData[i];
			}
			else
			{
				var z = "default";
			}
			window.localStorage.setItem('name',u);
			window.localStorage.setItem('imgData1',z);
			alert("LOGIN SUCCESSFUL");
			var link_query_url = location.search;
			link_query_url = link_query_url.slice(1);
			console.log(link_query_url);
			if(link_query_url=="")
			{
				window.open("html.html","_self");
			} 
			else
			{
				window.open(link_query_url,"_self");	
			}
			break;
		}
	}
	
	if(flag==0)
	{
		alert("INVALID CREDENTIALS. RETRY.");
	}

	document.getElementById("login").reset();
}

function forget_pass()
{
	alert("Forgot Password");
	window.open("forget.html","_self");
}

function readURL(input) 
{
    document.getElementById("dispimg").style.display = "block";
    document.getElementById("dispimg").hidden = "False";
    document.getElementById("usrimg").hidden = "True";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('dispimg').src =  e.target.result;
	    document.getElementById('usrimg').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL1(input) 
{
    document.getElementById("usrimg1").style.display = "block";
    document.getElementById("usrimg2").hidden = "True";

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
	    document.getElementById('usrimg1').src =  e.target.result;
	    document.getElementById('usrimg2').src =  e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function create_ac()
{
	var x = document.getElementById("un").value;
	var y = document.getElementById("pwd").value;
	var z = document.getElementById("sp").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));
	flag=0;
	alert("Please Ensure You have entered the username and password above.");
	for(i=0;i<usr.length;i++)
	{
		if(x == usr[i])
		{
			alert("Username Already Exists. Try Again.");
			flag=1;
			break;
		}
	}
	
	if(flag==0)
	{
		usr[usr.length]=x;
		pwd[pwd.length]=y;
		secPhr[pwd.length-1]=z;
		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		var bannerImage = document.getElementById('usrimg');
		var imgData = getBase64Image(bannerImage);
		strData[usr.length-1]=imgData;
		localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Added Successfully");
		flag=0;
		window.open("login.html","_self");
	}
}

function k_p()
{	
	var z = document.getElementById("unf").value;
	var s = document.getElementById("scp").value;
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));
	flag=0;
	alert("Please Ensure You have entered the registered username and your security Phrase.");
	for(i=0;i<usr.length;i++)
	{
		if(secPhr[i]==null)
		{
			secPhr[i] = "admin";
		}
		if(z == usr[i] && s==secPhr[i])
		{
			alert("Username Found.");
			flag=1;
			break;
		}
	}
	
	if(flag==0)
	{
		alert("Information not matched. Try Again.");
		document.getElementById("forget").reset();
	}
	else
	{
		var n_p= document.getElementById("np").value;
		pwd[i]=n_p;
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		alert("Password Changed Successfully.\nThank you. Kindly login to Continue.");
		window.open("login.html","_self");
	}
}



function logout()
{
	window.sessionStorage.removeItem('name');
	window.localStorage.removeItem('name');
	window.localStorage.removeItem('imgData1');
	window.open("login.html","_self");
}

function check_login()
{
	if(u!=null)
	{
		window.open("html.html","_self");
	}
}

function logged_name()
{
	document.getElementById("welcome").innerHTML = "Welcome " + u + " ";
	if(u==null)
	{
		document.getElementById("ht").innerHTML = "<span style='display:block; text-align:center; font-size: 50; color:blue;'>You are logged out. Login again to continue.</span>";
	}
	if(dataImage!="default")
	{
		var userImg = document.getElementById('fimg');
		userImg.src = "data:image/png;base64," + dataImage;
	}
}

function modify_p()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	for(i=0;i<usr.length;i++)
	{
		if(u==usr[i])
		{
			break;
		}
	}

	var t=document.getElementById('unp').value;
	var v=document.getElementById('pwdp').value;
	var w=document.getElementById('spp').value;
		
	for(j=0;j<usr.length;j++)
	{
		if(t==usr[j] && t!=u)
		{
			flag2=1;
			break;
		}
	}
	
	if(flag2==0)
	{
		usr[i]=t;
		pwd[i]=v;
		secPhr[i]=w;
	
		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		var bannerImage = document.getElementById('usrimg2');
		var imgData = getBase64Image(bannerImage);
		strData[i]=imgData;
		localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Changes Saved Successfully.\nKindly login again.");
		logout();
	}
	else
	{
		alert("Username Already Exist.\n\nNo changes Saved.");
		window.open("modify.html","_self");
	}
}

function get_data()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	if(u==null)
	{
		window.open("login.html?modify.html","_self");
	}
	
	for(i=0;i<usr.length;i++)
	{
		if(secPhr[i]==null)
		{
			secPhr[i] = "admin";
		}
		
		if(u==usr[i])
		{
			break;
		}
	}

	var v = pwd[i];
	var w = secPhr[i];
	
	document.getElementById('unp').value=u;
	document.getElementById('pwdp').value=v;
	document.getElementById('spp').value=w;
}	

function myfun1()
{
	document.getElementById("dlgo").style.display="block";
	window.onclick = function(event){
 		if (document.getElementsByClassName('dlgbox')[0].contains(event.target)){
  		} else{
			document.getElementById("dlgo").style.display="none";
  		}		
	};
}		

function myfun2()
{
	document.getElementById("dlg").style.display="none";
	setTimeout(function(){
	var email = prompt("Enter your E-Mail Id: ","");
	if(email!=null && email!="")
		{
			var query = prompt("Enter feedback/issue: ","");
			if(query!=null && query!="")
				{
					if(confirm("Send Feedback/Issue."))
						{
							alert("Unable to connect to server.");
							alert("\n\nContact Personally or whatsapp me.\n\nI can't setup my own remote server yet.\n\nThank you for trying.\n\n");
						}
					else
						{
							alert("You cancelled the process. Retry if you really want to contact me.");
						}
				}
			else
				{
					alert("You can't proceed without any issue/feedback.\n\nPlease Retry if you really want to contact me.");
				}
		}
	else
		{
			alert("You can't proceed without E-mail ID.\n\nPlease Retry if you really want to contact me.");
		}
	document.getElementById("dlgo").style.display="none";
	document.getElementById("dlg").style.display="block";
	},100);
}

function delete_acc()
{
	var usr = JSON.parse(window.localStorage.getItem('usr'));
	var pwd = JSON.parse(window.localStorage.getItem('pwd'));
	var strData = JSON.parse(window.localStorage.getItem('imgData'));
	var secPhr = JSON.parse(window.localStorage.getItem('sph'));

	for(i=0;i<usr.length;i++)
	{
		if(u==usr[i])
		{
			break;
		}
	}

	if(confirm("Are you sure you want to delete your Account?"))
	{
		usr.splice(i,1);		
		pwd.splice(i,1);
		strData.splice(i,1);
		secPhr.splice(i,1);		

		window.localStorage.setItem('usr', JSON.stringify(usr));
		window.localStorage.setItem('pwd', JSON.stringify(pwd));
		window.localStorage.setItem('sph', JSON.stringify(secPhr));
		window.localStorage.setItem("imgData", JSON.stringify(strData));
		alert("Account Deleted Successfully.\nKindly use this software again.");
		logout();
	}
	else
	{
		alert("You choose to keep your account intact. Your account is safe.");
	}
}

function delete_all()
{
	if(confirm("Are you sure you want to delete all your Accounts from this system?"))
	{		
		window.localStorage.removeItem('usr');
		window.localStorage.removeItem('pwd');
		window.localStorage.removeItem('sph');
		window.localStorage.removeItem('imgData');
		alert("All Accounts Deleted Successfully.\nKindly use this software again.");
		logout();
		window.open("login.html","_self");
		window.close();
	}
	else
	{
		alert("You choose to keep your accounts intact. Your all accounts are safe.");
	}	
}

function proc()
{
	alert("For deleting a Particular you need to login.\n\nProcess of deleting a single account is as follows:-\n\n\n   LOGIN --> MY PROFILE --> DELETE YOUR ACCOUNT --> CONFIRM");
}
