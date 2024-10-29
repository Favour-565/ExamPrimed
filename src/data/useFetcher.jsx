import axios from "axios";
import { toast } from "react-toastify";
import { SetAuthToken, TOKEN } from "./Config";
import useAuthStore from "./stores/authStore";
import useErrorStore from "./stores/errorStore";
import {
  useExamTypeStore,
  usePlanStore,
  useSubjectStore,
  useYearStore,
} from "./stores/loggerStore";

export const apiCall = async ({
  type,
  url,
  data,
  getter,
  headers,
  noToast,
}) => {
  try {
    let res;
    if (type === "get")
      res = await axios.get(url, {
        headers: {
          ...headers,
        },
      });
    if (type === "post")
      res = await axios.post(
        url,
        { ...data },
        {
          headers: {
            ...headers,
          },
        },
      );
    if (type === "put")
      res = await axios.put(
        url,
        { ...data },
        {
          headers: {
            ...headers,
          },
        },
      );
    if (type === "patch")
      res = await axios.patch(
        url,
        { ...data },
        {
          headers: {
            ...headers,
          },
        },
      );
    if (type === "delete")
      res = await axios.delete(url, {
        headers: {
          ...headers,
        },
      });
    if (type === "file") {
      res = await axios.post(
        `/api/v1/file`,
        { ...data },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
    }

    let response = res?.data;
    if (!["file", "get", "patch"]?.includes(type))
      if (!noToast) toast.success(res?.data?.message);
    if (getter) getter(response);
    return { response };
  } catch (err) {
    if (err) console.log({ error: err.response?.data, err });
    if (err?.response?.status === 429) toast.error(err?.response?.data);
    if ((type && type !== "get") || (type && type === "get" && noToast)) {
      let error = err.response?.data?.error;
      if (error && error?.length > 1) {
        return { errArr: error };
      } else {
        let errMsg =
          err?.response?.data?.message || error?.[0]?.message || err?.message;

        if (errMsg === "Invalid Authentication, Unauthorized User") {
          localStorage.clear();
          window.location.reload();
        } else return { errMsg };
      }
    }
  }
};

export let numberWithCommas = (x) => {
  return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
};

const useGenFetcher = () => {
  let { getErrorText, clearErrors } = useErrorStore(),
    { getUser, getUserFail, getUserLoading } = useAuthStore(),
    examType = useExamTypeStore(),
    subjects = useSubjectStore(),
    years = useYearStore(),
    plans = usePlanStore(),
    loadUser = async () => {
      let token = localStorage.getItem(TOKEN);
      if (token) {
        SetAuthToken(token);

        getUserLoading();
        clearErrors();
        try {
          let res = await axios.get(`/api/v1/user`);
          // console.log({ res: res?.data });
          if (!res?.data?.data?.isAdmin) {
            getUser(res.data);
          } else {
            getUserFail();
            getErrorText("Unauthorized User, Access denied");
          }
        } catch (err) {
          if (err) console.log({ error: err.response?.data, err });
          if (err?.response?.status === 429) toast.error(err?.response?.data);
          getUserFail();
          getErrorText(
            err?.response?.data?.message ||
              err?.response?.data?.error?.[0]?.message ||
              "",
          );
        }
      }
      apiCall({
        type: "get",
        url: "/api/v1/examType",
        getter: (d) => examType?.getLogger(d),
      });
      apiCall({
        type: "get",
        url: "/api/v1/subject",
        getter: (d) => subjects?.getLogger(d),
      });
      apiCall({
        type: "get",
        url: "/api/v1/year",
        getter: (d) => years?.getLogger(d),
      });
      apiCall({
        type: "get",
        url: "/api/v1/plan",
        getter: (d) => plans?.getLogger(d),
      });
    };
  return { loadUser };
};

export default useGenFetcher;
