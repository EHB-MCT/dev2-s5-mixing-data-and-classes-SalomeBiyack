export default class Joke {
    constructor(category,joke) {
    this.category = category;
    this.joke = joke;

}
get htmlString(){
    return `
    <h2>$(this.setup)</h2>
    <h3>$(this.joke)</h3>
    `
}
}
 const joke = new Joke('Pun,How do you make holy water? You boil the hell out of it.');
