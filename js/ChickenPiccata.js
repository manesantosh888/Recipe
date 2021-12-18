 
             //to toggle the like button
            const btnE1=document.getElementById('btn')
            const btnE2=document.getElementById('btndiv')
            btnE1.addEventListener('click', function toggle(){
                btnE1.classList.toggle('button')

                //to toggle between Like and UnLike text in the button
                if (btnE1.innerHTML === "Like") {
                    btnE1.innerHTML = "UnLike";
                    //it will remove +1 button
                    const btn2 = document.getElementById('button1')
                    btnE2.removeChild(btn2)
                  } else {
                    btnE1.innerHTML = "Like"; 
                    //it will create +1 button                   
                    const btn1=document.createElement('button')
                    btn1.id="button1"
                    btn1.innerHTML="+1"
                    btnE2.appendChild(btn1)
                    //to toggle css class to newly created button 
                    btn1.classList.toggle('button1')
                  }
            })

            // to add lement dynamically
            var count = 0; 
            function ingredients(){                 
               count++;
                if(count<=1){
                    const createE1 = document.createElement('ul')
                    const createE2 = document.createElement('li')
                    createE2.innerHTML="4 skinless, boneless chicken breast halves"

                    const createE3 = document.createElement('li')
                    createE3.innerHTML="cayenne pepper, or to taste"   

                    const createE4 = document.createElement('li')
                    createE4.innerHTML="2 tablespoons fresh Italian parsley, chopped"

                    const createE5 = document.createElement('li')
                    createE5.innerHTML="salt and ground black pepper to taste"

                    const createE6 = document.createElement('li')
                    createE6.innerHTML="2 tablespoons olive oil"

                    const createE7 = document.createElement('li')
                    createE7.innerHTML="1 tablespoon capers, drained"


                    const createE8 = document.createElement('li')
                    createE8.innerHTML="½ cup white wine"


                    const createE9 = document.createElement('li')
                    createE9.innerHTML="¼ cup fresh lemon juice"

                    const createE10 = document.createElement('li')
                    createE10.innerHTML="¼ cup water"

                    const createE11 = document.createElement('li')
                    createE11.innerHTML="3 tablespoons cold unsalted butter, cut in 1/4-inch slices"

                    const createE12 = document.createElement('li')
                    createE12.innerHTML="4 skinless, boneless chicken breast halves"

                    //After creating any element we have to append that child to its parent
                    const parentE1 = document.getElementById('parent1')
                    parentE1.appendChild(createE1)
                    createE1.appendChild(createE2)
                    createE1.appendChild(createE3)
                    createE1.appendChild(createE4)
                    createE1.appendChild(createE6)
                    createE1.appendChild(createE7)
                    createE1.appendChild(createE8)
                    createE1.appendChild(createE9)
                    createE1.appendChild(createE10)
                    createE1.appendChild(createE11)
                    createE1.appendChild(createE12)
                }
        }
        var count1 = 1;
        function steps(){  
              
            count1++;
             if(count1<=2){
                 const createE1 = document.createElement('ol')
                 const createE2 = document.createElement('li')
                 createE2.innerHTML="Place chicken breasts between 2 layers of plastic wrap and pound to about 1/2-inch thick."

                 const createE3 = document.createElement('li')
                 createE3.innerHTML="Season both sides of chicken breasts with cayenne, salt, and black pepper; dredge lightly in flour and shake off any excess."   

                 const createE4 = document.createElement('li')
                 createE4.innerHTML="Heat olive oil in a skillet over medium-high heat. Place chicken in the pan, reduce heat to medium, and cook until browned and cooked through, about 5 minutes per side; remove to a plate."

                 const createE5 = document.createElement('li')
                 createE5.innerHTML="Cook capers in reserved oil, smashing them lightly to release brine, until warmed though, about 30 seconds."

                 const createE6 = document.createElement('li')
                 createE6.innerHTML="Pour white wine into skillet. Scrape any browned bits from the bottom of the pan with a wooden spoon. Cook until reduced by half, about 2 minutes."

                 const createE7 = document.createElement('li')
                 createE7.innerHTML="Stir lemon juice, water, and butter into the reduced wine mixture; cook and stir continuously to form a thick sauce, about 2 minutes. Reduce heat to low and stir parsley through the sauce."


                 const createE8 = document.createElement('li')
                 createE8.innerHTML="Return chicken breasts to the pan cook until heated through, 1 to 2 minutes. Serve with sauce spooned over the top."

                 //After creating any element we have to append that child to its parent
                 const parentE1 = document.getElementById('parent2')
                 parentE1.appendChild(createE1)
                 createE1.appendChild(createE2)
                 createE1.appendChild(createE3)
                 createE1.appendChild(createE4)
                 createE1.appendChild(createE6)
                 createE1.appendChild(createE7)
                 createE1.appendChild(createE8)
             }
     }
       