// ⚠️ 上線前請改為您的 Replit API 網址（含 https://，結尾無 /）
// 範例：window.API_BASE = "https://satisfaction-survey-api.您的帳號.repl.co";
window.API_BASE = "http://localhost:3000";

// 兌換券前端公開檢視頁路徑（QR Code 內含的網址會指向這裡）
// 若您改 GitHub Pages 為 https://yourname.github.io/satisfaction-survey/，
// 就改為對應的網址（注意 coupon.html 的相對位置）
window.COUPON_PAGE_URL = function (code) {
  return location.origin + location.pathname.replace(/[^\/]*$/, "") + "coupon.html?code=" + encodeURIComponent(code);
};
