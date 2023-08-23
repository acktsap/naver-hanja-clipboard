javascript:(function(){
    const selector = "#content > div.section.section_entry._section_entry > div > div.entry_title._guide_lang > strong > span";
    const tag = document.querySelector(selector);
    const value = tag.innerText
        .replaceAll('\t', '')
        .replaceAll('\n', '')
        .replaceAll(' ', '');
    window.navigator.clipboard.writeText(value);
})();
