
req = ""
let query = ""
let results = ""
let pw = "Alakam11!"
let netID = "mms96354"


btnCustomers.onclick=function(){
  query = "SELECT * FROM customer
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=mms96354&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage2.textContent = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtTypeNames.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage2.textContent = "Error code: " + req.status
}
}
