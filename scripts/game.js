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
var stats = {correct_counter:0, wrong_counter:0, readLater_counter:0};

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

window.onload=function()
{
  nextQuestion();
}

function Answer_Check(Answer)
{
  find = document.getElementById('Question').innerHTML;
  const index = Questions.map(object => object.Question).indexOf(find);
  check_stats(index,Answer);
  disable_buttons(index);
  setTimeout(nextQuestion,1500);
}

function nextQuestion()
{
  const random_question = Math.floor(Math.random()*Questions.length);
  document.getElementById("Question").innerHTML=Questions[random_question].Question;
  document.getElementById("Answer_1").innerHTML=Questions[random_question].Answer_1;
  document.getElementById("Answer_1").value=Questions[random_question].Answer_1;
  document.getElementById("Answer_2").innerHTML=Questions[random_question].Answer_2;
  document.getElementById("Answer_2").value=Questions[random_question].Answer_2;
  document.getElementById("Answer_3").innerHTML=Questions[random_question].Answer_3;
  document.getElementById("Answer_3").value=Questions[random_question].Answer_3;
  document.getElementById("Answer_4").innerHTML=Questions[random_question].Answer_4;
  document.getElementById("Answer_4").value=Questions[random_question].Answer_4;
  document.getElementById("correct_img").className="";
  document.getElementById("wrong_img").className = "";
  setTimeout(wait_for_readlater_animation,1000);
  
  enable_buttons();
}

function wait_for_readlater_animation()
{
  document.getElementById("read_later_stats_img").className = "";
}

function disable_buttons(Answer)
{
  const nodeList = document.querySelectorAll(".Mybutton");
  for (let i = 0; i < nodeList.length; i++) 
  {
    if(nodeList[i].value==Questions[Answer].Correct)
    {
      nodeList[i].style.backgroundColor = "#06D6A0";
      nodeList[i].style.cursor="not-allowed";
    }
    else
    {
      nodeList[i].style.backgroundColor="#EF476F";
      nodeList[i].style.cursor="not-allowed";
    }
    nodeList[i].disabled=true;
  }
}

function enable_buttons()
{
  const nodeList = document.querySelectorAll(".Mybutton");
  for (let i = 0; i < nodeList.length; i++)
  {
    nodeList[i].style.backgroundColor="#00b4d8";
    nodeList[i].style.cursor="pointer";
    nodeList[i].disabled=false;
  }
}

function check_stats(index,answer)
{
  if(index==null||answer==null)
  {
    stats.readLater_counter+=1;
    document.getElementById('read_later_counter').innerHTML=stats.readLater_counter;
    document.getElementById("read_later_stats_img").className = "animate__animated animate__heartBeat";
    nextQuestion();
  }
  else if(Questions[index].Correct==answer)
  {
    stats.correct_counter+=1;
    document.getElementById('correct_counter').innerHTML=stats.correct_counter;
    document.getElementById("correct_img").className = "animate__animated animate__tada";
  }
  else
  {
    stats.wrong_counter+=1;
    document.getElementById('wrong_counter').innerHTML=stats.wrong_counter;
    document.getElementById("wrong_img").className = "animate__animated animate__headShake";
  }

}

function buttons(event) {
  var x = event.charCode;
  if(x==49)
  {
    x=document.getElementById('Answer_1').value;
    Answer_Check(x);
  }
  if(x==50)
  {
    x=document.getElementById('Answer_2').value;
    Answer_Check(x);
  }
  if(x==51)
  {
    x=document.getElementById('Answer_3').value;
    Answer_Check(x);
  }
  if(x==52)
  {
    x=document.getElementById('Answer_4').value;
    Answer_Check(x);
  }
}