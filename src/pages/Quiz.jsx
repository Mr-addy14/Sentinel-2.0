import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Trophy, Target, CheckCircle, XCircle } from "lucide-react";
import { easyQuestions, hardQuestions } from "@/data/quizQuestions";
import { Progress } from "@/components/ui/progress";

const Quiz = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const questions = selectedDifficulty === "easy" ? easyQuestions : hardQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    setAnsweredQuestions(prev => prev + 1);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + (selectedDifficulty === "easy" ? 10 : 20));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setSelectedDifficulty(null);
    }
  };

  const progress = ((answeredQuestions) / questions.length) * 100;

  if (!selectedDifficulty) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
                <Brain className="w-10 h-10 text-primary" />
                Quiz Arena
              </h1>
              <p className="text-muted-foreground">
                Test your cybersecurity knowledge and earn XP
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className="p-8 bg-gradient-to-br from-success/20 to-card border-success/50 hover:shadow-glow cursor-pointer transition-all"
                onClick={() => handleDifficultySelect("easy")}
              >
                <div className="text-center">
                  <Target className="w-16 h-16 text-success mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Easy Mode</h2>
                  <Badge variant="outline" className="mb-4 border-success/50">
                    50 Questions
                  </Badge>
                  <p className="text-muted-foreground mb-4">
                    Basic cybersecurity concepts and best practices
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-warning" />
                    <span>+10 XP per correct answer</span>
                  </div>
                </div>
              </Card>

              <Card
                className="p-8 bg-gradient-to-br from-destructive/20 to-card border-destructive/50 hover:shadow-glow cursor-pointer transition-all"
                onClick={() => handleDifficultySelect("hard")}
              >
                <div className="text-center">
                  <Brain className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-2">Hard Mode</h2>
                  <Badge variant="outline" className="mb-4 border-destructive/50">
                    50 Questions
                  </Badge>
                  <p className="text-muted-foreground mb-4">
                    Advanced security concepts and real-world scenarios
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-warning" />
                    <span>+20 XP per correct answer</span>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="mt-8 p-6 bg-card/50 border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Your Stats
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Total XP</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-success">0</p>
                  <p className="text-sm text-muted-foreground">Quizzes Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-warning">0%</p>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <Badge variant="outline" className={selectedDifficulty === "easy" ? "border-success/50" : "border-destructive/50"}>
                {selectedDifficulty.toUpperCase()} MODE
              </Badge>
              <h2 className="text-2xl font-bold mt-2">
                Question {currentQuestionIndex + 1} of {questions.length}
              </h2>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{score} XP</p>
              <p className="text-sm text-muted-foreground">Current Score</p>
            </div>
          </div>

          <Progress value={progress} className="mb-6 h-2" />

          <Card className="p-8 bg-card/50 border-border/50 cyber-glow mb-6">
            <h3 className="text-xl font-medium mb-6">{currentQuestion.question}</h3>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQuestion.correctAnswer;
                const showCorrectness = showResult;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrectness
                        ? isCorrect
                          ? "border-success bg-success/20"
                          : isSelected
                          ? "border-destructive bg-destructive/20"
                          : "border-border/30 bg-secondary/30"
                        : isSelected
                        ? "border-primary bg-primary/10"
                        : "border-border/30 bg-secondary/30 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showCorrectness && isCorrect && (
                        <CheckCircle className="w-5 h-5 text-success" />
                      )}
                      {showCorrectness && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-destructive" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <Card className="mt-6 p-4 bg-secondary/50 border-border/30">
                <p className="text-sm text-muted-foreground">
                  <strong>Explanation:</strong> {currentQuestion.explanation}
                </p>
              </Card>
            )}
          </Card>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setSelectedDifficulty(null);
                setCurrentQuestionIndex(0);
                setScore(0);
                setAnsweredQuestions(0);
              }}
            >
              Exit Quiz
            </Button>

            {showResult ? (
              <Button onClick={handleNextQuestion} className="bg-primary hover:bg-primary/90">
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            ) : (
              <Button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="bg-primary hover:bg-primary/90"
              >
                Submit Answer
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;