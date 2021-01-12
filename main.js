//fix this to actually work:)
let ol = document.querySelector('ol');

const links = [
    {
      label: "01",
      url: "week01/index.html"
    }
  ]

links.forEach(
  link => {
    ol.itemHTML +=
    '<li><a href="${link.url}">'
  }
)
  