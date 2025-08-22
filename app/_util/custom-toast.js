import toast from "react-hot-toast";
import CustomToast from "@/app/_components/CustomToast";

export default {
    success(message, options) {
        toast.custom(t => <CustomToast message={ message } toastState={ t } />, { ...options })
    }
}