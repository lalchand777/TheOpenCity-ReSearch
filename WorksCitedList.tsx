
import React from 'react';

const works = [
  "2025 Indian electoral controversy - Wikipedia",
  "Rahul Gandhi alleges voter fraud in Karnataka's Mahadevapura - YouTube",
  "Rahul Gandhi's allegations: Is transparency the EC's best weapon to counter them? | In Focus podcast - YouTube",
  "Fix the flaws: On Rahul Gandhi's 'stolen elections' allegation and the Election Commission of India - The Hindu",
  "A case of phantom voters - Indian National Congress",
  "India Today Fact Checks Rahul Gandhi's Claims: Is Rahul Gandhi ...",
  "Rahul Gandhi's Voter Fraud Claim in Karnataka Faces Denial | Exclusive Interview with Shakuni Rani - YouTube",
  "Poll Body Fact-Checks Yet Another Voter Fraud Claim By Rahul Gandhi - YouTube",
  "​Electronic distraction: On politics and the 'EVM issue' - The Hindu",
  "Opposition Questions EVM Functionality, Alleges Manipulation | Assembly Elections | India Today - YouTube",
  "21 parties move SC with plea to make EVMs tamper-proof - The New Indian Express",
  "One of the biggest criticisms of late against EVMs is that they are susceptible to hacking",
  "“EVMs are 100% foolproof”: Chief Election Commissioner Rajiv Kumar dismisses Congress claims...",
  "Rahul Gandhi rally highlights: 'Vote theft' data from Karnataka is proof of a crime, says Rahul Gandhi...",
  "EVM Challenge by Election Commission of India - PIB",
  "Rahul Gandhi Gives 'Proof' Of EC Voter 'Fraud' | EC Counters With Oath Dare | India Today",
  "ECI asking Rahul Gandhi to submit complaint on Karnataka roll manipulation under oath infructuous...",
  "Rules Don't Apply to 'Vote Chori' Claims: Experts on EC's Oath Demand from RaGa - ADR",
  "Rahul Gandhi's Voter Theft Claims Fact-Checked By Election Commission Amid Political Row - YouTube",
  "'Vote theft' claim of Congress factually incorrect: Election Commission - The Hindu",
  "FAQs on EVM | Election Commission of India",
  "Election Commission Dismisses Congress's EVM Charges, Public Responds | India Today News - YouTube",
  "'100% foolproof': How CEC responded to EVM tampering charge - Times of India",
  "EVM Secruity - CEO - Haryana",
  "Rahul Gandhi Gives Poll Fraud Proof | India Today Ground Check On Rahul's Claim",
  "BJP hits out at Rahul Gandhi over his vote theft allegations against ...",
  "BJP terms Rahul Gandhi's charges against the ECI baseless, accuses Congress of 'infiltrators first politics'...",
  "\"Irresponsible, Shameless\": BJP Slams Rahul Gandhi's Poll Fraud Allegations - NDTV",
  "\"Irresponsible\": BJP Slams Rahul Gandhi's Poll Fraud Allegations - YouTube",
  "BJP Mocks Rahul Gandhi After EC Demands Proof Or Apology For Opposition Leader's Poll Claims - YouTube",
  "Rahul Gandhi's '80 Voters, 1 Room' Claim in Bengaluru Investigated | India Today News",
  "Electronic voting in India - Wikipedia",
  "Questions and Answers - India's EVM are Vulnerable to Fraud",
  "Security Problems in India's Electronic Voting System",
  "Representation of the People Act, 1951 - Wikipedia",
  "The Representation of the People Act, 1951"
];

const WorksCitedList: React.FC = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-amber-700 text-center">Works Cited</h2>
      <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200/80">
        <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
          {works.map((work, index) => (
            <li key={index}>{work}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default WorksCitedList;
