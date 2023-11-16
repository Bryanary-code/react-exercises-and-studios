export default function BookList() {
   let pageTitle = "Recently Released Titles";
   let book1 = "https://www.booklistqueen.com/wp-content/uploads/the-mystery-guest-nita-prose.jpg";
   let book2 = "https://www.booklistqueen.com/wp-content/uploads/the-frozen-river-ariel-lawhon.jpg";
   let book3 = "https://www.booklistqueen.com/wp-content/uploads/the-future-naomi-alderman.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Mystery Guest by NITA PROSE" />
         <img src={book2} alt="The Frozen River by ARIEL LAWHON" />
         <img src={book3} alt="The Future by NAOMI ALDERMAN" />
      </div>      
   );
}