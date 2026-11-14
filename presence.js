
import { auth, rtdb } from "./script.js";

import {
  ref,
  onValue,
  onDisconnect,
  set,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";

let presenceStarted = false;

onAuthStateChanged(auth, (user) => {
  if (!user || presenceStarted) return;

  presenceStarted = true;

  const connectedRef = ref(rtdb, ".info/connected");
  const statusRef = ref(rtdb, "status/" + user.uid);

  onValue(connectedRef, async (snapshot) => {
    if (snapshot.val() !== true) return;

    try {
      await onDisconnect(statusRef).set({
        state: "offline",
        last_changed: serverTimestamp()
      });

      await set(statusRef, {
        state: "online",
        last_changed: serverTimestamp()
      });

      console.log("Digitchat: You are online.");
    } catch (error) {
      console.error("Presence error:", error);
    }
  });
});
