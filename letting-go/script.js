var isEnvelopeClosed = false;
var isReadyToLetGo = false;

function letItGo() {
  document.getElementById("envelope").classList.add("hidden");

  // Check if the hiddenImage element exists
  var hiddenImage = document.getElementById("hiddenImage");
  if (hiddenImage) {
    hiddenImage.style.display = "block";
    hiddenImage.parentNode.removeChild(hiddenImage);
  }

  document.getElementById("positiveMessage").classList.remove("hidden");

  // Hide the instructions
  var instructionsText = document.getElementById("instructions");
  if (instructionsText) {
    instructionsText.style.display = "none";
  }
}

function reset() {
  var openEnv = document.getElementById("open-env");
  var closedEnv = document.getElementById("closed-env");
  var overlayText = document.getElementById("overlay-text");
  var instructionsText = document.getElementById("instructions");

  openEnv.src = "OpenEnv.png";
  closedEnv.style.display = "none";
  overlayText.classList.add("hidden");

  // Reset the positive message
  document.getElementById("positiveMessage").classList.add("hidden");

  document.getElementById("letGoText").value = "";
  document.getElementById("letGoText").style.display = "block";
  document.getElementById("envelope").classList.add("hidden");

  // Reset the instructions
  instructionsText.innerText = "Write what you want to let go of...";
  instructionsText.style.display = "block";

  // Reset the states
  isEnvelopeClosed = false;
  isReadyToLetGo = false;
}

function toggleEnvelope() {
  var openEnv = document.getElementById("open-env");
  var closedEnv = document.getElementById("closed-env");
  var overlayText = document.getElementById("overlay-text");

  document.getElementById("letGoText").style.display = "none";
  document.getElementById("instructions").innerText =
    "Click the envelope to let go. You got this! <3";

  console.log("Before toggling:", isEnvelopeClosed, isReadyToLetGo);

  if (!isReadyToLetGo) {
    if (!isEnvelopeClosed) {
      openEnv.src = "ClosedEnv.png";
      overlayText.classList.remove("hidden");

      isEnvelopeClosed = true;
    } else {
      // If the envelope is already closed, set ready to let go
      isReadyToLetGo = true;
      // Immediately transition to positive message
      letItGo();
    }
  } else {
    // If ready to let go, trigger the letItGo function
    letItGo();
    // Reset the states
    isEnvelopeClosed = false;
    isReadyToLetGo = false;
  }

  console.log("After toggling:", isEnvelopeClosed, isReadyToLetGo);
}

// Event listener for envelope click
document.getElementById("closed-env").addEventListener("click", function () {
  // Ensure isReadyToLetGo is true before triggering letItGo
  if (isReadyToLetGo) {
    letItGo();
    // Reset the states
    isEnvelopeClosed = false;
    isReadyToLetGo = false;
  }
});
