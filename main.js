function take_snapshot(){
    document.getElementById("go_button").style.visibility = "hidden";
    document.getElementById("step_go").style.visibility = " visible";
}


function check(){
    document.getElementById("step_go").style.visibility = "hidden";
    document.getElementById("back_button").style.visibility = " visible";
    document.getElementById("Object_box").style.visibility = " visible";
    document.getElementById("Accuracy_box").style.visibility = " visible";
    document.getElementById("result_object_name").innerHTML = "";
    document.getElementById("result_object_Accuracy").innerHTML = "";
}

function back(){
    document.getElementById("go_button").style.visibility = "visible";
    document.getElementById("back_button").style.visibility = "hidden";
    document.getElementById("Object_box").style.visibility = "hidden";
    document.getElementById("Accuracy_box").style.visibility = "hidden";
    document.getElementById("result_object_name").innerHTML = "";
    document.getElementById("result_object_Accuracy").innerHTML = "";
}