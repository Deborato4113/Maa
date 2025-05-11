const messages = [
    "You always know how to make me smile 😊",
    "আমার গান থেকে শুরু করে দিদির নাচ সবটাই তোমার অনুপ্রেরণায় শেখা ✨",
    "তোমায় একবার জড়িয়ে ধরলে পৃথিবীর সব কিছু যেন ঠিক হয়ে যায় 🤗",
    "পৃথিবীর যেখানেই চলে যাই, তুমি থাকলে সেই জায়গাটাকে বাড়ির মতন feel korte বেশি সময় লাগে না 🏡",
    "তাই আজ Mother's Day te এই ছোট্ট প্রচেষ্টা তোমার জন্য :)"
  ];
  
  const messageContainer = document.getElementById("messages");
  
  // Insert beating heart next to heading
  const heading = document.getElementById("heading");
  if (heading) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.className = "beating-heart";
    heart.style.marginLeft = "0.5rem";
    heading.appendChild(heart);
  }
  
  // Add styles for beating heart animation
  const style = document.createElement("style");
  style.textContent = `
    .beating-heart {
      display: inline-block;
      animation: beat 0.6s infinite ease-in-out;
      transform-origin: center;
    }
  
    @keyframes beat {
      0%, 100% {
        transform: scale(1);
        color: #e63946;
      }
      50% {
        transform: scale(1.6);
        color: #ff6b81;
      }
    }
  `;
  document.head.appendChild(style);
  
  // Display messages one by one
  messages.forEach((msg, index) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "message";
      div.textContent = msg;
      messageContainer.appendChild(div);
  
      setTimeout(() => {
        div.classList.add("show");
  
        if (index === messages.length - 1) {
          const finalMessage = document.getElementById("finalMessage");
          finalMessage.style.display = "block";
  
          const img = document.createElement("img");
          img.src = "maa.jpg"; // Replace with actual photo path
          img.alt = "Mom Photo";
          img.style.marginTop = "1.5rem";
          img.style.width = "80%";
          img.style.maxWidth = "500px";
          img.style.borderRadius = "1.5rem";
          img.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)";
          img.style.display = "block";
          img.style.marginLeft = "auto";
          img.style.marginRight = "auto";
  
          finalMessage.appendChild(img);
        }
      }, 100);
    }, index * 4000);
  });
  
  // Photo slideshow with fade transition
  const photos = [
    "eye.jpg",
    "didi.jpg",
    "didu.jpg",
    "sitting.jpg"
  ];
  
  let photoIndex = 0;
  const slideshow = document.getElementById("slideshow");
  
  slideshow.style.transition = "opacity 1.5s ease-in-out";
  
  setInterval(() => {
    slideshow.style.opacity = 0;
    setTimeout(() => {
      photoIndex = (photoIndex + 1) % photos.length;
      slideshow.src = photos[photoIndex];
      slideshow.style.opacity = 1;
    }, 1500);
  }, 8000);
  

  window.addEventListener("click", () => {
    const audio = document.getElementById("bgAudio");
    if (audio) {
      audio.play().catch((e) => {
        console.log("Auto-play failed:", e);
      });
    }
  }, { once: true });
  