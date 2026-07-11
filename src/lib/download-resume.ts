export const RESUME_URL = "https://bit.ly/priya-dsouza-cv";
export const RESUME_FILENAME = "Priya-DSouza-Resume.pdf";

export async function downloadResume(
  e?: { preventDefault: () => void }
): Promise<void> {
  e?.preventDefault();
  try {
    const res = await fetch(RESUME_URL, { redirect: "follow" });
    if (!res.ok) throw new Error("fetch failed");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = RESUME_FILENAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    // Fallback: open in new tab if CORS blocks fetch
    window.open(RESUME_URL, "_blank", "noreferrer");
  }
}
