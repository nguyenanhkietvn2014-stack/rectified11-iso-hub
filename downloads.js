/* Rectified 11 ISO Hub — các liên kết ISO công khai trên MEGA. */
const DOWNLOADS = {
  v1:   { iso: "https://mega.nz/file/RR9mAA6b#Y4-3NmM3NAOHsdfvzV12HvhH-QNxrL1Cq2i5jHAp5Kw", zip: "" },
  v31:  { iso: "https://mega.nz/file/ZM8RXK5C#GSDESeBY1Db3IHFqKL4saR3eqV1dKrUvY_C9GT5ZSAY", zip: "" },
  v207: { iso: "https://mega.nz/file/IUcyECJI#ayvG6v4ndJ80LUTi8PTGrqQK-c4BysGYy-8t25vPiU0", zip: "" }
};

document.querySelectorAll("[data-download][data-kind]").forEach(link => {
  const version = link.dataset.download;
  const kind = link.dataset.kind;
  const url = DOWNLOADS[version]?.[kind] || "";
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  link.addEventListener("click", event => {
    if (!url) {
      event.preventDefault();
      const box = document.getElementById("missing");
      if (box) {
        box.style.display = "block";
        box.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  });
});
