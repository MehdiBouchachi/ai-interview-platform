import React from "react";
import InterviewCard from "../interviews/InterviewCard";
import { dummyInterviews } from "@/constants";
import Section from "../../ui/Section";

export default function TakeInterviewSection() {
  return (
    <Section>
      <h2>Take an Interview</h2>
      <div className="interviews-section">
        {dummyInterviews ? (
          dummyInterviews.map((interview) => (
            <InterviewCard interview={interview} key={interview.id} />
          ))
        ) : (
          <p>There are no interviews available</p>
        )}
      </div>
    </Section>
  );
}
