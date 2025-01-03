import React from 'react';
import ContentSection from './ContentSection';

const contentData = [
`Online Quiz game has 4 or 5 options
For each right answer, 5 points will be given.
Minus 2 points for each question.
Use of Lifeline: You can use it only once per level
50 - 50: Remove two options out of four (deduct 4 coins).
Skip question: You can pass the question without minus points(deduct 4 coins).
Leaderboard: You can compare your score with other users of the web and app,
highest scored comes up on the leaderboard.
To Practice;
Sign up for an account,
Navigate to Practice,
Select your exam type JAMB, WAEC, or NECO.
Choose your subject,
Pick the exam year.


`,
`Contest Rules: To provide a fair and equal chance of winning to all Online Quiz readers, 
the following are the official rules for all contests on Online Quiz.
Eligibility: All players/users can play the contest.
How to Enter: The user can Play the Contest by spending the number of coins specified 
as an entry fee in the contest details.
Choice of law: All the Contest and Operations belong to the ExamPrimed Team .
Daily Test;
Sign up for an account.
Choose your subject for the daily test.
Each question is timed, and you have the option to return to previous questions.

`,
];

function MainContent() {
  return (
    <main className="w-full max-w-5xl mx-auto px-4
      lg:pt-28 lg:mb-56
      md:pt-20 md:mb-40
      sm:pt-16 sm:mb-32
      pt-12 mb-24">
      <div className="flex flex-wrap gap-8">
        {contentData.map((content, index) => (
          <ContentSection key={index} content={content} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;