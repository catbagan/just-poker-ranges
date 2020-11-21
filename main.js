////////////
// Constants
////////////
const HANDS = [
  [
    "AA",
    "AKs",
    "AQs",
    "AJs",
    "ATs",
    "A9s",
    "A8s",
    "A7s",
    "A6s",
    "A5s",
    "A4s",
    "A3s",
    "A2s",
  ],
  [
    "AKo",
    "KK",
    "KQs",
    "KJs",
    "KTs",
    "K9s",
    "K8s",
    "K7s",
    "K6s",
    "K5s",
    "K4s",
    "K3s",
    "K2s",
  ],
  [
    "AQo",
    "KQo",
    "QQ",
    "QJs",
    "QTs",
    "Q9s",
    "Q8s",
    "Q7s",
    "Q6s",
    "Q5s",
    "Q4s",
    "Q3s",
    "Q2s",
  ],
  [
    "AJo",
    "KJo",
    "QJo",
    "JJ",
    "JTs",
    "J9s",
    "J8s",
    "J7s",
    "J6s",
    "J5s",
    "J4s",
    "J3s",
    "J2s",
  ],
  [
    "ATo",
    "KTo",
    "QTo",
    "JTo",
    "TT",
    "T9s",
    "T8s",
    "T7s",
    "T6s",
    "T5s",
    "T4s",
    "T3s",
    "T2s",
  ],
  [
    "A9o",
    "K9o",
    "Q9o",
    "J9o",
    "T9o",
    "99",
    "98s",
    "97s",
    "96s",
    "95s",
    "94s",
    "93s",
    "92s",
  ],
  [
    "A8o",
    "K8o",
    "Q8o",
    "J8o",
    "T8o",
    "98o",
    "88",
    "87s",
    "86s",
    "85s",
    "84s",
    "83s",
    "82s",
  ],
  [
    "A7o",
    "K7o",
    "Q7o",
    "J7o",
    "T7o",
    "97o",
    "87o",
    "77",
    "76s",
    "75s",
    "74s",
    "73s",
    "72s",
  ],
  [
    "A6o",
    "K6o",
    "Q6o",
    "J6o",
    "T6o",
    "96o",
    "86o",
    "76o",
    "66",
    "65s",
    "64s",
    "63s",
    "62s",
  ],
  [
    "A5o",
    "K5o",
    "Q5o",
    "J5o",
    "T5o",
    "95o",
    "85o",
    "75o",
    "65o",
    "55",
    "54s",
    "53s",
    "52s",
  ],
  [
    "A4o",
    "K4o",
    "Q4o",
    "J4o",
    "T4o",
    "94o",
    "84o",
    "74o",
    "64o",
    "54o",
    "44",
    "43s",
    "42s",
  ],
  [
    "A3o",
    "K3o",
    "Q3o",
    "J3o",
    "T3o",
    "93o",
    "83o",
    "73o",
    "63o",
    "53o",
    "43o",
    "33",
    "32s",
  ],
  [
    "A2o",
    "K2o",
    "Q2o",
    "J2o",
    "T2o",
    "92o",
    "82o",
    "72o",
    "62o",
    "52o",
    "42o",
    "32o",
    "22",
  ],
];

