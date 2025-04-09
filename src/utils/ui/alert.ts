import { Flip, toast } from "react-toastify";

export function successMessage(massage: string) {
  toast.success(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    progress: undefined,
    theme: "colored",
    transition: Flip,
  });
}

export function errorMessage(massage: string) {
  toast.error(massage, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    progress: undefined,
    theme: "dark",
    transition: Flip,
  });
}
