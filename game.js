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
  onClick(index);
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
  const nodeList = document.querySelectorAll(".Mybutton");
  for (let i = 0; i < nodeList.length; i++)
  {
    nodeList[i].style.backgroundColor="#29a6ff";
    nodeList[i].style.cursor="pointer";
    nodeList[i].disabled=false;
  }
}

function onClick(Answer)
{
  const nodeList = document.querySelectorAll(".Mybutton");
  for (let i = 0; i < nodeList.length; i++) 
  {
    nodeList[i].disabled=true;
    if(nodeList[i].value==Questions[Answer].Correct)
    {
      nodeList[i].style.backgroundColor = "#00d86c";
      nodeList[i].style.cursor="not-allowed";
    }
    else
    {
      nodeList[i].style.backgroundColor="#ff0e4a";
      nodeList[i].style.cursor="not-allowed";
    }
  }
}