const HAND_RANKINGS = [
  "AA",
  "KK",
  "QQ",
  "JJ",
  "TT",
  "99",
  "88",
  "AKs",
  "AQs",
  "AKo",
  "77",
  "AJs",
  "ATs",
  "AQo",
  "KQs",
  "AJo",
  "KJs",
  "A9s",
  "66",
  "KTs",
  "ATo",
  "A8s",
  "KQo",
  "A7s",
  "QJs",
  "KJo",
  "K9s",
  "A9o",
  "55",
  "QTs",
  "A6s",
  "A5s",
  "A8o",
  "A4s",
  "KTo",
  "K8s",
  "Q9s",
  "QJo",
  "A7o",
  "A3s",
  "JTs",
  "K7s",
  "A2s",
  "44",
  "K9o",
  "QTo",
  "K6s",
  "A5o",
  "A6o",
  "Q8s",
  "K5s",
  "J9s",
  "A4o",
  "K8o",
  "Q9o",
  "K4s",
  "A3o",
  "JTo",
  "Q7s",
  "33",
  "K7o",
  "J8s",
  "T9s",
  "A2o",
  "K3s",
  "Q6s",
  "K2s",
  "K6o",
  "Q8o",
  "Q5s",
  "J9o",
  "K5o",
  "J7s",
  "T8s",
  "Q4s",
  "K4o",
  "Q3s",
  "22",
  "98s",
  "T9o",
  "Q7o",
  "T7s",
  "J6s",
  "J8o",
  "K3o",
  "Q2s",
  "Q6o",
  "J5s",
  "K2o",
  "Q5o",
  "T8o",
  "J7o",
  "J4s",
  "97s",
  "T6s",
  "J3s",
  "Q4o",
  "87s",
  "J2s",
  "T5s",
  "96s",
  "98o",
  "J6o",
  "Q3o",
  "T7o",
  "T4s",
  "Q2o",
  "J5o",
  "86s",
  "T3s",
  "95s",
  "97o",
  "T6o",
  "T2s",
  "J4o",
  "76s",
  "85s",
  "J3o",
  "94s",
  "87o",
  "75s",
  "J2o",
  "T5o",
  "93s",
  "96o",
  "92s",
  "84s",
  "65s",
  "T4o",
  "86o",
  "T3o",
  "74s",
  "95o",
  "83s",
  "64s",
  "76o",
  "54s",
  "T2o",
  "82s",
  "73s",
  "85o",
  "94o",
  "53s",
  "63s",
  "75o",
  "93o",
  "72s",
  "65o",
  "84o",
  "43s",
  "92o",
  "62s",
  "52s",
  "74o",
  "42s",
  "83o",
  "54o",
  "64o",
  "32s",
  "82o",
  "73o",
  "53o",
  "63o",
  "43o",
  "72o",
  "52o",
  "62o",
  "42o",
  "32o",
];

const DRAGGER_WIDTH = 5;

////////
// Utils
////////
const isPairHand = (hand) => hand.charAt(0) === hand.charAt(1);
const isSuitedHand = (hand) => hand.charAt(hand.length - 1) === "s";
const isOffsuitHand = (hand) => hand.charAt(hand.length - 1) === "o";
const isHandElement = (maybeHandElement) =>
  maybeHandElement != null &&
  maybeHandElement.classList != null &&
  maybeHandElement.classList.contains("hand");
const isSelectedHandElement = (hand) => hand.classList.contains("selected");

////////////
// App State
////////////
var rangeOfHands = [];
var savedRanges = {};
var isSelecting = null;
var isUpdatingEnabled = false;
var handsUpdates = [];

const enableUpdating = (element) => {
  isSelecting = null;
  if (isHandElement(element)) {
    updateHand(element);
  }
  isUpdatingEnabled = true;
};

const disableUpdating = () => {
  isUpdatingEnabled = false;
};

let isSliding = false;

/////////////////
// Initialization
/////////////////
const init = () => {
  const table = document.getElementById("hands");
  HANDS.forEach((row) => {
    const newRow = document.createElement("tr");
    row.forEach((hand) => {
      const newHand = document.createElement("td");
      newHand.id = hand;
      newHand.textContent = hand;
      newHand.classList.add("hand");
      if (isPairHand(hand)) {
        newHand.classList.add("pair");
      } else if (isSuitedHand(hand)) {
        newHand.classList.add("suited");
      } else if (isOffsuitHand(hand)) {
        newHand.classList.add("offsuit");
      } else {
        throw Error("unexpected hand");
      }
      newRow.appendChild(newHand);
    });

    table.appendChild(newRow);
  });

  document.addEventListener("mousedown", enableUpdating);
  document.addEventListener("mouseup", disableUpdating);

  Array.from(document.getElementsByClassName("hand")).forEach((element) => {
    element.addEventListener("mousedown", (e) => enableUpdating(e.target));
    element.addEventListener("mouseover", (e) =>
      isUpdatingEnabled ? updateHand(e.target) : undefined
    );
  });

  updateStyling();
  updateDisplayData();

  const slider = document.getElementById("slider");
  slider.addEventListener("mousedown", (e) => {
    isSliding = true;
    updateDragger(e);
  });
  document.addEventListener("mousemove", (e) =>
    isSliding ? updateDragger(e) : undefined
  );
  document.addEventListener("mouseup", () => (isSliding = false));
  const dragger = document.getElementById("dragger");
  dragger.style.width = DRAGGER_WIDTH;
  dragger.style.left = -DRAGGER_WIDTH;
  dragger.style.marginLeft = DRAGGER_WIDTH / 2;
};
window.onload = init;

