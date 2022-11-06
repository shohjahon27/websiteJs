window.addEventListener("DOMContentLoaded", () => {
  const drama = document.querySelector( ".promo__genre" ),
    ads = document.querySelectorAll( ".promo__adv img " ),
    promoBg = document.querySelector( ".promo__bg" ),
    lists = document.querySelector( ".promo__interactive-list" ),
    inputVal = document.querySelector( ".adding__input" ),
    checkbox = document.querySelector( "[type='checkbox']" ),
    submitBtn = document.querySelector( "#submit" ),
    toastBody = document.querySelector( ".toast-body" ),
    Spin = document.querySelector( '#spin' );
  
  
  // Loading
  const toastTrigger = document.getElementById("submit");
  const toastLiveExample = document.getElementById( "liveToast" );
  if ( toastTrigger ) {
    if ( inputVal == 0 ) {
     return inputVal.value = `bo'sh ${toastBody.value}`;
    }
    toastTrigger.addEventListener("click", () => {
      const toast = new bootstrap.Toast(toastLiveExample);

      toast.show();
    });
  }

  // setTimeout( () => { 
  //   Spin.style.opacity = 0;
  //   setTimeout( () => { 
  //     Spin.style.display = "none";
  //   } , 500)
  // } , 2000);

  const seriesDb = {
    series: [
      "OMAR",
      "THE FINAL LEGACY",
      "ERTUGRUL",
      "MAGNIFICENT CENTURY",
      "GREAT SELJUKS: GUARDIANS...",
    ],
  };

  function makeChanges() {
    drama.textContent = "";

  }
  promoBg.style.backgroundImage = "url(img/1.jpg)";

  const sortArr = (arr) => {
    arr.sort();
  };

  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let newsLetter = inputVal.value;
    const checkedBox = checkbox.checked;

    if (newsLetter) {
      if (newsLetter.length > 18) {
        newsLetter = `${newsLetter.substring(0, 18)}...`;
      }
      if (checkedBox) {
        alert("sevimli serial qo'shilsinmi?");
      }
      seriesDb.series.push(newsLetter);
      sortArr(seriesDb.series);
      createSeriesList(seriesDb.series, lists);
    }

    event.target.reset(newsLetter);
  });

  function createSeriesList(series, parent) {
    parent.innerHTML = "";
    sortArr( series );

    series.forEach((item, id) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${id + 1}. ${item}
        <div class="delete"></div>
    </li>
    `;
    });

    document.querySelectorAll(".delete").forEach((trash, id) => {
      trash.addEventListener("click", () => {
        trash.parentElement.remove();
        seriesDb.series.splice(id, 1);
        createSeriesList(series, parent);
      });
    });
  }
  sortArr(seriesDb.series);
  makeChanges();
  createSeriesList(seriesDb.series, lists);
});
