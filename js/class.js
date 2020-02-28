let classA = document.querySelectorAll('li');

classA.forEach(li => {
   li.addEventListener('click', function(){
      classA.forEach(a => a.classList.remove('active'));
       this.classList.add('active')
   });
});
