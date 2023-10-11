 type="text/javascript">
function per(percentage)
{
    var grd;
    if(percentage>=80){grd="A+";}
else
if(percentage>=72){grd="A";}
else
if(percentage>=65){grd="B+";}
else
if(percentage>=58){grd="B";}
else
if(percentage>=52){grd="C+";}
else
if(percentage>=45){grd="C";}
return grd;
}
function show()
{
var name=form1.t1.value;
var v=form2.t2.value;
var m3=form3.t3.value;
var ds=form4.t4.value;
var coa=form5.t5.value;
var dsa=form6.t6.value;
var dsl=form7.t7.value;
var dsal=form8.t8.value;
var ind=form9.t9.value;
if(v>=40)
alert("Congratulations! you are passed");
else
alert("you are failed");
document.write("<h1>SGPA Calculator by Narayan Ghanwat</h1><table border=2 bgcolor=cyan><tr><th bgcolor=cyan><h1>Name    </h1> </th> <th><h1>Average percentage</h1></th><th><h1>Grade</h1></th></tr><tr><td>"
+name+"</td><td>"+v+"</td><td>"+m3+"</td></table><h1>Result details</h1><table border=7 bgcolor=cyan><tr><th bgcolor=cyan><h1>Subjects </h1> </th> <th><h1>Average marks</h1></th></tr><tr><td>Physics</td><td>"+v+"</td><tr><td>Chemistry</td><td>"+m3+"</td><tr><td>Biology</td><td>"+v+"</td><tr><td>Maths</td><td>"+v+"</td><tr><td>English</td><td>"+v+"</td><tr><td>Marathi/IT</td><td>"+v+"</td><tr><td>Total</td><td>"+v+"</td></table>");

}