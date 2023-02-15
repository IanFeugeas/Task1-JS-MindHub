export function createCards(events) {
  return (divCards += `<div id="tarjetas" class="card">
    <div class="divimgcards"><img
      id="imgcard"
      src= ${infocard.image}
      class="card-img-top"
      alt=""
    /></div>
    <div id="bodycard" class="card-body">
      <h5 class="card-title"> ${infocard.name}</h5>
      <p class="card-text">
        ${infocard.description}
      </p>
      <div class="divprice">
        <p class="textprice"><b>Price:</b> $ ${infocard.price}</p>
        <a id="detailsbutton" href="./details.html?id=${infocard._id}" class="btn btn-primary" ><b> Go details</b></a>
      </div>
    </div>
  </div>`);
}

export function addCard(events, cards) {
  let divCards = "";
  for (let event of events) {
    divCards += createCards(event);
  }
  cards.innerHTML = divCards;
}

export function upCommingCards(events, currentDate, upcoming, cards) {
  let currentEvents = "";

  for (let event of events) {
    if (event.date > currentDate && upcoming) {
      currentEvents += allCards(event);
    } else if (event.date < currentDate && !upcoming) {
      currentEvents += allCards(event);
    }
    cards.innerHTML = currentEvents;
  }
}

export function addCheckbox(category, checks) {
  let divChecks = "";
  for (let categories of category) {
    divChecks += createCheckbox(categories);
  }
  checks.innerHTML = divChecks;
}

export function createCheckbox(check) {
  return `<div>
      <input
      type="checkbox"
      id="${check}"
      value="${check}"
      />
      <label for="${check}">${check}</label>
      </div>`;
}

export function categoryFilter(event) {
  let filterCheckbox = [
    ...document.querySelectorAll('input[type="checkbox"]:checked'),
  ].map((element) => element.value);
  if (filterCheckbox.length === 0) {
    return event;
  }
  return event.filter((filters) => inputFilter.includes(filters.category));
}

export function filterSearch(search, e) {
  let arrayFilter = e.filter((searchFilter) =>
    searchFilter.name.toLowerCase().includes(search)
  );
  return arrayFilter;
}

export function errorSearch() {
  return `<div class="diverror"><a class="ancorerror" href="./index.html">Return</a></div>`;
}

export function printError(card, error) {
  errorMessage(error);
}

export function createDetailsCard(events, cards) {
  cards.innerHTML = detailsCard(events);
}

export function detailsCard(event) {
  return `<div id="tarjetadetails" class="card">
    <img
    id="imgdetails"
    src="${event.image}"
    class="card-img-top"
    alt=""
    />
    </div>
    <div id="tarjetadetails2" class="card">
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">
            "${event.description}"
          </p>
          <p class="card-text"><b>Date:</b>${event.date}</p>
          <p class="card-text"><b>Category:</b>${event.category}</p>
          <p class="card-text"><b>Place:</b>${event.place}</p>
          <p class="card-text"><b>Capacity:</b>${event.capacity}</p>
          <p class="card-text"><b>Assistance/Estimate:</b> ${asistOrEstimate(
            event
          )}</p>
          <p class="card-text"><b>Price:</b> $ ${eventDate.price}</p>
        </div>`;
}

export function asistOrEstimate(contain) {
  let see = "";
  let assistance = "Assistance";
  let estimate = "Estimate";
  if (contain.assistance) {
    see = assistance + " " + contain.assistance;
  } else if (contain.estimate) {
    see = estimate + " " + contain.estimate;
  }
  return see;
}