///////////
// Main App
///////////
const updateHand = (handElement) => {
  const shouldSelectHand =
    isSelecting !== false && !isSelectedHandElement(handElement);
  const shouldDeselectHand =
    isSelecting !== true && isSelectedHandElement(handElement);

  if (shouldSelectHand) {
    isSelecting = true;
    rangeOfHands.push(handElement.id);
  } else if (shouldDeselectHand) {
    isSelecting = false;
    rangeOfHands = rangeOfHands.filter((h) => h !== handElement.id);
  }

  updateStyling();
  updateDisplayData();
};

const updateStyling = () => {
  Array.from(document.getElementsByClassName("hand")).forEach((element) => {
    if (rangeOfHands.includes(element.id)) {
      element.classList.add("selected");
      if (element.classList.contains("pair")) {
        element.classList.add("pair-selected");
      } else if (element.classList.contains("suited")) {
        element.classList.add("suited-selected");
      } else {
        element.classList.add("offsuit-selected");
      }
    } else {
      element.classList.remove("selected");
      if (element.classList.contains("pair")) {
        element.classList.remove("pair-selected");
      } else if (element.classList.contains("suited")) {
        element.classList.remove("suited-selected");
      } else {
        element.classList.remove("offsuit-selected");
      }
    }
  });
};

const updateDisplayData = () => {
  const numSelectedCombos = getNumCombos();
  const numTotalCombos = 1326;

  document.getElementById("num-selected").textContent = numSelectedCombos;
  document.getElementById("num-total").textContent = numTotalCombos;
  document.getElementById("num-percentage").textContent =
    ((numSelectedCombos / numTotalCombos) * 100).toFixed(2) + "%";
};

const getNumCombos = () =>
  rangeOfHands.reduce((num, hand) => {
    if (isPairHand(hand)) {
      return num + 6;
    } else if (isSuitedHand(hand)) {
      return num + 4;
    } else if (isOffsuitHand(hand)) {
      return num + 12;
    } else {
      throw Error("unexpected hand");
    }
  }, 0);

const saveRange = () => {
  // Get range name
  rangeNameElement = document.getElementById("range-name");
  rangeName = rangeNameElement.value;
  if (rangeName == null || rangeName.length === 0) {
    throw Error("name required to save range");
  }
  if (rangeOfHands.length === 0) {
    throw Error("range must have at least 1 hand");
  }

  // Only add to list if this is a new range
  shouldAddToList = savedRanges[rangeName] == null;

  // Save the range
  savedRanges[rangeName] = [...rangeOfHands];

  // Update the saved range list
  if (shouldAddToList) {
    savedRangesElement = document.getElementById("saved-ranges");
    button = document.createElement("button");
    button.id = `load-${rangeName}`;
    button.addEventListener("click", loadRange);
    button.innerHTML = rangeName;
    savedRangesElement.appendChild(button);
  }

  rangeNameElement.value = rangeNameElement.defaultValue;
};

const loadRange = (event) => {
  console.log(event);

  rangeOfHands = [...savedRanges[event.target.id.substr(5)]];

  updateStyling();
  updateDisplayData();
};

const resetRange = () => {
  rangeOfHands = [];

  updateStyling();
  updateDisplayData();
};

const updateDragger = (e) => {
  // Limit dragger position to width of slider
  const limitX = Math.min(
    Math.max(e.pageX, slider.offsetLeft),
    slider.offsetLeft + slider.offsetWidth
  );

  // Update dragger position
  dragger.style.left = limitX - slider.offsetLeft - DRAGGER_WIDTH;

  // Update chart using percentage from slider position
  delta = limitX - slider.offsetLeft;
  percent = delta / slider.offsetWidth;
  updateRangeFromSlider(percent);
};

const updateRangeFromSlider = (percent) => {
  end = Math.ceil(percent * HAND_RANKINGS.length);
  rangeOfHands = HAND_RANKINGS.slice(0, end);

  updateStyling();
  updateDisplayData();
};
