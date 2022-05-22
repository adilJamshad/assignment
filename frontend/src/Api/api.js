import http from "../service/http";
import { volume } from "./paths";

export const postVolume = (data) => http.post(volume, data);
export const getVolumes = () => http.get(volume);
