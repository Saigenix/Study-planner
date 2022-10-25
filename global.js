// All common methods come here

const navigate = (page) => {
    const href = window.location.href.split('/');
    href[href.length - 1] = `${page}.html`;
    window.location.href = href.join('/');
}

Object.assign(window, { navigate });
