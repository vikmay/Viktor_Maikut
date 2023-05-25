let linkList = document.getElementById('link-list');
    let links = linkList.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      let link = links[i];

      if (link.href.indexOf('http://') === 0) {
        link.classList.add('external-link');
      }
    }