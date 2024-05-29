function First_Task() {
   
    return(
        <>
         <h1> React(JSX) Assignment NO #01 </h1>
  <h2>Question No 01</h2>
  <div className="myForm" >
    <input type="text" name="name" placeholder="Enter your string" className="inputField"/><br/>
    <button onClick="addPy()" style={{color:"Red"}}>Submitted </button>

    <div>
      <p className="para"></p>
    </div>
  </div>
  <hr/>
  {/* <!--***********************************************************************--> */}
  <h2>Question No 02</h2>
  <div className="myForm1">
    <label for="originalstring">Orginal String</label>
    <input type="text" placeholder="Enter a string" className="originalstring"/><br/>
    <label for="positon">Index</label>
    <input type="number" placeholder="Enter an index of character" className="position"/><br/>

    <button onClick="charReplace()"> Submitted</button>

    <div>
      <p className="Replace"></p>
    </div>
  </div>
  <hr/>
  {/* <!--********************************************************************--> */}
  <h2>Question No 03</h2>
  <div className="myForm2">
    <label for="originalstring1">Original String</label>
    <input type="text" className="originalstring1" placeholder="Enter a string"/><br/>
    <button onClick="front_back_add()">Submitted</button>

    <div>
      <p className="add"> </p>
    </div>

  </div>
  <hr/>
  {/* <!--********************************************************************--> */}
  <h2>Question No 04</h2>
  <div className="myForm3">
    <label for="originalstring2">Original String</label>
    <input type="text" className="originalstring2" placeholder="Enter a string"/><br/>
    <button onClick="frontback_add()">Submitted</button>

    <div>
      <p className="front_add"> </p>
    </div>
  </div>
  <hr/>
  {/* <!--**********************************************************************--> */}
  <h2>Question No 05</h2>
  <div className="myForm4">
    <input type="number" className="multipleOf3And7" placeholder="Multiple of 3 and 7"/><br/>
    <button onClick="checkmultiple()">Submitted</button>

    <div>
      <p className="multiple1"></p>
    </div>

  </div>
  <hr/>
  {/* <!--***********************************************************************--> */}
  <h2> Question No 06</h2>
  <div className="myForm5">
    <label for="originalstring3">Original String</label>
    <input type="text" className="originalstring3" placeholder="Enter a string"/><br/>
    <button onClick="frontback3()">Submitted</button>

    <div>
      <p className="last3_add"> </p>
    </div>
  </div>
  <hr/>
  {/* <!--***********************************************************************--> */}
  <h2> Question No 07</h2>
  <div className="myForm6">
    <label for="Number">Number</label>
    <input type="number" className="Number1" placeholder="Enter first Number"/>
    <input type="number" className="Number2" placeholder="Enter second Number"/>
    <input type="number" className="Number3" placeholder="Enter third Number"/><br/>
    <button className="MaxNumber">Submitted</button>

    <div>
      <p className="result"> </p>
    </div>
  </div>
  <hr/>
  {/* <!--**************************************************************************--> */}
  <h2> Question No 08</h2>
  <div className="myForm7">
    <label for="totalMarks">Total Marks</label>
    <input type="number" className="totalMarks" placeholder="Enter Total Marks"/><br/>
    <label for="IsFinalExam">Is Final Exam ?</label>
     <input type="radio" className="IsFinalExam" name="Is Final Exam?" />
           <label for="IsFinalExam">Final</label> 
            <input type="radio" className="IsMclassNameExam"name="Is Final Exam?"/>

            <label for="IsMclassNameExam">MclassName</label><br/>  
    <input type="checkbox" className="isfinalexam" />


    <button className="FindGrade">Submitted</button>
    <div>
      <p className="CheckGrade"> </p>
    </div>
  </div>
  <hr/>
  {/* <!--**************************************************************************--> */}
  <h2>Question No 09:</h2>
  <div className="myForm8">
    <label for="FirstInteger">First Integer</label>
    <input type="number" className="FirstInteger" placeholder="Enter a first Integer"/><br/>
    <label for="SecondInteger">Second Integer</label>
    <input type="number" className="SecondInteger" placeholder="Enter a second Integer"/><br/>
    <button className="checksum">Submitted</button>
    <div>
      <p className="result1"></p>
    </div>
  </div>
  <hr/>
  {/* <!--*****************************************************************************--> */}
  <h2> Question No 10:</h2>
  <div className="myForm9">
    <label for="StartInteger"> Start Integer</label>
    <input type="text" className="StartInteger" placeholder="Enter starting Integer"/><br/>
    <label for="EndInteger">End Integer</label>
    <input type="text" className="EndInteger" placeholder="Enter End Integer"/><br/>
    <button type="button" className="Forloop">Submitted</button>
    <div>
      <p className="result2"></p>
    </div>
  </div>
  <hr/>
  {/* <!--********************************************************************************--> */}
  <h2>Question No 11:</h2>
  <div className="myForm10"></div>
  <div>
    <p className="result3"></p>
  </div>
  
  <hr/>
  {/* <!--***********************************************************************--> */}
  <h2> Question No 12:</h2>
  <div className="myForm11">
    <input type="number" className="ArmstrongNum" placeholder="Enter Armstrong Number"/>
    <button className="ArmStrong">Click me</button>
    <div><p className="result4"></p></div>
  </div>
  <hr/>
  {/* <!--************************************************************************--> */}
  <h2>Question No 13:</h2>
  <div className="myForm12">
    <p className="result5"></p>
  </div>
  <hr/>
  {/* <!--************************************************************************--> */}
  <h2>Question No 14:</h2>
  <div className="myForm13">
  <p className="result6"></p></div>
  <hr/>
  {/* <!--************************************************************************--> */}
  <h2>Question No 15:</h2>
  <div className="myForm14">
    <label for="PositiveNegative">Number</label>
    <input type="number" className="PositiveNegative" placeholder="Enter a Number"/><br/>
    <button className="EvenOddnumber">Clickme</button>
    <p className="result7"></p></div>
    <hr/>
    {/* <!--*************************************************************************--> */}
    <h2>Question No 16:</h2>
    <div className="myForm15">
      <label for="Age">Age</label>
      <input type="number" className="Age" placeholder="Enter your age:"/><br/>
      <button className="EnterAge">Clickme</button>
      <p className="result8"></p>
    </div>
    <hr/>
    {/* <!--***************************************************************************--> */}
    <h2>Question No 17:</h2>
    <div className="myForm16">
      <label for="EnterPrice">Price</label>
      <input type="text" className="EnterPrice" placeholder="Enter Price of item"/><br/>
      <button className="Priceitem">Clickme</button>
      <p className="result9"></p>
    </div>
    <hr/>
    {/* <!--****************************************************************************--> */}
    <h2>Question No 18:</h2>
    <div className="myForm17">
      <p className="result10"></p>
      <p className="result11"></p>
      <p className="result12"></p>
    </div>
    <hr/>
    {/* <!--***************************************************************************--> */}
    <h2> Question No 19:</h2>
    <div className="myform18">
      <p className="result13"></p>
    </div>
    <hr/>
    {/* <!--******************************************************************************--> */}
    <h2>Question No 20</h2>
    <div className="myForm19">
      <label for="EnterNumber">Number</label>
      <input type="number" className="EnterNumber" placeholder="Enter a number"/><br/>
      <button className ="FactorialNumber">submitted</button>
      <p className="result14"></p>
    </div>
<hr/>   


        
        </>
    )
}
export default First_Task;
