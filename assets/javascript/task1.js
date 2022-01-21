

        function showbutt() {

            var button1 = document.getElementById("button")
            console.log(button1.style.visibility)
            

            if (button1.style.visibility == "hidden") {
                
                button1.style.visibility = "visible";

            }
            else if (button1.style.visibility == "visible") {
                button1.style.visibility = "hidden";

            }



        }
        function hideimg() {
            var img = document.getElementById("inage")

            if (img.style.visibility == "visible") {
                img.style.visibility = "hidden"
            }
            else if (img.style.visibility == "hidden") {
                img.style.visibility = "visible"
            }
        }

        
