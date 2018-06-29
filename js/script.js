var link = document.querySelector(".modal-button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");

var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try
{
  storage = localStorage.getItem("fullname");
}
catch (err)
{
  isStorageSupport = false;
}

link.addEventListener("click", function (evt)
{
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage)
  {
    fullname.value = storage;
    email.focus();
  }
  else
  {

    fullname.focus();
  }
});

close.addEventListener("click", function (evt)
{
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt)
{
  if (!fullname.value || !email.value)
  {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
  else
  {
    if (isStorageSupport)
    {
      localStorage.setItem("fullname", fullname.value);
    }
  }
});

window.addEventListener("keydown", function (evt)
{
  if (evt.keyCode === 27)
  {
    evt.preventDefault();
    if (popup.classList.contains("modal-show"))
    {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
