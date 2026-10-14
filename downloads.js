/* Rectified 11 ISO Hub — liên kết ISO trên MEGA. */
const DOWNLOADS = {
  v1: "https://mega.nz/file/RR9mAA6b#Y4-3NmM3NAOHsdfvzV12HvhH-QNxrL1Cq2i5jHAp5Kw",
  v31: "https://mega.nz/file/ZM8RXK5C#GSDESeBY1Db3IHFqKL4saR3eqV1dKrUvY_C9GT5ZSAY",
  v207: "https://mega.nz/file/IUcyECJI#ayvG6v4ndJ80LUTi8PTGrqQK-c4BysGYy-8t25vPiU0"
};

document.querySelectorAll("[data-download]").forEach(link => {
  const url = DOWNLOADS[link.dataset.download];
  if (!url) return;
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});
