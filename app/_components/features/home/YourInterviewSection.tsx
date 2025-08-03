import React from "react";
import InterviewCard from "../interviews/InterviewCard";
import { dummyInterviews } from "@/constants";
import Section from "../../ui/Section";

export default function YourInterviewSection() {
  return (
    <Section>
      <h2>Your Interviews</h2>
      <div className="interviews-section">
        {dummyInterviews ? (
          dummyInterviews.map((interview) => (
            <InterviewCard interview={interview} key={interview.id} />
          ))
        ) : (
          <p>You haven&apos;t taken any interviews yet</p>
        )}
      </div>
    </Section>
  );
}
