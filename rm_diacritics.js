var rmDiacritics  = function (text) {
    //keep only standard Arabic characters (without diacritics, but keep shadda (\u0651))
  text = text.replace(/([^\u0621-\u063A\u0641-\u064A\u0651\u0660-\u0669a-zA-Z 0-9])/g, '');

  //normalize Arabic
  text = text.replace(/(آ|إ|أ)/g, 'ا');

  return text;
}

document.body.innerHTML = document.body.innerHTML.replace(/\$[^\$]+\$/g, rmDiacritics);
