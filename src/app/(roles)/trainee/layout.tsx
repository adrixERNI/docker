import type { ReactNode } from "react";
import Header from "@/components/common/Header/Header";

const TraineeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default TraineeLayout;
