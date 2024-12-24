const url = `${location.protocol}//${location.host}`;

const form = document.querySelector('form');
const getFormButton = document.querySelector('#get-form');

getFormButton.onclick = async (e) => {
  e.preventDefault();

  const input = document.querySelector('#url');
  input.style.outline = 'solid #74c69d';

  const googleUrl = input.value;

  if (!googleUrl) return;
  if (
    !/docs.google.com\/forms/.test(googleUrl) ||
    !/viewform/.test(googleUrl)
  ) {
    alert('URL not valid');
    return;
  }

  let htmlData = await getForm(url, googleUrl);

  htmlData = scriptInjection(htmlData);
  download(htmlData);

  return false;
};

async function getForm(url, googleUrl) {
  const response = await fetch(url + '/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `url=${googleUrl}`,
  });
  return response.text();
}

function scriptInjection(htmlData) {
  const host = location.host;

  // Remove original base-js
  htmlData = htmlData.replace('<script id="base-js"', '');

  htmlData = htmlData.replace(
    '</body>',
    `<script id="base-js"
		src="https://www.gstatic.com/_/freebird/_/js/k=freebird.v.en_GB.MmBwGx-H100.O/d=1/rs=AMjVe6jy8RpWse6xPbm0o-odrISMopXfQA/m=viewer_base"
		nonce="C8Cnb8wyms2GLF2VgUfRSg" ></script><script src="${url}/inject.js"></script></body>`
  );
  return htmlData;
}

function download(htmlData) {
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlData);
  a.download = 'borang_' + Date.now();
  document.body.appendChild(a);

  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
  }, 1000);
}
