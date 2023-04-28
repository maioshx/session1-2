const app = Vue.createApp({
 
    // template -data - methods - computed
    
    // template:' <h1> hellooo </h1> ',
data(){
return {
     word: "click here",
     url:"http://www.google.com",
     title:" the final empire ",
     author:" barnden sanderson ",
     age:25,
     showBook:true,
     x:0,
     y:0,
     books:[
        {tittle:"helooo",author:"mai 1",isFav:true,image:"images/1.jpg"},
        {tittle:"yess",author:"mai 2",isFav:false,image:"images/2.jpg"},
        {tittle:"noo",author:"mai 3",isFav:true,image:"images/3.jpg"},
        {tittle:"hiii",author:"mai 4",isFav:false,image:"images/4.jpg"}
     ]
}

},
methods:{
    changeAuthorName(author){
        this.author=author
    },

    hideBook(){
        this.showBook=false
    },

    ShowBook(){ 
        this.showBook=true
    },
    toggleShowBook(){
        this.showBook=!this.showBook
    },
    handleEvent(){
console.log("event");
    },
    handlemousemove(event,data){
this.x=event.offsetX
this.y=event.offsetY
    },
    toggleFav(book){
        book.isFav=!book.isFav
    }
},
computed:{
    filterbooks(){
        return this.books.filter((book)=>!book.isFav)
    }
}


})
app.mount('#app')