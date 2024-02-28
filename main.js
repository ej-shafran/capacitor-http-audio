const AUDIO_URL =
  "https://archive.org/download/Old_Radio_Adverts_01/OldRadio_Adv--1957_Chevrolet.mp3";

async function main() {
  try {
    document.querySelector("#output").textContent = "Loading...";

    const res = await fetch(AUDIO_URL);
    const arrayBuffer = await res.arrayBuffer();
    const ctx = new AudioContext();
    const data = (await ctx.decodeAudioData(arrayBuffer)).getChannelData(0);

    document.querySelector("#output").textContent =
      `Done! Got ${data.byteLength} bytes`;
  } catch (error) {
    document.querySelector("#output").textContent =
      "Failed with an error. See console for details.";
    console.error(error);
  }
}

main();
