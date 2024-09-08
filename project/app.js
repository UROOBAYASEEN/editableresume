let namee=document.getElementById("myname");
let dagree=document.getElementById("mydegree" );
let gender=document.getElementById("mygender");
let emale=document.getElementById("myemale" );
let dob=document.getElementById("mydob");
let nationality=document.getElementById("mynationaloty" );
let job=document.getElementById("myjob" );
let exp=document.getElementById("myexpriance");
let riligion=document.getElementById("myreligion"); // form  input
let button=document.getElementById("button")
let resume=document.getElementById("mainone")
let editbyn=document.getElementById("edit")
let editdgew=document.getElementById("editdgre")

let edigender=document.getElementById("edgender")

let ednation=document.getElementById("ednation")
let eddob=document.getElementById("eddob")
let edemale=document.getElementById("edemale")
let edjob=document.getElementById("edjob")
let edxp=document.getElementById("edxp")
let ediRELO=document.getElementById("EDRELI")



let myname=document.getElementById("namee")
let mydagree=document.getElementById("degree")
let mygender=document.getElementById("gender")
let myemal=document.getElementById("email")
let mydob=document.getElementById("dob")
let mynationality=document.getElementById("nationality")
let myjob=document.getElementById("job")
let myexp=document.getElementById("exp")
let myreligion=document.getElementById("religion")  // resume input
let profilepic=document.getElementById("profile_pic")
let inputfile=document.getElementById("input-file")


inputfile.onchange=function(){
    profilepic.src=URL.createObjectURL(inputfile.files[0])
}
button.addEventListener('click',()=>{
    alert("congratulation resume generate")
  
    
    
    
    let realname=namee.value
    let realdegree=dagree.value
    let reallgender=gender.value
    let realemail=emale.value
    let realldob=dob.value
    let realnationality=nationality.value
    let realjob=job.value
    let realexp=exp.value
    let realreligion=riligion.value

    myname.textContent=`NAME: ${realname}`
    mydagree.textContent=`DEGREE: ${realdegree}`
    mygender.textContent=`GENDER  ${reallgender}`
    myemal.textContent=`EMALE:  ${realemail}`
    mydob.textContent=`DATE OF BIRTH: ${realldob}`
    mynationality.textContent=`NATIONALITY: ${realnationality}`
    myjob.textContent=`JOB:  ${realjob}`
    myexp.textContent=`EXPERIANCE: ${realexp}`
    myreligion.textContent=`RELIGION: ${realreligion}`



})

editbyn.addEventListener("click",()=>{
  let newname=  prompt("ENTER YOUR NAME ")
  myname.textContent=`NAME: ${newname}`
})


editdgew.addEventListener("click",()=>{
    let newname=  prompt("ENTER YOUR DAGREE")
    mydagree.textContent=`DEGREE: ${newname}`
  })
  

  edigender.addEventListener("click",()=>{

    let newname=prompt("ENTER YOUR GENDER")
    mygender.textContent=`GENDER: ${newname}`
  })
  ednation.addEventListener("click",()=>{

    let newname=prompt('ENTER NATIONALITY')
    mynationality.textContent=`NATIONALITY: ${newname}`
  })

  
  eddob.addEventListener("click",()=>{

    let newname=prompt('ENTER DATE OF BIRTH')
    mydob.textContent=`DATE OF BIRTH ${newname}`
  })

  
  edemale.addEventListener("click",()=>{

    let newname=prompt('ENTER EMALE')
    myemal.textContent=`EMALE:${newname}`
  })

  
  
  edjob.addEventListener("click",()=>{

    let newname=prompt('ENTER JOB')
    myjob.textContent=`JOB:${newname}`
  })

  
  edxp.addEventListener("click",()=>{

    let newname=prompt('ENTER  EXPRINCE')
    myexp.textContent=`EXPERIANCE:${newname}`
  })

  ediRELO.addEventListener("click",()=>{

    let newname=prompt('ENTER RELIGION')
    myreligion.textContent=`RELIGION:${newname}`
  })
  

  document.getElementById('download_btn').addEventListener('click', function() {
    // Create the HTML content
    const htmlContent = `
       
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="app.css">
</head>
<body>
    <button id="download_btn">DOWNLOAD CV</button>
    <div class="form">
    
        <h1>CREATE RESUME</h1>
      
        
       <input type="text" id="myname" placeholder="Enter your name" ><br>
        <input type="text" id="mydegree" placeholder="ENTER YOUR DEGREE"><br>
        <input type="text" id="mygender" placeholder="Enter your GENDER"><br>
        <input type="text" id="myemale" placeholder="Enter your EMILE"><br>
        <input type="text" id="mydob" placeholder="Enter your DATE OF BIRTH"><br>
        <input type="text" id="mynationaloty" placeholder="Enter your NATIONALITY"><br>
        <input type="text" id="myjob" placeholder="Enter your JOB"><br>
        <input type="text" id="myexpriance" placeholder="Enter your EXPERIENCE"><br>
        <input type="text" id="myreligion" placeholder="Enter your RELIGION"><br>
        <button id="button">CREATE RESUME</button>



    </div>
    <div class="main" id="mainone"><h1>
        MY RESUME
    </h1>
    <div class="folder">
        <div class="img"><img src="img.jpg" id="profile_pic">
            <label for="input-file">UPDATE IMAGE</label>
            <input type="file" accept="image/jpg  image/png img/jpeg" id="input-file">
            
        </div>
        <div class="para">   
            <p id="namee">name:hania<button id="edit">EDIT</button></p>
            
            <p id="degree">degree:MASTER<button id="editdgre">EDIT</button></p>
            
            <p id="gender">GENDER:MALE<button id="edgender">EDIT</button></p>
            
            <p id="nationality">NATIONALITY:PAKISTANI<button id="ednation">EDIT</button></p>
            
            
            <p id="dob">DATE OF BIRTH:23-5-2003<button id="eddob">EDIT</button></p>
            
            
            <p id="email">EMALE:AREENAJDF@GMAIL.COM<button id="edemale">EDIT</button></p>
            
            
            <p id="job">JOB:DIALYSIS TENCHNICIAN<button id="edjob">EDIT</button></p>
            
            
            <p id="exp">EXPERIENCE:2 YEAR<button id="edxp">EDIT</button></p>
            
            
            <p id="religion">RELIGIAN:ISLAM<button id="EDRELI">EDIT</button></p>
            </div>
    </div>
    </div>
  
    <button>
        EDITING
    </button>

    
    <script src="app.js"></script>
</body>
</html>
    `;


    const blob = new Blob([htmlContent], { type: 'text/html' });

    const link = document.createElement('a');


    link.href = URL.createObjectURL(blob);


    link.download = 'generated.html';

    
    document.body.appendChild(link);


    link.click();

    
    document.body.removeChild(link);
});



