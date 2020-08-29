function pageCount(n, p) {
    /*
		  n: the number of pages in the book
		  p: the page number to turn to
    */

    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);
}