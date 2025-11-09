function shiftHeader(renderer){
  if(!renderer) renderer = new marked.Renderer();
  renderer.heading = function({ depth, text}) {
    console.log(depth, text);
    // Shift h2 -> h3 and h3 -> h4
    console.log(`Shifting header: depth ${depth} -> depth ${depth+1}, text: ${text}`);
    if (depth < 6) depth += 1;
    return `<h${depth}>${text}</h${depth}>`;
  };
  return renderer;
}

const shiftedRenderer = shiftHeader();

async function loadTerminal() {
  document.getElementById("content").innerHTML = `
    <div id="terminal" tabindex="0" role="textbox" aria-multiline="true">
      <span id="text"></span><span id="cursor">|</span>
    </div>`;
  const terminal = document.getElementById('terminal');
  const textElement = document.getElementById('text');
  console.log(textElement.innerHTML)

  let command = '';
  let cwd = `~`
  let previousContent = `<span class="prompt">reader@ackhava.dev:${cwd} $</span> `;

  const folders = [
    '~',
    "~/about",
    "~/projects",
    "~/contact",
  ]

  const files = {
    '~/about/index.html': "<h1>About Me</h1><p>This is the about page.</p>",
    '~/projects/index.html': "<h1>Projects</h1><p>This is the projects page.</p>",
    '~/contact/index.html': "<h1>Contact</h1><p>This is the contact page.</p>",
    '~/resume.md': `${await fetch('resume.md').then(res => res.text())}`,
  }

  let isFocused = false;

  function updateDisplay() {
    const oldScrollHeight = terminal.scrollHeight;
    console.log(oldScrollHeight);
    textElement.innerHTML = `${previousContent} ${command}`;
    requestAnimationFrame(() => {
      // keep the terminal scrolled to bottom when new lines are appended
      terminal.scrollTop += terminal.scrollHeight - oldScrollHeight;
      console.log(terminal.scrollHeight, oldScrollHeight);
    });
  }

  updateDisplay();

  terminal.addEventListener('focus', () => {
    isFocused = true;
    terminal.classList.add('focused');
  });

  terminal.addEventListener('blur', () => {
    isFocused = false;
    terminal.classList.remove('focused');
  });

  document.addEventListener('click', (e) => {
    if (terminal.contains(e.target)) {
      terminal.focus();
    } else {
      // clicking outside should blur the terminal so keys do their normal browser actions
      terminal.blur();
    }
  });

  terminal.addEventListener('keydown', (event) => {
    if (!isFocused) return;

    event.preventDefault();
    const key = event.key;
    const linePx = 20;
    if (key === 'ArrowDown') {
      event.preventDefault();
      terminal.scrollTop = Math.min(terminal.scrollTop + linePx, terminal.scrollHeight - terminal.clientHeight);
      return;
    }
    if (key === 'ArrowUp') {
      event.preventDefault();
      terminal.scrollTop = Math.max(terminal.scrollTop - linePx, 0);
      return;
    }
    if (key === 'PageDown') {
      event.preventDefault();
      terminal.scrollTop = Math.min(terminal.scrollTop + terminal.clientHeight, terminal.scrollHeight - terminal.clientHeight);
      return;
    }
    if (key === 'PageUp') {
      event.preventDefault();
      terminal.scrollTop = Math.max(terminal.scrollTop - terminal.clientHeight, 0);
      return;
    }
    if (key === 'Home') {
      event.preventDefault();
      terminal.scrollTop = 0;
      return;
    }
    if (key === 'End') {
      event.preventDefault();
      terminal.scrollTop = terminal.scrollHeight;
      return;
    }
  });

  terminal.addEventListener('keyup', (event) => {
    event.preventDefault();
    const key = event.key;
    if (key === 'Enter') {
      processCommand(command);
      command = '';
    } else if (key === 'Backspace') {
      command = command.slice(0, -1);
    } else if (key.length === 1) {
      command += key;
    }
    updateDisplay();
  });

  function moveDirectory(current, target) {
    let next = current;
    if (target === '..') {
      next = current.split('/').slice(0, -1).join('/');
    } else if (target[0] === '~') {
      next = target;
    } else if (target.startsWith('./')) {
      next = current + target.slice(2);
    } else if (target !== '.') {
      next = current + '/' + target;
    }
    return next;
  }

  function escapeHtml(text) {
    return text
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function processCommand(cmd) {
    previousContent += ` ${cmd}<br>`;
    if (cmd.trim() !== "") {
      if (cmd.trim().split(' ')[0] == 'cd') {
        if (cmd.trim().split(' ').length !== 2) {
          previousContent += `<span class="error">cd takes exactly one argument</span><br>`;
        } else {
          const targetDir = cmd.trim().split(' ')[1];
          console.log(targetDir)
          let new_cwd = moveDirectory(cwd, targetDir);

          if (folders.includes(new_cwd)) {
            cwd = new_cwd;
          } else {
            previousContent += `<span class="error">No such directory: ${targetDir}</span><br>`;
          }
        }
      } else if (cmd.trim().split(' ')[0] === 'ls') {
        if (cmd.trim().split(' ').length !== 1) {
          previousContent += `<span class="error">ls takes no arguments</span><br>`;
        } else {
          const contents = new Set();
          folders.filter(folder => folder.startsWith(cwd + '/')).map(folder => folder.split('/').pop()).forEach(name => contents.add(name));
          Object.keys(files).filter(file => file.startsWith(cwd + '/')).map(file => file.split('/').pop()).forEach(name => contents.add(name));
          previousContent += Array.from(contents).join('<br>') + '<br>';
        }
      } else if (cmd.trim().split(' ')[0] === 'cat') {
        if (cmd.trim().split(' ').length !== 2) {
          previousContent += `<span class="error">cat takes exactly one argument</span><br>`;
        } else {
          const targetFile = cmd.trim().slice(4);
          let filePath = moveDirectory(cwd, targetFile);

          if (files[filePath]) {
            if (filePath.endsWith('.md')) {
              previousContent += marked.parse(files[filePath]) + '<br>';
            } else {
              previousContent += escapeHtml(files[filePath]) + '<br>';
            }
          } else {
            previousContent += `<span class="error">No such file: ${targetFile}</span><br>`;
          }
        }
      } else {
        previousContent += `<span class="error">Unrecognized command: ${cmd.trim().split(' ')[0]}</span><br>`;
      }
    } else {
      previousContent += "\n";
    }
    previousContent += `<span class="prompt">reader@ackhava.dev:${cwd} $</span> `;
    updateDisplay();
  }
}

async function loadPage(page) {
  document.getElementById("content").innerHTML = marked.parse(await fetch(`${page}.md`).then(res => res.status === 200 ? res.text() : (res.status === 404 ? `<h1>Page not found!</h1><p><a href="#">Return home</a></p><p><a href="#terminal">Open Terminal</a></p>` : '<h1>Server Error!</h1><p><a href="#">Return home</a></p><p><a href="#terminal">Open Terminal</a></p>')));
}

async function loadMarkdownFetch() {
  const markdownFetchDivs = document.querySelectorAll('.markdown-fetch');
  await Promise.all([...markdownFetchDivs].map(async (div) => {
    if(div.classList.contains("rendered")) return;
    const file = div.getAttribute('data-render-file');
    const blocks = parseInt(div.getAttribute('data-blocks'), 10) || undefined;
    console.log(blocks)
    const headingShift = div.hasAttribute('data-heading-shift');

    const markdownContent = await fetch(file).then(res => res.text()).then(markdown => markdown.split('\n\n').slice(0, blocks).join('\n\n'));
    const renderedContent = headingShift ? marked.parse(markdownContent, { renderer: shiftedRenderer }) : marked.parse(markdownContent);
    
    // Limit the number of blocks if specified
    const contentBlocks = renderedContent;
    div.innerHTML = contentBlocks;
    div.classList.add("rendered");
  }));
}

// Call the function after loading the terminal or index

async function applyHashRoute() {
  if(location.hash === '#terminal') {
    await loadTerminal();
  } else {
    await loadPage(location.hash.slice(1) || "index");
  }
  await loadMarkdownFetch();
  await loadMarkdownFetch();
  await loadMarkdownFetch();
}

window.addEventListener('hashchange', () => {
  applyHashRoute();
});

applyHashRoute();