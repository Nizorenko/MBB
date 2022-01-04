import { IWithClassName } from "@/types";

export interface PopupFeedbackProps extends IWithClassName {
  isOpen: boolean;
  onClose: () => void;
}
