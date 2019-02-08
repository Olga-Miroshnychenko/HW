const newsService = new NewsService();
const uiService = new NewsUI();
const found = new NotificationUI();

// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];
const phraseInput = form['search'];

function onSelectChange(event) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    if (!country || !category) return console.error('Введите страну и категорию для поиска');
    newsService.getTopHeadlinesNews(category, country, (response) => {
        const { totalResults, articles } = response;
        // console.time();
        uiService.clearContainer();
        // console.timeEnd();
        // console.time();
        articles.forEach((article) => uiService.addArticle(article));
        // console.timeEnd();
    });
}
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);
function onInputChange(event) {
    const phrase = phraseInput.value;
    if (phrase.length < 3) return console.error('Введите запрос для поиска');
    newsService.getNewsByPhrase(phrase, (response) => {
        const { totalResults, articles } = response;
        console.time();
        uiService.clearContainer();
        console.timeEnd();
        console.time();
        articles.forEach((article) => uiService.addArticle(article));
        console.timeEnd();
        if(totalResults===0){return found.addTotalResult(0)};
    });
}
phraseInput.addEventListener('keyup', onInputChange);


