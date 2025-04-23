import MentorFeedbackCard from "@/components/shared/Cards/MentorFeedbackCard";
import HeaderSubTitle from "@/components/shared/Titles/HeaderSubTitle";
import Flex from "@/components/ui/Flex";

const TraineeMentorsFeedback = () => {
    return (
        <Flex direction="col">
            <HeaderSubTitle title="Mentor's feedback for you" />

            <Flex className="flex-wrap mt-4" gap="md">
                <MentorFeedbackCard
                    name="John Doe"
                    rating="5"
                    feedback="Great progress on your project! Your ability to adapt to new challenges and implement feedback has been impressive. Keep pushing forward and continue to refine your skills for even greater success."
                    date="October 1, 2023"
                />
                <MentorFeedbackCard
                    name="Jane Smith"
                    rating="5"
                    feedback="Keep up the good work on your coding skills! Your attention to detail and dedication to learning have been exceptional. Stay consistent, and you'll achieve remarkable results in your development journey."
                    date="October 2, 2023"
                />
                <MentorFeedbackCard
                    name="Alice Johnson"
                    rating="4"
                    feedback="Your teamwork has been outstanding! Collaborating with others and contributing valuable insights have made a significant impact. Continue to build strong relationships and enhance your collaborative efforts."
                    date="October 3, 2023"
                />
                <MentorFeedbackCard
                    name="Bob Brown"
                    rating="4"
                    feedback="Consider improving your time management. While your technical skills are strong, better planning and prioritization will help you achieve your goals more efficiently and reduce unnecessary stress."
                    date="October 4, 2023"
                />
                <MentorFeedbackCard
                    name="Charlie Davis"
                    rating="4"
                    feedback="Excellent problem-solving skills! Your ability to analyze complex issues and come up with effective solutions is commendable. Keep honing this skill, as it will serve you well in your career."
                    date="October 5, 2023"
                />
                <MentorFeedbackCard
                    name="Diana Evans"
                    rating="3"
                    feedback="Your communication has been very clear. Articulating your ideas effectively and ensuring everyone is on the same page is a valuable skill. Keep working on this to further enhance your impact in team settings."
                    date="October 6, 2023"
                />
            </Flex>
        </Flex>
    );
};

export default TraineeMentorsFeedback;
