
import React, { Component } from 'react'


class QuizQuestionButton extends Component {


  render() {
    return (
      <main>
       <ul>
         <li>
         <button>{this.props.button_text}</button>
         </li>
         </ul>

     </main>


  );
  }


}



export default QuizQuestionButton
