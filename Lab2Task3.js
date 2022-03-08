//if reading status is true then it will print, name, author and reading status
var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
var statuss = library.filter((DesOfBook)=>{
    if(DesOfBook.readingStatus == true)
    {
        return DesOfBook
    }
});
console.log(statuss)





