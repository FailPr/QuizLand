var Questions = [];
function Question_Builder(
  id,
  Question,
  Answer_1,
  Answer_2,
  Answer_3,
  Answer_4,
  Correct
) {
  this.id = id;
  this.Question = Question;
  this.Answer_1 = Answer_1;
  this.Answer_2 = Answer_2;
  this.Answer_3 = Answer_3;
  this.Answer_4 = Answer_4;
  this.Correct = Correct;
}

function myFunction(event) {
  var x = event.charCode;
  if(x == 49)
  {
    x=document.getElementById("Answner_1").value;
    y=document.getElementById("Answner_1").id;
    Correct_Wrong(x,y);
    setTimeout(next,1500);
  }
  if(x == 50)
  {
    x=document.getElementById("Answner_2").value;
    y=document.getElementById("Answner_2").id;
    Correct_Wrong(x,y);
    setTimeout(next,1500);
  }
  if(x == 51)
  {
    x=document.getElementById("Answner_3").value;
    y=document.getElementById("Answner_3").id;
    Correct_Wrong(x,y);
    setTimeout(next,1500);
  }
  if(x == 52)
  {
    x=document.getElementById("Answner_4").value;
    y=document.getElementById("Answner_4").id;
    Correct_Wrong(x,y);
    setTimeout(next,1500);
  }
}

Questions.push(
  new Question_Builder(
    Question_Builder.length,
    "Πως ονομάστικε η τουρκική εισβόλη του 1974 στην Κύπρο;",
    "Αττίλας",
    "Βατερλό",
    "Αννίβας",
    "Πέτα",
    "Αττίλας"
  )
);
Questions.push(
  new Question_Builder(
    Question_Builder.length,
    "Ποιος ήταν ο πρώτος αυτοκράτορας του Βυζαντίου;",
    "Ο Ιουστινιανός",
    "Βαλεντινιανός Α΄",
    "Ο Μέγας Κώνσταντίνος",
    "Ιουστίνος Α΄",
    "Ο Μέγας Κώνσταντίνος"
  )
);
Questions.push(
  new Question_Builder(
    Question_Builder.length,
    "Που έπεσε η πρώτη πυρινική βόμβα;",
    "Στη Χιροσίμα",
    "Στο Ναγκασάκι",
    "Στο Τσερνομπιλ",
    "Αλαμογκόρντο",
    "Στη Χιροσίμα"
  )
);

window.onload = function () {
  next();
};
function next() {
    enable();
    document.getElementById("Correct_msg").innerHTML="";
  var i = Math.floor(Math.random() * Questions.length);
  document.getElementById("Question").innerHTML = Questions[i].Question;

  document.getElementById("Answner_1").innerHTML = Questions[i].Answer_1;
  document.getElementById("Answner_1").value =
    document.getElementById("Answner_1").innerHTML;

  document.getElementById("Answner_2").innerHTML = Questions[i].Answer_2;
  document.getElementById("Answner_2").value =
    document.getElementById("Answner_2").innerHTML;

  document.getElementById("Answner_3").innerHTML = Questions[i].Answer_3;
  document.getElementById("Answner_3").value =
    document.getElementById("Answner_3").innerHTML;

  document.getElementById("Answner_4").innerHTML = Questions[i].Answer_4;
  document.getElementById("Answner_4").value =
    document.getElementById("Answner_4").innerHTML;
}

function Correct_Wrong(Answer,clicked_btn) {
  var found = Questions.find((e) => e.Correct === Answer);
  if (found) {
    if (found.Correct == Answer) {
        document.getElementById("Correct_msg").innerHTML="Correct";
    }
  } else {
    document.getElementById("Correct_msg").innerHTML="Wrong";
  }
  disable(Answer);
}

function disable(Answer) 
{
    const button = document.querySelectorAll('button');
    if(document.getElementById("Correct_msg").innerHTML=="Wrong")
    {
        for (let i = 0; i < button.length; i++) 
        {
            button[i].disabled=true;
        }
    }
    if(document.getElementById("Correct_msg").innerHTML=="Correct")
    {
        for (let i = 0; i < button.length; i++) 
        {
            if(button[i].value!=Answer)
            {
                button[i].disabled=true;
            }
        }
    }
}

function enable()
{
    const button = document.querySelectorAll('button');
    for (let i = 0; i < button.length; i++) {
      button[i].disabled = false;
    } 
}
