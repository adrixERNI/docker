// stores/alertStore.ts
import { create } from "zustand";

type AlertType = "success" | "danger" | "warning" | "info";

interface ShowAlertProps {
    message: string;
    type?: AlertType;
}

interface AlertState {
    show: boolean;
    message: string;
    type: AlertType;
    showAlert: (props: ShowAlertProps) => void;
    hideAlert: () => void;
}

const useAlertStore = create<AlertState>((set) => ({
    show: false,
    message: "",
    type: "info",
    showAlert: ({ message, type = "info" }: ShowAlertProps) => set({ show: true, message, type }),
    hideAlert: () => set({ show: false, message: "", type: "info" })
}));

export default useAlertStore;
