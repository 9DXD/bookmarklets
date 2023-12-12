javascript:(function(){
    var popup = window.open("", "_blank", "width=300,height=300vh");
    popup.document.write(`
    <html>
    <head>
    <title>about:blank</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .custom-input {
            width: 100%;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
    </style>
    </head>
    <body>
    <h2>Bookmarklet Menu</h2>
    <form id='form'>
        <input type='text' class='custom-input' id='userInput' placeholder='Enter the number of the bookmarklet...'>
        <button type='submit'>Submit</button>
    </form>
    <p id='result'></p>
    <script>
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault();
            var userInput = document.getElementById('userInput').value;
            document.getElementById('result').textContent = 'You entered: ' + userInput;
        });
    </script>
    <hr>
    <ol>
        <li><a href="javascript: (function() {  window.__glitch_runs = window.__glitch_runs ? window.__glitch_runs + 1 : 1;  const MODES = {    STANDARD: %27STANDARD%27,    TURBO: %27TURBO%27  };  const OPTIONS = Object.assign(    { G_T: false, G_I: true, TURBO: false },    {G_T:true} || {}  );  const GLITCH_TEXT = OPTIONS.G_T;  const GLITCH_IMAGES = OPTIONS.G_I;  const MODE = OPTIONS.TURBO ? MODES.TURBO : MODES.STANDARD;  if (MODE === MODES.TURBO) {    window.__glitch_runs = 3;  }  const transformTranspose = (header, input, gap = 1) => {    const idx =      header + Math.floor(Math.random() * (input.length - header - gap));    const tmp = input[idx];    input[idx] = input[idx + gap];    input[idx + gap] = tmp;    return input;  };  const transformSubstitute = (header, input) => {    const by = Math.floor(Math.random() * 256);    const idx = header + Math.floor(Math.random() * (input.length - header));    input[idx] = by;    return input;  };  const transformText = str => {    let bytes = new TextEncoder(%27utf-8%27).encode(str);    const errors = Math.random() * (0.05 * str.length);    for (let i = 0; i < errors; i += 1) {      bytes =        Math.random() > 0.5          ? transformSubstitute(0, bytes)          : transformTranspose(            0,            bytes,            Math.floor(Math.random() * str.length - 1) + 1          );    }    const string = new TextDecoder(%27utf-8%27).decode(bytes);    return string;  };  const glitchImage = image => {    try {      image.onload = () => {};      image.style.backgroundColor = %27#262626';      const canvas = document.createElement('canvas');      const context = canvas.getContext('2d');      canvas.width = image.naturalWidth;      canvas.height = image.naturalHeight;      context.drawImage(image, 0, 0);      const data = canvas.toBlob(blob => {        const fileReader = new FileReader();        fileReader.onload = event => {          const data =            blob.size === event.target.result.byteLength              ? new Uint8Array(event.target.result)              : null;          image.onerror = () => {            image.src = URL.createObjectURL(blob);          };          const glitchOnce = () => {            const errors = Math.random() * 10 * window.__glitch_runs;            let corrupted = data.slice(0);            for (let i = 0; i < errors; i++) {              corrupted =                Math.random() > 0.5                  ? transformTranspose(100, corrupted)                  : transformSubstitute(100, corrupted);            }            const corruptBlob = new Blob([corrupted], { type: 'image/png' });            const corruptSrc = URL.createObjectURL(corruptBlob);            image.src = corruptSrc;          };          const glitchImageRaf = () => {            glitchOnce();            window.requestAnimationFrame(glitchImageRaf);          };          const glitchImageTimeout = (max = 300) => {            glitchOnce();            window.setTimeout(() => {              glitchImageTimeout(max);            }, Math.random() * max / 2 + Math.random() * max / 2);          };          if (MODE === MODES.STANDARD) {            glitchImageTimeout();          } else if (MODE === MODES.TURBO) {            glitchImageRaf();          }        };        fileReader.readAsArrayBuffer(blob);      }, 'image/jpeg');    } catch (e) {      return false;    }  };  const glitchText = n => {    const original = n.textContent;    const glitchText = () => {      n.textContent = transformText(original).replace(/ /g, '');    };    const glitchTextTimeout = (max = 1000) => {      glitchText();      window.setTimeout(() => {        glitchTextTimeout(max);      }, Math.random() * max / 2 + Math.random() * max / 2);    };    const glitchTextRaf = () => {      glitchText();      window.requestAnimationFrame(glitchTextRaf);    };    glitchTextTimeout();  };  const textNodesUnder = el => {    let n;    const a = [];    const walk = document.createTreeWalker(      el,      NodeFilter.SHOW_TEXT,      null,      false    );    while ((n = walk.nextNode())) {      a.push(n);    }    return a;  };  const setupGlitch = () => {    if (GLITCH_IMAGES) {      const images = document.querySelectorAll('img');      images.forEach(i => {        i.complete          ? glitchImage(i)          : (i.onload = event => glitchImage(event.target));      });    }    if (GLITCH_TEXT) {      const textNodes = textNodesUnder(document.body).filter(        n => n.textContent && n.textContent.length > 0 && n.textContent.trim()      );      textNodes.forEach(glitchText);    }  };  if (document.readyState === 'complete') {    setupGlitch();  } else {    document.body.addEventListener('load', setupGlitch);  }})();">Glitch Everything</a></li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
    </ol>
    <br>
    <hr>
    <footer>
        <p>Please note that you will have to put them into your bookmarks bar for some of them to work.</p>
    </footer>
    </body>
    </html>`);
    /*popup.document.close();
    window.onblur = function() {
        popup.close();
    };*/
})();
