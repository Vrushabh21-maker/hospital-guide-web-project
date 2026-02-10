const hospitals = [
    {
      name: "Sassoon General Hospital",
      city: "pune",
      opd: {
        burning: "Medicine OPD",
        neuro: "Neurology OPD",
        stomach: "Gastro OPD",
        skin: "Dermatology OPD",
        chest: "Cardiology OPD",
        paralysis: "Neurology OPD"
      }
    },
    {
      name: "Ruby Hall Govt OPD",
      city: "pune",
      opd: {
        burning: "Medicine OPD",
        stomach: "Gastro OPD",
        skin: "Skin OPD"
      }
    },
    {
      name: "JJ Hospital",
      city: "mumbai",
      opd: {
        burning: "Medicine OPD",
        neuro: "Neurology OPD",
        chest: "Cardiology OPD"
      }
    }
  ];
  
  function findOPD() {
    const symptom = document.getElementById("symptom").value;
    const city = document.getElementById("city").value;
    const result = document.getElementById("result");
  
    if (!symptom || !city) {
      result.innerHTML = "❗ Please select problem and city";
      return;
    }



     // Emergency Check
     if (["chest", "paralysis", "neuro"].includes(symptom)) {
        result.innerHTML = `
          <div class="emergency-card">
            <h3>🚨 EMERGENCY: GO TO CASUALTY</h3>
            <p>This condition requires immediate attention. Go to the nearest 24/7 Government Emergency Ward.</p>
          </div>`;
        return;
      }``


    let foundHospitals=[];

      for( let i=0; i<hospitals.length; i++){

        if (hospitals[i].city=== city && hospitals[i].opd[symptom]){
         
            foundHospitals.push(hospitals[i]);

            console.log("found hospitals is" +foundHospitals);

        }
    }

    if (foundHospitals.length>0){
     


       let foundHospital= foundHospitals[0];

       console.log("found hospital in if condition is" +foundHospital);

            result.innerHTML = `
            <div class="info-card">
         
              <p><b>Name:</b> ${foundHospital.name}</p>
              <p><b>Department:</b> ${foundHospital.opd[symptom]}</p>
          
              <hr>
             <p><small>📌 Bring: ID proof, previous reports, prescription (optional)</small></p>
            </div>`;
        } else {
          result.innerHTML = `<p>🚧 No specific data for this combination yet.</p>`;
        }

        }

      


  
   
  
//     // Search Logic
//     if(hospitals[city] && hospitals[city][opd])
//   {
//       result.innerHTML = `
//         <div class="info-card">
//           <h3>📍 ${}</h3>
//           <p><b>Department:</b> ${info.dept}</p>
//           <p><b>Days:</b> ${info.days}</p>
//           <p><b>Time:</b> ${info.time}</p>
//           <hr>
//           <p><small>📌 Bring: ${info.docs.join(", ")}</small></p>
//         </div>`;
//     } else {
//       result.innerHTML = `<p>🚧 No specific data for this combination yet.</p>`;
//     }
//   }