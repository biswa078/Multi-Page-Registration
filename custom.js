
  function validateForm1()
  {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob=document.getElementById('dob').value;
    var email=document.getElementById('email').value;
    var ffname = document.getElementById('ffname').value;
    var flname = document.getElementById('flname').value;
    var mfname = document.getElementById('mfname').value;
    var mlname = document.getElementById('mlname').value;
    var nationality = document.getElementById('nationality').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var telh=document.getElementById('telh').value;
    var telm=document.getElementById('telm').value;
    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");
    localStorage.setItem("flag","true");
    if(fname == null || fname == "")
    {
      alert("First Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(lname == null || lname == "")
    {
      alert("Last Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(dob == null || dob == "")
    {
      alert("Date of Birth should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(email == null || email == ""||atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
      alert("Invalid email id");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(ffname == null || flname == "")
    {
      alert("Father's Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(mfname == null || mlname == "")
    {
      alert("Mother's Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(nationality == null || nationality == "")
    {
      alert("Nationality should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(address == null || address == "" || city == null || city == "" || country == null || country == "")
    {
      alert("Address should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(telh == null || telh == "" || telh.length !=10 || isNaN(telh))
    {
      alert("Invalid Telephone Number");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(telm == null || telm == "" || telm.length !=10 || isNaN(telm) )
    {
      alert("Invalid Mobile Number");
      localStorage.setItem("flag","false");
      return false;
    }
    else
    {
        localStorage.setItem("flag","true");  
    }
  }


  function validateForm2()
  {
    
    var hsci=document.getElementById('hsci').value;
    var hscb=document.getElementById('hscb').value;
    var hscp=document.getElementById('hscp').value;
    var ssci=document.getElementById('ssci').value;
    var sscb=document.getElementById('sscb').value;
    var sscp=document.getElementById('sscp').value;
    var cp=document.getElementById('cp').value;
    var cin=document.getElementById('cin').value;
    var op=document.getElementById('op').value;
     
    localStorage.setItem("flag","true");
    
    if(hsci == null || hsci == "" )
    {
      alert("HSC Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hscb == null || hscb == "" )
    {
      alert("HSC Board should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hscp == null || hscp == "" || isNaN(hscp))
    {
      alert("HSC Percentage should not be blank or not numeric");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(ssci == null || ssci == "" )
    {
      alert("SSC Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(sscb == null || sscb == "" )
    {
      alert("SSC Board should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(sscp == null || sscp == "" || isNaN(sscp) )
    {
      alert("SSC Percentage should not be blank or not numeric");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(cp == null || cp == "" )
    {
      alert("Currently Persuing should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(cin == null || cin == "" )
    {
      alert("Current Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(op == null || op == ""||isNaN(op) )
    {
      alert("Overall Percentage should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(op == null || op == ""||isNaN(op) )
    {
      alert("Overall Percentage should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else{
        localStorage.setItem("flag","true");
    }
   
  }

  function validateForm()
  {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob=document.getElementById('dob').value;
    var email=document.getElementById('email').value;
    var ffname = document.getElementById('ffname').value;
    var flname = document.getElementById('flname').value;
    var mfname = document.getElementById('mfname').value;
    var mlname = document.getElementById('mlname').value;
    var nationality = document.getElementById('nationality').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var telh=document.getElementById('telh').value;
    var telm=document.getElementById('telm').value;
    var hsci=document.getElementById('hsci').value;
    var hscb=document.getElementById('hscb').value;
    var hscp=document.getElementById('hscp').value;
    var ssci=document.getElementById('ssci').value;
    var sscb=document.getElementById('sscb').value;
    var sscp=document.getElementById('sscp').value;
    var cp=document.getElementById('cp').value;
    var cin=document.getElementById('cin').value;
    var op=document.getElementById('op').value;
    var pp=document.getElementById('pp').value;
    var hsc=document.getElementById('hsc').value;
    var ssc=document.getElementById('ssc').value;
    var all=document.getElementById('all').value;
    

    var atposition=email.indexOf("@");  
    var dotposition=email.lastIndexOf(".");  
    localStorage.setItem("flag","true");
    if(fname == null || fname == "")
    {
      alert("First Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(lname == null || lname == "")
    {
      alert("Last Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(dob == null || dob == "")
    {
      alert("Date of Birth should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(email == null || email == ""||atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
    {
      alert("Invalid email id");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(ffname == null || flname == "")
    {
      alert("Father's Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(mfname == null || mlname == "")
    {
      alert("Mother's Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(nationality == null || nationality == "")
    {
      alert("Nationality should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(address == null || address == "" || city == null || city == "" || country == null || country == "")
    {
      alert("Address should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(telh == null || telh == "" || telh.length !=10 || isNaN(telh))
    {
      alert("Invalid Telephone Number");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(telm == null || telm == "" || telm.length !=10 || isNaN(telm) )
    {
      alert("Invalid Mobile Number");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hsci == null || hsci == "" )
    {
      alert("HSC Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hscb == null || hscb == "" )
    {
      alert("HSC Board should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hscp == null || hscp == "" || isNaN(hscp))
    {
      alert("HSC Percentage should not be blank or not numeric");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(ssci == null || ssci == "" )
    {
      alert("SSC Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(sscb == null || sscb == "" )
    {
      alert("SSC Board should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(sscp == null || sscp == "" || isNaN(sscp) )
    {
      alert("SSC Percentage should not be blank or not numeric");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(cp == null || cp == "" )
    {
      alert("Currently Persuing should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(cin == null || cin == "" )
    {
      alert("Current Institute Name should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(op == null || op == ""||isNaN(op) )
    {
      alert("Overall Percentage should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(op == null || op == ""||isNaN(op) )
    {
      alert("Overall Percentage should not be blank");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(pp == null || pp == "")
    {
      alert("Passport photo not uploaded");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(hsc == null || hsc == "")
    {
      alert("HSC Marksheet not uploaded");
      localStorage.setItem("flag","false");
      return false;
    }
    else if(ssc == null || ssc == "")
    {
        alert("SSC Marksheet not uploaded");
        localStorage.setItem("flag","false");
      return false;
    }
    else if(all == null || all == "")
    {
        alert("All Marksheet not uploaded");
        localStorage.setItem("flag","false");
      return false;
    }
    else{
        localStorage.setItem("flag","true");
       
    }
    
    
    
   
  }
  function saveData()
  {
    validateForm();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var dob=document.getElementById('dob').value;
    var email=document.getElementById('email').value;
    var ffname = document.getElementById('ffname').value;
    var flname = document.getElementById('flname').value;
    var mfname = document.getElementById('mfname').value;
    var mlname = document.getElementById('mlname').value;
    var nationality = document.getElementById('nationality').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var country=document.getElementById('country').value;
    var telh=document.getElementById('telh').value;
    var telm=document.getElementById('telm').value;
    var hsci=document.getElementById('hsci').value;
    var hscb=document.getElementById('hscb').value;
    var hscp=document.getElementById('hscp').value;
    var ssci=document.getElementById('ssci').value;
    var sscb=document.getElementById('sscb').value;
    var sscp=document.getElementById('sscp').value;
    var cp=document.getElementById('cp').value;
    var cin=document.getElementById('cin').value;
    var op=document.getElementById('op').value;
    var cb=document.getElementById('cb').value;

    if(document.getElementById('male').checked)
    var gen=document.getElementById('male').value;
    if(document.getElementById('female').checked)
    var gen=document.getElementById('female').value;
    if(localStorage.getItem("flag") == "true")
    {
        window.localStorage.setItem('fname',fname);
        window.localStorage.setItem('lname',lname);
        window.localStorage.setItem('dob',dob);
        window.localStorage.setItem('email',email);
        window.localStorage.setItem('ffname',ffname);
        window.localStorage.setItem('flname',flname);
        window.localStorage.setItem('mfame',mfname);
        window.localStorage.setItem('mlname',mlname);
        window.localStorage.setItem('gender',gen);
        window.localStorage.setItem('nationality',nationality);
        window.localStorage.setItem('address',address);
        window.localStorage.setItem('city',city);
        window.localStorage.setItem('country',country);
        window.localStorage.setItem('telh',telh);
        window.localStorage.setItem('telm',telm);
        window.localStorage.setItem('hsci',hsci);
        window.localStorage.setItem('hscb',hscb);
        window.localStorage.setItem('hscp',hscp);
        window.localStorage.setItem('ssci',ssci);
        window.localStorage.setItem('sscb',sscb);
        window.localStorage.setItem('sscp',sscp);
        window.localStorage.setItem('cp',cp);
        window.localStorage.setItem('cin',cin);
        window.localStorage.setItem('op',op);
        window.localStorage.setItem('cb',cb);
        alert("Saved Data");
    }
    
  }
