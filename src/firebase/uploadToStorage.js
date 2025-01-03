import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { storage } from ".";
import { v4 } from "uuid";

const uploadToStorage = async (file) => {
    if (!file || !file.type.startsWith("image")) return null;

    if (file.size > 2097152) {
        toast.error("Please upload media under 2MB.");
        throw new Error("The image exceeds 2MB.");
    }

    const imageRef = ref(storage, v4() + file.name);

    await uploadBytes(imageRef, file);
    const url = await getDownloadURL(imageRef);

    return url;
};

export default uploadToStorage;