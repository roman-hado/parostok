import { deleteCookie, setCookie } from "@/alpine/utils/cookie";

export const cookieActions = () => ({
  init() {
    const searchString = new URLSearchParams(window.location.search);
    const cnv_id = searchString.get("cnv_id");
    const user_id = searchString.get("user_id");
    const uclick = searchString.get("uclick");
    const aff_id = searchString.get("aff_id");
    const gclid = searchString.get("gclid");
    const fbclid = searchString.get("fbclid");

    if (aff_id) {
      setCookie("aff_id", `${aff_id}`, {
        secure: true,
        "max-age": 3600 * 24 * 30,
      });

      if (cnv_id)
        setCookie("cnv_id", `${cnv_id}`, {
          secure: true,
          "max-age": 3600 * 24 * 30,
        });
      if (user_id)
        setCookie("user_id", `${user_id}`, {
          secure: true,
          "max-age": 3600 * 24 * 30,
        });
      if (uclick)
        setCookie("uclick", `${uclick}`, {
          secure: true,
          "max-age": 3600 * 24 * 30,
        });
    } else if (gclid || (fbclid && aff_id == null)) {
      deleteCookie("aff_id");
      deleteCookie("cnv_id");
      deleteCookie("user_id");
      deleteCookie("uclick");
    }
  },
});
