document.getElementById('BodyFatForm').addEventListener('submit', CalculateBodyFatPercentage);
        
        function CalculateBodyFatPercentage(e){
            //Waist + Hip - Neck = Body Fat
            e.preventDefault();
            var neck=document.getElementById("UserNeck").value;
            console.log(neck);
            var waist=document.getElementById("UserWaist").value;
            console.log(waist);
            var height=document.getElementById("UserHeight").value;
            console.log(height);
            var BodyFat= parseInt(waist)+ parseInt(height) - parseInt(neck);
            console.log(BodyFat)
            document.getElementById("GiveUserBodyFat").innerHTML="Here is your body fat: " + String(BodyFat);
            document.getElementById('BodyFatForm').reset();
        }

$('#BodyFatForm input[type=radio]').change(function(){
            if (document.getElementById("other").checked===true){
                document.getElementById("specifyother").style.display="block";
            }
            else{
                document.getElementById("specifyother").style.display="none";
            }
        })