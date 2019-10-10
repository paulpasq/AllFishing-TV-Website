function displaySites() {


var stu = new Array(
 "Jami Bailey"
,"David Bolles"
,"Christian Carvajal"
,"Dustin Chanthaseny"
,"Andrew Cicoria"
,"Katherine Clarke"
,"Brian Clarke"
,"Benjamin Combs"
,"Yash Dalsania"
,"Joseph Dufour"
,"Vincent Gianni"
,"Anhtoan Huynh"
,"Charles Knurek"
,"Justin Michaud"
,"Ahmed Mohamedzein"
,"John Paul Panebianco"
,"Paul Pasquarelli"
,"Michael Phang"
,"Joseph Quinn"
,"Dana Richards"
,"Devon Viens"
,"Lujin 'Sarah' Wang"
,"Sashalee Wickham"
);
stuLen = stu.length;


var pics = new Array(
 "img_avatar.png" // Jami Bailey
,"img_avatar.png" // David Bolles
,"img_avatar.png" // Christian Carvajal
,"img_avatar.png" // Dustin Chanthaseny
,"img_avatar.png" // Andrew Cicoria
,"img_avatar.png" // Katherine Clarke
,"img_avatar.png" // Brian Clarke
,"img_avatar.png" // Benjamin Combs
,"img_avatar.png" // Yash Dalsania
,"img_avatar.png" // Joseph Dufour
,"img_avatar.png" // Vincent Gianni
,"img_avatar.png" // Anhtoan Huynh
,"img_avatar.png" // Charles Knurek
,"img_avatar.png" // Justin Michaud
,"img_avatar.png" // Ahmed Mohamedzein
,"img_avatar.png" // John Paul Panebianco
,"img_avatar.png" // Paul Pasquarelli
,"img_avatar.png" // Michael Phang
,"img_avatar.png" // Joseph Quinn
,"img_avatar.png" // Dana Richards
,"img_avatar.png" // Devon Viens
,"img_avatar.png" // Lujin Wang
,"img_avatar.png" // Sashalee Wickham
);


mainDesc = "Main URL";
var main = new Array(
 "http://www.jamibailey.com/"            // Jami Bailey
,"http://www.cablefreedave.com"          // David Bolles
,"http://www.studiocarvajal.com"         // Christian Carvajal
,"http://zhs.hrc.mybluehost.me"          // Dustin Chanthaseny
,"http://www.andrewplace.net"            // Andrew Cicoria
,"http://www.crouton.biz"                // Katherine Clark
,"http://www.purgatoryy.com"             // Brian Clarke
,"http://www.bencombsart.com"            // Benjamin Combs
,"http://www.yashdalsania.com"           // Yash Dalsania
,"http://www.thejdufour.com"             // Joseph Dufour
,"http://www.gianniv.net"                // Vincent Gianni
,"http://anhtoanhuynh.com"               // Anhtoan Huynh
,"http://www.groundedatmosphere.com"     // Charles Knurek
,"http://www.justinworld24.net"          // Justin Michaud
,"http://www.mr-aym.com"                 // Ahmed Mohamedzein
,"http://www.devourhigh.com"             // John Paul Panebianco
,"http://www.paulpasquarelli.com"        // Paul Pasquarelli
,"NA"                                    // Michael Phang
,"http://www.jbqenergysolutions.com"     // Joseph Quinn
,"http://www.showmywisdom.com/"          // Dana Richards
,"http://traininggrounds.space/"         // Devon Viens
,"https://sarahwang.net"                 // Lujin Wang
,"http://www.sashpod.net"                // Sashalee Wickham
);


learnDesc = "Learn URL";
var learn = new Array(
 "/learn" // Jami Bailey
,"/learn" // David Bolles
,"/learn" // Christian Carvajal
,"/learn" // Dustin Chanthaseny
,"/learn" // Andrew Cicoria
,"/learn" // Katherine Clarke
,"/learn" // Brian Clarke
,"/learn" // Benjamin Combs
,"/learn" // Yash Dalsania
,"/learn" // Joseph Dufour
,"/learn" // Vincent Gianni
,"/learn" // Anhtoan Huynh
,"/learn" // Charles Knurek
,"/learn" // Justin Michaud
,"/learn" // Ahmed Mohamedzein
,"/learn" // John Paul Panebianco
,"/learn" // Paul Pasquarelli
,"/learn" // Michael Phang
,"/learn" // Joseph Quinn
,"/learn" // Dana Richards
,"/learn" // Devon Viens
,"/learn" // Lujin Wang
,"/learn" // Sashalee Wickham
);

p1Desc = "Pauls Pet Palace v1";
var ppp1 = new Array(
 "/ppp" // Jami Bailey
,"/ppp" // David Bolles
,"/ppp" // Christian Carvajal
,"/ppp" // Dustin Chanthaseny
,"/ppp" // Andrew Cicoria
,"/ppp" // Katherine Clarke
,"/ppp" // Brian Clarke
,"/ppp" // Benjamin Combs
,"/ppp" // Yash Dalsania
,"/ppp" // Joseph Dufour
,"/ppp" // Vincent Gianni
,"/ppp" // Anhtoan Huynh
,"/ppp" // Charles Knurek
,"/ppp" // Justin Michaud
,"/ppp" // Ahmed Mohamedzein
,"/ppp" // John Paul Panebianco
,"/ppp" // Paul Pasquarelli
,"/ppp" // Michael Phang
,"/ppp" // Joseph Quinn
,"/ppp" // Dana Richards
,"/ppp" // Devon Viens
,"/ppp" // Lujin Wang
,"/ppp" // Sashalee Wickham
);

p2Desc = "Pauls Pet Palace v2, In Bootstrap";
var ppp2 = new Array(
 "/ppp2" // Jami Bailey
,"/ppp2" // David Bolles
,"/ppp2" // Christian Carvajal
,"/ppp2" // Dustin Chanthaseny
,"/ppp2" // Andrew Cicoria
,"/ppp2" // Katherine Clarke
,"/ppp2" // Brian Clarke
,"/ppp2" // Benjamin Combs
,"/ppp2" // Yash Dalsania
,"/ppp2" // Joseph Dufour
,"/ppp2" // Vincent Gianni
,"/ppp2" // Anhtoan Huynh
,"/ppp2" // Charles Knurek
,"/ppp2" // Justin Michaud
,"/ppp2" // Ahmed Mohamedzein
,"/ppp2" // John Paul Panebianco
,"/ppp2" // Paul Pasquarelli
,"/ppp2" // Michael Phang
,"/ppp2" // Joseph Quinn
,"/ppp2" // Dana Richards
,"/ppp2" // Devon Viens
,"/ppp2" // Lujin Wang
,"/ppp2" // Sashalee Wickham
);


fpDesc = "Final Project";
var fp = new Array(
 "/project/index.html" // Jami Bailey
,"/project/index.html" // David Bolles
,"/project/index.html" // Christian Carvajal
,"/project/index.html" // Dustin Chanthaseny
,"/project/index.html" // Andrew Cicoria
,"/project/index.html" // Katherine Clarke
,"/project/index.html" // Brian Clarke
,"/project/index.html" // Benjamin Combs
,"/project/index.html" // Yash Dalsania
,"/project/index.html" // Joseph Dufour
,"/project/index.html" // Vincent Gianni
,"/project/index.html" // Anhtoan Huynh
,"/project/index.html" // Charles Knurek
,"/project/index.html" // Justin Michaud
,"/project/index.html" // Ahmed Mohamedzein
,"/project/index.html" // John Paul Panebianco
,"/project/index.html" // Paul Pasquarelli
,"/project/index.html" // Michael Phang
,"/project/index.html" // Joseph Quinn
,"/project/index.html" // Dana Richards
,"/project/index.html" // Devon Viens
,"/project/index.html" // Lujin Wang
,"/project/index.html" // Sashalee Wickham

);


/*
bdDesc = "TBD";
var bd = new Array(
 "/learn/tbd.html" // Jami Bailey
,"/learn/tbd.html" // David Bolles
,"/learn/tbd.html" // Christian Carvajal
,"/learn/tbd.html" // Dustin Chanthaseny
,"/learn/tbd.html" // Andrew Cicoria
,"/learn/tbd.html" // Katherine Clarke
,"/learn/tbd.html" // Brian Clarke
,"/learn/tbd.html" // Benjamin Combs
,"/learn/tbd.html" // Yash Dalsania
,"/learn/tbd.html" // Joseph Dufour
,"/learn/tbd.html" // Vincent Gianni
,"/learn/tbd.html" // Anhtoan Huynh
,"/learn/tbd.html" // Charles Knurek
,"/learn/tbd.html" // Justin Michaud
,"/learn/tbd.html" // Ahmed Mohamedzein
,"/learn/tbd.html" // John Paul Panebianco
,"/learn/tbd.html" // Paul Pasquarelli
,"/learn/tbd.html" // Michael Phang
,"/learn/tbd.html" // Joseph Quinn
,"/learn/tbd.html" // Dana Richards
,"/learn/tbd.html" // Devon Viens
,"/learn/tbd.html" // Lujin Wang
,"/learn/tbd.html" // Sashalee Wickham
);

*/

document.write("<div class='table-responsive'><table class='table table-striped'><thead>");
document.write("<tr><th>Student Name</th><th>Link to Assignments</th></tr></thead><tbody>");


for ( i = 0 ; i < stuLen; i++) {
   document.write("<tr><td width='40%'><img src='img/" + pics[i] + 
   "' class='img-responsive img-circle img-thumbnail' title='This is " + stu[i] + "' alt='" + stu[i]+ "'> <strong>" + stu[i] + "</strong></td><td>" +
  
 
   "<a href='" + main[i] + "' target='_blank'><b>" + mainDesc + ": </b>" + main[i] + "</a><br/>" + 

   "<a href='" + main[i] + learn[i] + "' target='_blank'>" + learnDesc + "</a><br/>" +
   "<a href='" + main[i] + ppp1[i]  + "' target='_blank'>" + p1Desc    + "</a><br/>" +
   "<a href='" + main[i] + ppp2[i]  + "' target='_blank'>" + p2Desc    + "</a><br/>" +
 

   "<a href='" + main[i] + fp[i]    + "' target='_blank'>" + fpDesc    + "</a>"      +
   
   "</td></tr>");           
}


document.write("</tr><tr><td colspan='2'><a href='http://www.paulgruhn.com'>prof.gruhn</a></td></tr></tbody></table></div>");
}
