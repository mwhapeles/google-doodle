// Check JS is Connected
console.log('JS Connected');
gsap.fromTo("#Jim", {
    y:0,
      ease: "bounce",  
       repeat:3,
      delay:3,
    },
               {
    y:-10,
      ease: "bounce",
    
      duration:.75,
    
    });
    
    gsap.fromTo("#leftforearm", {
       y:0, 
      delay:5,
      duration:.5
    },
               
               {
      y:-15, 
      duration:.5,
      rotate:-30,
      yoyo:"true",
      repeat:4
    });
    
    
    
    gsap.to ('svg', {
      y:-700, 
      delay:5.10, 
      duration:10,
    });
      
    
