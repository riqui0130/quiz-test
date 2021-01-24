const quiz = [
  {
    question: 'コーヒー生産量が一番多い国は?',
    answers: [
      'ベトナム',
      'コロンビア',
      'ブラジル',
      'キリマンジャロ'
    ],
    correct: 'ブラジル'
  }, {
    question: 'コーヒー消費量が一番多い国は?',
    answers: [
      'デンマーク',
      'イギリス',
      'アメリカ',
      'ルクセンブルク'
    ],
    correct: 'ルクセンブルク'
  }, {
    question: 'sutarbucksが創業した年は何年？',
    answers: [
      '1904年',
      '1971年',
      '1985年',
      '1996年'
    ],
    correct: '1971年'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がもう有ればこちらを実行
    setupQuiz();
  }else {
    //問題数がもう無ければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンの正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}