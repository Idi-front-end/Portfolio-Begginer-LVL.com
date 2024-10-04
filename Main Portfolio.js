const goTop = document.querySelector('.learn-mr');
goTop.addEventListener("click", () =>{
   const goWhere = document.querySelector('.bottom2-sc');
   goWhere.scrollIntoView({behavior: 'smooth'});
});


// FIRST SECTION

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
         entry.target.classList.add('show');
      }; 
   });
});


const selectHidden = document.querySelectorAll('.obs');
selectHidden.forEach((el) => observer.observe(el));

// USED LANGUAGES 


const observer1 = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
       console.log(entry)
       if(entry.isIntersecting){
           entry.target.classList.add('show');
       }; 
   });
});

const beforeEl = document.querySelectorAll('.hidden1');
beforeEl.forEach((el) => observer1.observe(el));


// CONTACT (obs-ct)

const observerCT = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
         entry.target.classList.add('show-ct');
      } else {
         entry.target.classList.remove('show-ct')
      };
   });
});

const hiddenCT = document.querySelectorAll(".obs-ct");
hiddenCT.forEach((el) => observerCT.observe(el));

const downAplace = document.querySelector(".down-a");
downAplace.addEventListener("click", () => {
   const where = document.querySelector(".down-a-place");
   where.scrollIntoView({behavior: 'smooth'});
});

const hiddenCT2 = document.querySelector('.down-a-2');
hiddenCT2.addEventListener("click", () => {
   const whereGo2 = document.querySelector(".down-a2-place");
   whereGo2.scrollIntoView({behavior: "smooth"});
});



const DWobserver = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
   console.log(entry)
   if(entry.isIntersecting){
      entry.target.classList.add('show-DW');
   } else {
      entry.target.classList.remove('show-DW');
   };
  });
});


const selectObsDW = document.querySelectorAll('.obs-down');
selectObsDW.forEach((el) => DWobserver.observe(el));