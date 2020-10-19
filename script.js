
_choice="";


function CheckInput(val){
    
    if(val==1){
        var first=parseInt(document.getElementById("number1").value);
        if (!isNaN(first))//whether first isstring or null
            document.getElementById("alertError").innerHTML ="";
        else
            document.getElementById("alertError").innerHTML ="Số thứ nhất không hợp lệ";
    }
    else if(val==2)
    { 
        var second=parseInt(document.getElementById("number2").value);
        if (!isNaN(second))//whether second is string or null
            document.getElementById("alertError").innerHTML ="";
        else
            document.getElementById("alertError").innerHTML ="Số thứ hai không hợp lệ";
            
    }
}


function SetSelection(type)
{
    _choice="";
    _choice=type;
}
function GetSelection()
{
    return _choice;
}

function SetResult(str)
{
    document.getElementById("result").value =str;
}
function Calculate()
{
    var str1=document.getElementById("number1").value;
    var str2=document.getElementById("number2").value;
    
    var flag=0;

    if(str1=="" || str2=="")
        flag=1;
    
    var val1=parseInt(str1);
    var val2=parseInt(str2);
    var result="";
    
    if(flag){
        document.getElementById("alertError").innerHTML="Bạn chưa nhập đủ hai số";
        SetResult("");
    }
    else
    {
        switch (GetSelection()) {
            case "add":
                result=val1+val2;
                break;
            case "substract":
                result=val1-val2;
                break;
            case "multiply":
                result=val1*val2;
                break;
            case "division":
                result=val1/val2;
                break;
            default:
                result="";
                document.getElementById("alertError").innerHTML="Bạn chưa chọn phép tính";
                
                break;
        }
        SetResult(result);
    }    
    switch (GetSelection()) {
            case "add":
                result=val1+val2;
                break;
            case "substract":
                result=val1-val2;
                break;
            case "multiply":
                result=val1*val2;
                break;
            case "division":
                result=val1/val2;
                break;
            default:
                result="";
                document.getElementById("alertError").innerHTML="Bạn chưa chọn phép tính";
                SetResult(result);
                break;
        }        
}